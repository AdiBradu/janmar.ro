import React from 'react'
import './homepage.component.scss'
import { motion } from "framer-motion"
import ClusterMessage from '../../components/clusterMessage/clusterMessage.component'
import Benefits from '../../components/Benefits/Benefits.component'
import Vopsele from '../../components/Vopsele/vopsele.component'
import Newsletter from '../../components/Newsletter/newsletter.component'
import Parteneri from '../../components/Parteneri/parteneri.component'
import Contact from '../../components/Contact/contact.component'
import Seap from '../../components/Seap/seap.component'
import Footer from '../../components/Footer/footer.component'

export default function HomePage() {
    return (
        <motion.div className="home-page" exit={{opacity:0}}>
            <ClusterMessage/>
            <Benefits/>
            <Vopsele/>
            <Newsletter/>
            <Parteneri/>
            <Contact/>
            <Seap/>
            <Footer/>
        </motion.div>
    )
}
