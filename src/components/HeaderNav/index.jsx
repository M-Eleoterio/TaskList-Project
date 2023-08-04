import React from 'react'
import styles from './HeaderNav.module.scss'
import { Link } from 'react-router-dom'

export default function HeaderNav() {
    return (
        <header className={styles.headerContainer}>
            <div>
                <div></div>
                <p>login</p>
            </div>
            <nav>
                <Link to={"/"}>Inicio</Link>
                <Link to={"/"}>minha lista</Link>
            </nav>
            <button className={styles.menuButton}></button>
            <button className={styles.themeButton}></button>
        </header>
    )
}
