import styles from '../styles/Home.module.css';
import heroImage from '../../assets/desktop/image-hero.jpg'; 
import ButtonLocation from '../ButtonLocation';
import Footer from '../Footer';

import imageGrid_1 from '../../assets/desktop/image-grid-1.jpg';
import imageGrid_2 from '../../assets/desktop/image-grid-2.jpg';
import imageGrid_3 from '../../assets/desktop/image-grid-3.jpg';

function Home() {

    return(

        <>
           
            <section className={styles.header}>

                <div className={styles.box_left}>

                    <h1><span>Modern</span> <br/> Art <br/> Gallery</h1>    
                    
                </div>

                <div className={styles.box_image} >

                    <img src={heroImage} alt='hero backg' />

                </div>

                <div className={styles.box_right}>

                    <div>

                        <h1 className={styles.title_mobile}><span>Modern</span> <br/> art Gallery</h1> 

                        <p>
                            The arts in the collection of the Modern Art Gallery all started from a spark of inspiration. Will these pieces inspire you? Visit us and find out 
                        </p>

                        <ButtonLocation to='/location' text='Our Location' btn_right='show' />

                    </div>

                </div>

            </section>

            <main>

                <section className={styles.container_grid}>

                    <div className={styles.box_txt__left}>

                        <h2 className={styles.subtitle}>your day at <br></br> the gallery</h2>

                        <p className={styles.paragraph}>
                            Wander through our distinct collections and find new insights about our artists. Dive into the details of their creative process.
                        </p>

                    </div>

                    <img src={imageGrid_1} alt='illustration gallery 1' className={styles.grid_image__1} />

                    <img src={imageGrid_2} alt='illustration gallery 2' className={styles.grid_image__2} />

                    <img src={imageGrid_3} alt='illustration gallery 3' className={styles.grid_image__3} />

                    <div className={styles.box_txt__right}>

                        <h2 className={styles.subtitle}>come &#38; be <br></br> inspired</h2>

                        <p className={styles.paragraph}>
                            We’re excited to welcome you to our gallery and see how our collections influence you.
                        </p>

                    </div>

                </section>

            </main>

            <Footer type='footer_home' logo='logo_home' icon='icon_home'/>

        </>

    )

}

export default Home;