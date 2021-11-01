import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from 'axios';
import Header from '../../components/Header/Header'
import styles from './DetailsHousePage.module.css';
import Rating from '@material-ui/lab/Rating';
import CardModule from '../../components/Card/CardModule'
import { useHistory } from "react-router-dom";
import ModalContent from "./Modal/ModalContent";



const DetailsHousePage = ({ urlValue }) => {
    const history = useHistory()
    const [stars, setStars] = useState(3)
    const [averageRaiting, setAverageRaiting] = useState(3.4)
    const [comments, setComments] = useState(17)
    const [ownerComments, setOwnerComments] = useState('«Без детей и домашних питомцев»')

    const location = useLocation();
    const url = location.state.detail.url

    const [data, setData] = useState(null)
    const [allData, setAllData] = useState(null)
    const [im, setIm] = useState()
    const [openModal, SetOpenModal] = useState(false);
    const [modalImage, setModalImage] = useState();

    const closeModal = () => SetOpenModal(false)


    const fetchData = async () => {
        const response = await axios.get(location.state.detail.urlValue)
        setData(response.data)
        setIm(`${url}${response.data.images[0].image}`)
    }

    const fetchAllData = async () => {
        const response = await axios.get('https://realty.awkr.site/api/realitys/')
        setAllData(response.data)
    }


    useEffect(() => {
        fetchData()
        fetchAllData()

        // data && console.log(data)
    }, [])

    const changeImage = (e) => {
        setIm(e.target.src)
        e.target.src = im
    }

    return (
        <>
            {openModal && <ModalContent closeModal={closeModal} data={data} url={url} im={im} />}
            <Header />
            <div className={styles.wrapper}>
                <div className={styles.header} onClick={() => history.push('listing')} >
                    <span className={styles.svg}><svg width="60" height="21" viewBox="0 0 30 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11 1.5L2 10.5M2 10.5L11 19.5M2 10.5H30" stroke="black" stroke-width="2" />
                    </svg>
                    </span>
                    <span className={styles.header__back} >Вернуться к результатам</span>
                </div>
                {data &&
                    <>
                        <div className={styles.content}>
                            <div className={styles.content_images}>
                                {data.images.map((image, index) => (
                                    index < 5 && (
                                        (index === 0)
                                            ? <img key={image} alt="firstimg" style={{ width: '695px', height: '326px', marginBottom: '16px', borderRadius: '10px' }} src={im}
                                                onClick={() => {
                                                    SetOpenModal(true)
                                                    setModalImage(index)
                                                }}
                                            />
                                            : <img key={image} id={`image${index}`} alt="secondimg" className={styles.content_smalimg} src={`${url}${image.image}`} onClick={(e) => changeImage(e)} />
                                    )
                                ))}
                            </div>
                            <div className={styles.info}>
                                <div className={styles.info__title}>{data.title}</div>
                                <div className={styles.info__heading}>

                                    <Rating 
                                        name="simple-controlled"
                                        value={stars}
                                        onChange={(event, newValue) => {
                                            setStars(newValue);
                                        }}
                                    />
                                    <span className={styles.info__average}>{averageRaiting}/5 {comments} отзывов</span>
                                </div>
                                <div className={styles.info__label}>Цена:</div>
                                <div className={styles.info__address}>{String(data.price.replace(/(\d)(?=(\d{3})+(\D|$))/g, '$1 ')).replace(/\.0+/, '')} ₽
                                    {data.payment_type === "sale" ? '' : '/ месяц'}</div>
                                <div className={styles.info__label}>Адрес:</div>
                                <div className={styles.info__address}>{data.address}</div>
                                <div className={styles.info__label}>Кол-во комнат:</div>
                                <div className={styles.info__address}>{data.qty_rooms}</div>
                                <div className={styles.info__label}>Коментарий владельца:</div>
                                <div className={styles.info__address}>{data.description ? data.description : 'Отсутствует'}</div>
                                <div className={styles.info__label}>Наличие в пешей доступности:</div>
                                <div>
                                    <span className={styles.info__option}>Школа</span>
                                    <span className={styles.info__option}>Дет. сад</span>
                                    <span className={styles.info__option}>Спортзал</span>
                                    <span className={styles.info__option}>Парк</span>
                                </div>
                                <div className={styles.info__actions}>
                                    <button className={styles.btn__actions} onClick={() => window.open(data.link_ad)} >Перейти на объявление</button>
                                    <button className={styles.btn__favorites} onClick={() => { }}>Добавить в любимое <span style={{ marginLeft: '20px' }}><svg width="17" height="15" viewBox="0 0 17 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path opacity="0.5" d="M8.16514 14.3338L7.87696 14.1037C1.68106 9.27172 0 7.56904 0 4.80793C0 2.507 1.92121 0.66626 4.32272 0.66626C6.29196 0.66626 7.39666 1.72469 8.16514 2.55302C8.93363 1.72469 10.0383 0.66626 12.0076 0.66626C14.4091 0.66626 16.3303 2.507 16.3303 4.80793C16.3303 7.56904 14.6492 9.27172 8.45332 14.1037L8.16514 14.3338Z" fill="#B0977D" />
                                    </svg></span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className={styles.announcing}>Похожие объявления</div>
                        <div className={styles.cards}>
                            {allData && allData.results.slice(0, 5).map(i => <CardModule value={i} url={url} />)}
                        </div>

                    </>
                }

            </div>
        </>
    )
}

export default DetailsHousePage;