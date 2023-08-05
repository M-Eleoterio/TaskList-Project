import React from 'react'
import styles from './MotivosContainer.module.scss'

export default function MotivosContainer({icon, titulo, children}) {
    return (
        <div className={styles.motivosContainer}>
            <div>
                <div style={{backgroundImage: `url("${icon}")`}}></div>
                <p>{titulo}</p>
            </div>
            <p>{children}</p>
        </div>
    )
}
