import {Link} from 'react-router-dom';

import styles from '../styles/ButtonLocation.module.css';

import imageLeft from '../../assets/icons/icon-arrow-left.svg';
import imageRight from '../../assets/icons/icon-arrow-right.svg';

function ButtonLocation({to, text, btn_left, btn_right}) {

    return(

        <Link to={to} className={styles.link_btn}>
            
            <div className={styles.btn_container}>

                <div className={`${styles.btn_left} ${styles[btn_left]} `}>

                    <img src={imageLeft} alt='icon arrow' />

                </div>

                <div className={styles.bnt_center}>

                    {text}

                </div>

                <div className={`${styles.btn_right} ${styles[btn_right]}`}>

                    <img src={imageRight} alt='icon arrow' />

                </div>

            </div>

        </Link>

    )

}

export default ButtonLocation;