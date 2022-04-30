import {Link} from 'react-router-dom';
import { FaFacebookSquare, FaInstagram, FaTwitter } from "react-icons/fa";

import styles from '../styles/Footer.module.css';

function Footer({type, icon}) {

    return(

        <section className={`${styles.footer_container} ${styles[type]}`}>

            <Link to='/' className={styles.logo}>

                <h3 className={styles.footer_logo}>

                    galeria de <br/> belas artes

                </h3>

            </Link>

            <div className={styles.footer_paragraph}>

                <p>A Galeria de Belas Artes é gratuita para todos os visitantes e está aberta sete dias por semana, das 8h às 21h. Encontre-nos na 1578 da Bela Vista, Av.Paulista, SP.</p>

            </div>

            <ul className={styles.social_container}>

                <li className={`${styles.link} ${styles[icon]}`}> <FaFacebookSquare/> </li>
                <li className={`${styles.link} ${styles[icon]}`}> <FaInstagram/> </li>
                <li className={`${styles.link} ${styles[icon]}`}> <FaTwitter/> </li>

            </ul>

        </section>
        
    )

}

export default Footer;