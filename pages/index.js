import styles from '../styles/Home.module.css';
import Link from 'next/link';
import Header from '../partials/header';

export default function Home() {
  return (
    <div>
      <Header title="Home" />
      <h1 className={styles.title}>Homepage</h1>
      <p className={styles.text}>Welcome to my site for the book Angels &amp; Demons of the Robert Langdon novel series by Dan Brown.</p>
      <p className={styles.text}>Lets take a look at the character sketch of the different characters encountered while reading the novel.</p>
      <Link href='/characters/'>
        <a className={styles.btn}>See all Characters</a>
      </Link>
    </div>
  )
}
