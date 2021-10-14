import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <nav className='navbar navbar-expand bg-dark'>
                <div className='container'>
                    <ul className='nav'>
                        <img src={logo} alt='logo' style={{ height: '40px' }} />
                        <li>
                            <Link to='/' className='nav-link'>Home</Link>
                        </li>
                        <li>
                            <Link to='/book-management' className='nav-link'>Book Management</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;