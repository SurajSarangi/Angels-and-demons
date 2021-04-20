import Link from 'next/link';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const NotFound = () => {

    const router = useRouter();
    useEffect(() => {
        setTimeout(() => {
            router.push('/');
        }, 5000)
    }, [])

    return ( 
        <div className="not-found">
            <h1>Sorry for the inconvinience</h1>
            <h2>The page you're looking for does not exist</h2>
            <p>Auto directing to <Link href='/'><a>Homepage</a></Link> </p>
        </div>
     );
}
 
export default NotFound;