import axios from 'axios';
import { useEffect, useState, useContext } from 'react'
import { useHistory } from "react-router-dom";
import CardModule from '../../components/Card/CardModule'
import ListContext from '../../context';

import styles from './ListingPage.module.css';
import Loader from './Loader';

const ListingPage = (props) => {

    const {state, setState} = useContext(ListContext)
    const history = useHistory()

    const [loading, setLoading] = useState(true)
    const url = 'https://realty.awkr.site'

    const fetchData = async () => {
    await axios.get('https://realty.awkr.site/api/realitys/', props.location.state)
        .then(response => {
            response.data.results.length >= 0 && setLoading(false)
            setState(response.data.results)

            let scores = response.data.results.map(item => item.score_sum)
            let step = (scores[0] - scores[scores.length - 1])/50
            let stepStart = step
            let star = 5
            scores.map(score => scores[0] - score <= stepStart 
            ? (
                console.log( 'Оценка - ', parseFloat(star.toFixed(1)), ', элемент - ', score ),
                star -= 0.1
            ) 
            : (
                stepStart = stepStart + step*10,
                star -= 0.1
            ))
        })  
    }

    useEffect(() => {
        fetchData()
    }, [])

    const testUrlDetals = (testUrlDetals)=>{
        console.log('test-t', testUrlDetals);
    }

    const test = () =>{
        history.push('home')
    }


    return (
       <> 
        <div onClick={()=>testUrlDetals()}>
            <div className={styles.header} >
                <div className={styles.casaveloce} onClick={test}>
                    <span style={{fontStyle:'normal', fontWeight:'600'}}>Casa</span>
                     <span style={{fontStyle:'italic', fontFamily:'Playfair Display', fontWeight:'700'}}>Velocè</span>
                </div>
                <div className={styles.select}>
                    <input className={styles.city} type="text" placeholder='Kyiv' style={{ fontStyle: 'normal', fontFamily: 'Inter', fontWeight: '500', fontSize: '16px' }}></input>
                        <select className={styles.priorities}
                            style={{ fontStyle: 'normal', fontFamily: 'Inter', fontWeight: '500', fontSize: '16px' }}
                            >
                            <option>Priorities</option>
                        </select>
                        <select className={styles.settings}
                            style={{ fontStyle: 'normal', fontFamily: 'Inter', fontWeight: '500', fontSize: '16px' }}
                            >
                            <option>Detailed settings</option>
                        </select>
                </div>
                <div>
                    <button className={styles.btn} onClick={()=>console.log("click to Favourites")}>
                        <svg width="18" height="14" viewBox="0 -1 17 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path opacity="0.5" d="M8.83482 14.3338L8.54664 14.1037C2.35074 9.27172 0.669678 7.56903 0.669678 4.80792C0.669678 2.50699 2.59089 0.666252 4.9924 0.666252C6.96164 0.666252 8.06634 1.72468 8.83482 2.55301C9.6033 1.72468 10.708 0.666252 12.6772 0.666252C15.0788 0.666252 17 2.50699 17 4.80792C17 7.56903 15.3189 9.27172 9.123 14.1037L8.83482 14.3338Z" fill="#B0977D" />
                        </svg>
                       <span style={{fontStyle:'normal', fontWeight:'500', fontSize:'14px'}}>Favourites</span>
                    </button>
                </div>
            </div>
          {loading && <Loader />}
            {state.length > 0 ? (
                   <div className={styles.wrap}>
                   {state.map(i=><CardModule value={i} url={url} className={styles.test} testUrlDetals={testUrlDetals}/>)}
               </div>
            ) : (!loading && <p style={{display: 'flex', justifyContent: 'center', alignContent: 'center'}}>Подходящих объявлений не нашлось</p>)
            }
         
       </div>
      
       </>
    )
}



export default ListingPage;