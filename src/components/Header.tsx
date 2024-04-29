import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
    const location = useLocation();

    return (
        <div style={{ backgroundColor: '#f0f0f0', padding: '10px 0', textAlign: 'center' }}>
            <NavLink to="/" style={{ textDecoration: 'none', color: location.pathname === '/' ? '#007bff' : '#333', fontWeight: 'bold', transition: 'color 0.3s ease', marginRight: '30px' }}>Card1</NavLink>
            <NavLink to="/card2" style={{ textDecoration: 'none', color: location.pathname === '/card2' ? '#007bff' : '#333', fontWeight: 'bold', transition: 'color 0.3s ease' }}>Card2</NavLink>
        </div>
    );
};

export default Header;
