import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
    return ( 
        <nav>
            <div className="logo">
                <Image src="/illuminati.svg" height={100} width={250} />
                {/* <h1>Angels &amp; Demons</h1> */}
            </div>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/characters">Characters</Link>
        </nav>
     );
}
 
export default Navbar;