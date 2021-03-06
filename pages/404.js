import Link from 'next/link';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Header from '../partials/header';

const NotFound = () => {

    const router = useRouter();
    useEffect(() => {
        setTimeout(() => {
            router.push('/');
        }, 5000)
    }, [])

    return (
        <div>
            <Header title="404" />
            <div className="not-found">
                <h1>Sorry for the inconvinience</h1>
                <h2>The page you're looking for does not exist</h2>
                <p>Auto directing to <Link href='/'><a>Homepage</a></Link> </p>
            </div>
        </div> 
     );
}
 
export default NotFound;