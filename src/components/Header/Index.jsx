
import React from 'react';

import AppButton from '../AppButton';
import './index.css'
import Logo from './logo';
import SearchBar from './SearchBar';
import AppThemeToggle from '../AppThemeToggle';
import HambMenu from '../hambMenu';

class Header extends React.Component {
    render(){
        return (
            <header className= 'sticky-top'>
                <nav className='d-flex  align-items-center menunav '>

                    <Logo/>
                    <SearchBar/>
                    <AppButton 
                        className="log-in"
                        type="anchor"
                        text="log in"
                    />
                    <AppButton
                        text="create account"
                        className="boton"
                    />
                    <AppThemeToggle />
                    <HambMenu/>

                </nav>
            </header>
        );
    }
}

export default Header;

