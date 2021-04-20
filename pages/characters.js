import styles1 from '../styles/Home.module.css';
import Header from '../partials/header';

const Characters = () => {
    return ( 
        <div>
            <Header title="Characters" />
            <h1 className={styles1.title}>All Characters</h1>
        </div>
     );
}
 
export default Characters;