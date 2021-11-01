
import styles from './Footer.module.css'


const Footer = () =>{

    return (
        <>
        <div className={styles.footer}>
            <div className={styles.footer__inner}>
                <div className={styles.footer__first}>
                    <hr className={styles.line}></hr>
                    <div className={styles.logo}>
                        <div className={styles.casa}>
                            <span style={{fontStyle:'normal', fontWeight:'600'}}>Casa</span>
                            <span style={{fontStyle:'italic', fontFamily:'Playfair Display', fontWeight:'700'}}>Velocè</span>
                        </div>
                        <div className={styles.footer__text}
                            style={{fontStyle:'normal', fontFamily:'Roboto', fontWeight:'400'}}>
                            (c) Casa Veloce - 2021
                        </div>
                    </div>
                    
                    <div className={styles.footer__sait}
                        style={{fontStyle:'normal', fontFamily:'Body/Small', fontWeight:'500'}}>
                            <a className={styles.link__sait} href="#" target="_blank">
                                     casaveloce@gmail.com</a>
                    </div>
                </div>

                <div className={styles.footer__second}>
                    <div className={styles.footer__block}>
                        <div className={styles.footer__title}
                            style={{fontStyle:'inter', fontFamily:'Body/Middle', fontWeight:'500'}}>
                            Company
                        </div>
                        <div className={styles.contact__list}>
                            <div className={styles.contact}
                                style={{fontStyle:'normal', fontFamily:'Body/Middle', fontWeight:'500'}}>
                                <a className={styles.link} href="#">Main</a>
                            </div>
                            <div className={styles.contact}
                                style={{fontStyle:'normal', fontFamily:'Body/Middle', fontWeight:'500'}}>
                                <a className={styles.link} href="#">
                                    About the project</a>
                            </div>
                            <div className={styles.contact} 
                                style={{fontStyle:'normal', fontFamily:'Body/Middle', fontWeight:'500'}}>
                                <a className={styles.link} href="#">Partners</a>
                            </div>
                        </div>
                    </div>
                    </div>
                    
                <div className={styles.footer__third}>
                    <div className={styles.footer__block}>
                        <div className={styles.footer__title}
                            style={{fontStyle:'inter', fontFamily:'Body/Middle', fontWeight:'500'}}>
                             Search
                        </div>
                        <div className={styles.contact__list}>
                            <div className={styles.contact} 
                                style={{fontStyle:'normal', fontFamily:'Body/Middle', fontWeight:'500'}}>
                                <a className={styles.link} href="#">Rent</a>
                            </div>
                            <div className={styles.contact}
                                style={{fontStyle:'normal', fontFamily:'Body/Middle', fontWeight:'500'}}>
                                <a className={styles.link} href="#">Purchase</a>
                            </div>
                            <div className={styles.contact}
                                style={{fontStyle:'normal', fontFamily:'Body/Middle', fontWeight:'500'}}>
                                <a className={styles.link} href="#">FAQ</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.footer__fourth}>
                    <div className={styles.footer__block}>
                        <div className={styles.footer__title}
                            style={{fontStyle:'inter', fontFamily:'Body/Middle', fontWeight:'500'}}>
                            Services
                        </div>
                        <div className={styles.contact__list}>
                            <div className={styles.contact} 
                                style={{fontStyle:'normal', fontFamily:'Body/Middle', fontWeight:'500'}}>
                                <a className={styles.link} href="#">Contacts</a>
                            </div>
                            <div className={styles.contact}
                                style={{fontStyle:'normal', fontFamily:'Body/Middle', fontWeight:'500'}}>
                                <a className={styles.link} href="#">Terms and Conditions</a>
                            </div>
                            <div className={styles.contact}
                                style={{fontStyle:'normal', fontFamily:'Body/Middle', fontWeight:'500'}}>
                                <a className={styles.link} href="#">Privacy Policy</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}



export default Footer;