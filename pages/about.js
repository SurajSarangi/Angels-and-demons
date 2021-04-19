import styles from '../styles/Home.module.css';

const About = () => {
    return (  
        <div>
            <h1 className={styles.title}>About</h1>
            <p className={styles.text}>
                Dan Brown is one of the modern legends when it comes to English Authors. Known for writing thrillers, most notably the Robert Langdon novels, Angels &amp; Demons is one of his finest works.<br></br><br></br>
                Click <a className={styles.here} target='_blank' href="https://en.wikipedia.org/wiki/Dan_Brown">here</a> to know more about him
            </p>
        </div>
    );
}
 
export default About;