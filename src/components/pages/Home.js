import styles from '../styles/Home.module.css';
import heroImage from '../../assets/desktop/image-hero.jpg'; 
import ButtonLocation from '../layout/ButtonLocation';
import Footer from '../layout/Footer';

import imageGrid_1 from '../../assets/desktop/image-grid-1.jpg';
import imageGrid_2 from '../../assets/desktop/image-grid-2.jpg';
import imageGrid_3 from '../../assets/desktop/image-grid-3.jpg';

function Home() {

    return(

        <>
           
            <section className={styles.header}>

                <div className={styles.box_left}>

                    <h1 className='animate__animated animate__fadeIn animate__delay-2s'>Galeria De <br/> Belas Artes</h1>    
                    
                </div>

                <div className={styles.box_image} >

                    <img src={heroImage} alt='hero backg' />

                </div>

                <div className={styles.box_right}>

                    <div className='animate__animated animate__fadeIn animate__delay-1s'>

                        <h1 className={styles.title_mobile}>Galeria De <br/> Belas Artes</h1> 

                        <p>
                            As artes da nova coleção de nossa galeria partiram de uma centelha de inspiração. Essas peças vão te inspirar? Visite-nos e descubra.
                        </p>

                        <ButtonLocation to='/location' text='Nossa Localização' btn_right='show' />

                    </div>

                </div>

            </section>

            <main>

                <section className={styles.container_grid}>

                    <div className={styles.box_txt__left}>

                        <h2 className={styles.subtitle}>Passe o dia <br/> na galeria</h2>

                        <p className={styles.paragraph}>
                            Passeie por nossas coleções distintas e encontre novos insights sobre nossos artistas. Mergulhe nos detalhes de seu processo criativo.
                        </p>

                    </div>

                    <div className={`${styles.image_container} ${styles.image_container__1}`}>

                        <img src={imageGrid_1} alt='illustration gallery 1' />

                        <small className="animate__animated animate__slideInUp">Helô Alcantara Machado, coleção "L'arte tribale"</small>

                    </div>

                    <div className={`${styles.image_container} ${styles.image_container__2}`}>

                        <img src={imageGrid_2} alt='illustration gallery 2' />

                        <small className="animate__animated animate__slideInUp">Maria Sá Pena, "Rotas do Tempo"</small>

                    </div>

                    <div className={`${styles.image_container} ${styles.image_container__3}`}>

                        <img src={imageGrid_3} alt='illustration gallery 3' />

                        <small className="animate__animated animate__slideInUp">Exposição "Obras de José Matuzzo"</small>

                    </div>

                    <div className={styles.box_txt__right}>

                        <h2 className={styles.subtitle}>Venha &#38; <br/> inspire-se</h2>

                        <p className={styles.paragraph}>
                            Estamos ansiosos para recebê-los em nossa galeria e ver como nossas coleções os influenciam.
                        </p>

                    </div>

                </section>

            </main>

            <Footer type='footer_home' icon='icon_home'/>

        </>

    )

}

export default Home;