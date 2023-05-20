"use client";


import Image from 'next/image'
import styles from './page.module.css'
import { useState } from 'react'

export default function Home() {

  const [number, setNumber] = useState(0);
  const [modal, setModal] = useState(false);

  return (
    <main className={styles.main}>
      <div className={styles.container} >
        {/* <img className={styles.image}  src='../../casamento.png' /> */}
        <div className={styles.container_filter_image} >
          <div className={styles.container_box} >
            {/* <div className={styles.modal} >
              
            </div> */}
            <h3>
              DIGITE EM NÚMEROS, SEU AMOR POR SEU MARIDO:
            </h3>
            <input
              value={number}
              onChange={e =>
                setNumber(e.target.value)
              } type='number' />
              <div className={styles.button} >
                <button onClick={e =>
                alert("Fico muito feliz em saber amor mas tenho que dizer que te amo mais! <3. Tente novamente outro valor!")
                } >
                  
                </button>
              </div>
          </div>
        </div>

      </div>
      {/* <img className={styles.image} src="../../casamento.png" /> */}
    </main>
  )
}
