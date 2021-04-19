import Header from './header';
import Navbar from './navbar';
import Footer from './footer';

const Layout = ({ children }) => {
    return (
        <div className="content">
            <Header />
            <Navbar />
            { children }
            <Footer />
        </div>
     );
}
 
export default Layout;