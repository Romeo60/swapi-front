import React from 'react';
import CSS from 'csstype';

const logoStyle:CSS.Properties = {
    height: '70px',
    width: 'auto'
}

const headerStyle:CSS.Properties = {
    height: '75px',
    backgroundColor: 'black'
}


const Header: React.FC = () => {
    return (
        <header style={headerStyle}>
            {/*<nav>
                <ul>
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about">About</NavLink>
                    </li>
                </ul>
            </nav>*/}
            <span>
                <img style={logoStyle} src={require('./../img/star.png').default}  alt={'logo'}/>
                {/*<img style={logoStyle} src={require('./../img/sovtech.png').default} alt={'logo'} />*/}
            </span>
        </header>
    );
}

export default Header;