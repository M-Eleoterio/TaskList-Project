import React, { useEffect, useState } from 'react'
import styles from './ListPage.module.scss';
import axios from 'axios';

export default function ListPage() {
    const [listaHandler, setListaHandler] = useState(false)
    const [listas, setListas] = useState([])
    const [listaAtiva, setListaAtiva] = useState({});
    const dataToSend = {
        "nome": "lista rola",
        "tarefas": ["comprar rola"]
    }

    useEffect(() => {
        axios.get("https://my-json-server.typicode.com/deexty/taskList-db/listas")
            .then((response) => {
                setListas(response.data);;
            })
            .catch((error) => {
                console.error('Erro:', error);
            });
    }, []);

    useEffect(() => {
        axios.post('https://my-json-server.typicode.com/deexty/taskList-db/db', dataToSend)
    .then(response => {
        console.log('Resposta da API:', response.data);
    })
    .catch(error => {
        console.error('Erro:', error);
    });
    }, []);

    return (
        <div className={styles.listPage}>
            <div>
                <h1>minhas listas</h1>
                <button></button>
            </div>
            <section>
                <div>
                    <button onClick={() => listaHandler === true ? setListaHandler(false) : setListaHandler(true)}>minhas listas</button>
                    {listaHandler &&
                        <ul id='lista'>
                            {listas.map(listaAtual => <li onClick={() => setListaAtiva(listaAtual)}>{listaAtual.nome}</li>)}
                        </ul>
                    }
                </div>
                <ul>
                    {listaAtiva.tarefas ? listaAtiva.tarefas.map(tarefa => <li>{tarefa}</li>) : null}
                </ul>
            </section>
        </div>
    )
}
