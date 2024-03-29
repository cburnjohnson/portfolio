import React from 'react';
import { Link } from 'gatsby';

const Navbar = () => {
    return (
        <nav className='navbar'>
            <h1>
                <Link to='/' activeClassName='navbar-active'>
                    Cole Johnson
                </Link>
            </h1>
            <ul>
                <li>
                    <Link activeClassName='navbar-active' to='/projects'>
                        Projects
                    </Link>
                </li>
                <li>
                    <Link activeClassName='navbar-active' to='/resume'>
                        Resume
                    </Link>
                </li>
                {/* <li>
                    <Link to='/contact' activeClassName='navbar-active'>
                        About / Contact
                    </Link>
                </li> */}
            </ul>
        </nav>
    );
};

export default Navbar;
