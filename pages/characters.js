import styles1 from '../styles/Home.module.css';
import styles2 from '../styles/Chars.module.css';
import Header from '../partials/header';

export const getStaticProps = async() => {
    const res = await fetch('http://localhost:3003/characters');
    const data = await res.json();
    
    return{
        props : {characters : data}
    };
}

const Characters = ({ characters }) => {
    return ( 
        <div>
            <Header title="Characters" />
            <h1 className={styles1.title}>All Characters</h1>
            {characters.map(element => (
                <div key={ element.id } className={styles2.desc}>
                    <h2 className={styles2.name}>{ element.name }</h2>
                    <p><span className={styles2.occ}>{ element.occupation }</span> at <span className={styles2.loc}>{ element.location }</span></p>
                </div>      
            ))}
        </div>
     );
}
 
export default Characters;