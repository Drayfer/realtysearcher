
import styles from './Header.module.css'


const Header = () => {

    return (
        <>
            <div className={styles.wrapper}>
                <div className={styles.logo}>
                    <span style={{fontStyle:'normal', fontWeight:'600'}}>Casa</span>
                    <span style={{fontStyle:'italic', fontFamily:'Playfair Display', fontWeight:'700'}}>Velocè</span>
                </div>
                {/* <div>
                      About project
                </div> */}
                <div className={styles.btn}>
                    <button className={styles.favorite}
                        onClick={()=>console.log("click to Favourites")}>
                        <svg className={styles.svg} width="18" height="14" viewBox="0 -1 17 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path opacity="0.5" d="M8.83482 14.3338L8.54664 14.1037C2.35074 9.27172 0.669678 7.56903 0.669678 4.80792C0.669678 2.50699 2.59089 0.666252 4.9924 0.666252C6.96164 0.666252 8.06634 1.72468 8.83482 2.55301C9.6033 1.72468 10.708 0.666252 12.6772 0.666252C15.0788 0.666252 17 2.50699 17 4.80792C17 7.56903 15.3189 9.27172 9.123 14.1037L8.83482 14.3338Z" fill="#B0977D" />
                        </svg>
                       <span style={{fontStyle:'normal', fontWeight:'500', fontSize:'14px', letterSpacing:'-0.02em'}}>Favourites</span>
                    </button>
                </div>
            </div>
        </>
    )
}



export default Header;