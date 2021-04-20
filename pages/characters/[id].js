import styles1 from '../../styles/Home.module.css';
import styles2 from '../../styles/Chars.module.css';
import Header from '../../partials/header';

export const getStaticPaths = async() => {
    const res = await fetch('https://my-json-server.typicode.com/surajsarangi/Angels-and-demons-server/characters');
    const data = await res.json();
    
    const paths = data.map(element => {
        return{
            params: { id: element.id.toString() }
        }
    })
    
    return{
        paths,
        fallback: false
    }
}

export const getStaticProps = async(context) =>{
    const id = context.params.id;
    const res = await fetch('https://my-json-server.typicode.com/surajsarangi/Angels-and-demons-server/characters/' + id);
    const data = await res.json();

    return{
        props : { character : data }
    }
};

const Details = ({ character }) => {
    return ( 
        <div>
            <Header title={character.name} />
            <h1 className={styles1.title}>Details</h1>
            <h1 className={styles2.name}>{ character.name }</h1>
            <p>
                <div className={styles2.occ}>{ character.occupation }</div>
                <div>{ character.institution }</div>
                <div>{ character.location }</div>
            </p>
        </div>
     );
}
 
export default Details;