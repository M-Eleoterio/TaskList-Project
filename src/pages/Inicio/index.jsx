import React from 'react'
import HeaderNav from '../../components/HeaderNav'
import styles from './Inicio.module.scss'

export default function Inicio() {
    return (
        <div>
            <HeaderNav></HeaderNav>
            <section className={styles.principalBanner}>
                <div className={styles.textContainer}>
                    <div>
                        <h1>Domine sua Produtividade com</h1>
                        <p>“nome do site”</p>
                    </div>
                    <p>Você já se pegou perdendo o foco e atrasando tarefas importantes? Não se preocupe, nós temos a solução perfeita para você! Bem-vindo ao nosso “nome do site” - a ferramenta definitiva para otimizar sua produtividade e alcançar seus objetivos de forma eficiente.</p>
                    <button>ver mais</button>
                </div>
                <div className={styles.imageContainer}></div>
            </section>
        </div>
    )
}
