import React from "react";
import styles from './Header.module.css'; // if using CSS modules

interface HeaderProps {
    title: string; // Example prop for demonstration
}

const Header: React.FC<HeaderProps> = ({ title }) => {
    return (
        <header className={styles.header}>
            <h1>{title}</h1>
        </header>
    );
}

export default Header;
