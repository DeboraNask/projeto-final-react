import logo from '../../assets/LOGOGS.png'
import styles from './home.module.css'

function Home(){
    return(
        <div className={styles.logo}>
            <h1>Bem vindos!</h1>
            <img src={logo} />
        </div>

    )
}

export default Home