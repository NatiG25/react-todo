import React from "react"
import styles from "../styles/Header.module.css";

const Header = () => {
    const headerStyles = {
        padding: '20px 0',
        lineHeight: '1.5em',
        color: '#aeadad',
        textAlign: 'center',
    }
    return (
        <header style={headerStyles} className={styles.header}>
            <h1>Todos</h1>
        </header>
    )
}

export default Header;
