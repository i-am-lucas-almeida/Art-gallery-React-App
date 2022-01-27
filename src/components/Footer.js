import {Link} from 'react-router-dom';
import { FaFacebookSquare, FaInstagram, FaTwitter } from "react-icons/fa";

import styles from './styles/Footer.module.css';

function Footer({type, logo, icon}) {

    return(

        <section className={`${styles.footer_container} ${styles[type]}`}>

            <Link to='/home'>

                <h3 className={styles.footer_logo}>

                    <span className={styles[logo]}>modern</span> <br></br> art gallery

                </h3>

            </Link>

            <div className={styles.footer_paragraph}>

                <p>The Modern Art Gallery is free to all visitors and open seven days a week from 8am to 9pm. Find us at 99 King Street, Newport, USA.</p>

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