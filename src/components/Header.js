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
            <p>Items will persist in the browser's localStorage</p>
        </header>
    )
}

export default Header;
