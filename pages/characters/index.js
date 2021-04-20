import styles1 from '../../styles/Home.module.css';
import styles2 from '../../styles/Chars.module.css';
import Header from '../../partials/header';
import Link from 'next/link'

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
                <Link href={`/characters/${ element.id }`} key={ element.id }>
                    <a className={styles2.desc}>
                        <h2 className={styles2.name}>{ element.name }</h2>
                    </a>
                </Link>      
            ))}
        </div>
     );
}
 
export default Characters;