// src/components/Header.tsx
import React from 'react';
import { Menubar } from 'primereact/menubar';
// import styles from './Header.module.scss'
const Header: React.FC = () => {
    const items = [
        {
            label: 'Home',
            icon: 'pi pi-fw pi-home',
        },
        {
            label: 'About',
            icon: 'pi pi-fw pi-info',
        },
        {
            label: 'Contact',
            icon: 'pi pi-fw pi-envelope',
        },
    ];

    return (
        // Simple Header with Menubar
        <Menubar model={items} />
    );
};

export default Header;
