import ButtonLocation from '../layout/ButtonLocation';
import Footer from '../layout/Footer';
import styles from '../styles/Location.module.css';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

function Location() {

    const latitude = '-23.5613';
    const longitude = '-46.6560';

    return (

        <>

            <div className={styles.map} id='map'>

                <MapContainer center={[latitude, longitude]} zoom={15} style={{width: '100%', height: '100%'}}>
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright"></a> contributors' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={[latitude, longitude]}>
                        <Popup>
                            Av. Paulista, 1578 - Bela Vista, São Paulo - SP
                        </Popup>
                    </Marker>
                </MapContainer>

            </div>

            <header className={styles.header_container}>

                <div className={styles.header_btn}>

                    <ButtonLocation to='/' text='Voltar para a home' btn_left='show' />

                </div>

            </header>

            <section className={styles.location_container}>

                <aside>

                    <h2>Nossa <br /> Localização</h2>


                </aside>

                <div className={styles.box_local}>

                    <h3>1578 AV. PAULISTA</h3>

                    <p> Bela Vista <br />
                        01310-200 <br />
                        São Paulo <br />
                        <br />
                        Nossa galeria está localizada no coração da Avenida Paulista. A Galeria de Belas Artes é gratuita para todos os visitantes e está aberta sete dias por semana, das 8h às 21h.
                    </p>

                </div>

            </section>

            <Footer type='footer_location' logo='logo_location' icon='icon_location' />

        </>

    )

}

export default Location;