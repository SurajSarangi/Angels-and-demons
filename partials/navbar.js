import Link from 'next/link';

const Navbar = () => {
    return ( 
        <nav>
            <div className="logo">
                <h1>Angels &amp; Demons</h1>
            </div>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/characters">Characters</Link>
        </nav>
     );
}
 
export default Navbar;