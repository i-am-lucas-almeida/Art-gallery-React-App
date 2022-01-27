import ButtonLocation from '../ButtonLocation';
import Footer from '../Footer';
import styles from '../styles/Location.module.css';

import heroImageDesktop from '../../assets/desktop/image-map.png';

function Location() {

    return(

        <>

            <header className={styles.header_container}>

                <div className={styles.header_btn}>

                    <ButtonLocation to='/' text='Back to Home' btn_left='show'/>

                </div>

                <img src={heroImageDesktop} alt='location illustration' className={styles.hero_desktop} />

            </header>

            <section className={styles.location_container}>

                <aside>

                    <h2>our </h2>

                    <h2>location</h2>

                </aside>

                <div className={styles.box_local}>

                    <h3>99 KING STREET</h3>

                    <p> Newport <br></br>
                        RI 02840 <br></br>
                        United States of America <br></br>
                        <br></br>
                        Our newly opened gallery is located near the Edward King House on 99 King Street, the Modern Art Gallery is free to all visitors and open seven days a week from 8am to 9pm.
                    </p>

                </div>

            </section>

            <Footer type='footer_location' logo='logo_location' icon='icon_location'/>

        </>

    )

}

export default Location;