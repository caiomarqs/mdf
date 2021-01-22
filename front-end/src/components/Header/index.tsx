import React from 'react';

import mdfLogo from '../../assets/img/logo_ext.svg';


const Header = () => (
    <header>
        <a href="/">
            <img alt="mdf logo" src={mdfLogo} />
        </a>
    </header>
)

export { Header }