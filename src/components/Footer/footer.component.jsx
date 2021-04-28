import React from 'react'
import './footer.component.scss'
import { ReactComponent as ZILogo } from '../../assets/logoZI.svg';
import { ReactComponent as JanmarLogo } from '../../assets/janmar.svg';
import firma from '../../assets/firma.png'
import { HashLink } from 'react-router-hash-link';

export default function Footer() {
    return (
        <section className="section section-08">
            <div className="container">
                <div className="footer">
                    <div className="display-2"><h1>LINK-uri UTILE</h1></div>
                    <HashLink to="/info#terms">
                        <p>Termeni si conditii</p>
                    </HashLink>
                    <HashLink to="/info#cookies">
                        <p>Politica de cookies</p>
                    </HashLink>
                    <p>Prelucrarea datelor personale</p>
                    <p>Retur produse</p>
                    <p>Livrare</p>
                    <p>Modalitati de plata</p>
                    <a href="https://anpc.ro/">
                        <p>ANPC</p>
                    </a>
                    <div className="zi-logo">
                        <a href="https://zebrainks.com/">
                            <ZILogo/>
                        </a>
                    </div>
                    <div className="janmar-logo">
                        <JanmarLogo style={{marginBottom: '4px'}}/>
                        <h5 style={{marginBottom: '4px'}}>JANMAR COM SRL</h5>
                        <h6>RO5211602</h6>
                        <h6>J08/3568/1993</h6>
                        <h6>+40 371 169 607</h6>
                        <h6>janmar.com.srl@gmail.com</h6>
                    </div>
                    <div className="firma">
                        <img src={firma} alt=""/>
                    </div>
                    <div className="copyright">
                        <p>Copyright 2021 @ JANMAR SRL Toate drepturile rezervate</p>
                    </div>
                </div>
            </div>
        </section>
    )
}