import Head from 'next/head';

const Header = ({ title }) => {
    return ( 
        <div>
            <Head>
                <title>Angels &amp; Demons | { title }</title>
                <link rel="shortcut icon" href="top.jpg" type="image/x-icon"/>
            </Head>
        </div>
     );
}
 
export default Header;