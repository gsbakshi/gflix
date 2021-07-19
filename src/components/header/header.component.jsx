import React from 'react';
import { Link } from 'react-router-dom';

import './header.styles.scss';

import { ReactComponent as Logo } from '../../assets/logo/vector/default-monochrome.svg';

const Header = ({ toggleAccountDropdownHidden, currentUser, toggleUser, hidden }) => (
    <div className='header'>
        <Link className='logo-container' to='/'>
            <Logo className='logo' />
        </Link>
        <div className='options'>
            <Link className='option' to='/'> Home </Link>
            <Link className='option' to='/action'> Action </Link>
            <Link className='option' to='/comedies'> Comedies </Link>
        </div>
    </div>
);

export default Header;