import React, { ReactNode } from 'react';
import Sidebar from './Sidebar/Sidebar';
import Header from './Header/Header';
import styles from './FullLayout.module.scss'
interface FullLayoutProps {
    children: ReactNode;
}

const FullLayout: React.FC<FullLayoutProps> = ({ children }) => {
    return (
        <>
            <Header />
            {/* Higher order component for wrapping the whole layout and Other Component */}
            <div className={`${styles['main-container']}`}>
                <Sidebar />
                <div className={`${styles['main-content']}`}>
                    {children}
                </div>
            </div>
        </>
    );
}

export default FullLayout;
