import React from 'react';

import Navbar from 'react-bootstrap/Navbar';

function Header () {
    
    return (
        <Navbar bg='dark' variant='dark'>
            <Container>
                <Navbar.Brand href='/'>
                    SamDakota
                </Navbar.Brand>
            </Container>
        </Navbar>
    );
}

export default Header;