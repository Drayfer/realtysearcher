import axios from 'axios';



import styles from './NotFound.module.css';


const NotFound = () => {

    // const fetchData = async () => {
    //     await  axios.get('https://realty.awkr.site/api/realitys/',{
    //        params: {
    //            low_qty_rooms: 4,
    //            high_price: 21000000.00,
    //            payment_type: 'sale'
    //          }
    //    }).then(response => console.log(response.data))
    //    }


    return (
        <>
         {/* <button onClick={fetchData}>Test fetch</button> */}
        <h1 className={styles.not__found}>Not Found 404</h1>
        
        </>
    )
}

export default NotFound;