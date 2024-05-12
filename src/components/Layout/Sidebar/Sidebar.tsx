// src/components/Sidebar.tsx
import React from 'react';
import { Menu } from 'primereact/menu';
// import styles from './Sidebar.module.scss'
const Sidebar: React.FC = () => {
    const items = [
        {
            label: 'Dashboard',
            icon: 'pi pi-fw pi-home',
        },
        {
            label: 'Profile',
            icon: 'pi pi-fw pi-user',
        },
        {
            label: 'Settings',
            icon: 'pi pi-fw pi-cog',
        },
    ];

    return (
        // Simple Sidebar
        <Menu model={items} />
    );
};

export default Sidebar;
