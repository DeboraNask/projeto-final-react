import menu from '../../assets/cardapio.jpeg'
import styles from './cardapio.module.css'

function Cardápio(){
    return(
        <>
        <div className={styles.header}>
            <h1>Conheça nossas delícias</h1>
            <img src={menu} />
        </div>

        <div className={styles.paragrafo}>
            <p> Conheça nossa história !!!</p>
            <p>
                O Gigante no Sabor, nasce de um fusão entre o meu espírito e formação inicial de 
                internacionalista e o prazer de cozinhar para família e amigos. 
                Me profissionalizei e o hoje sou conhecido como Chef Marcos, o Gigante.
            </p>
        </div>
        </>
       
    )
}

export default Cardápio