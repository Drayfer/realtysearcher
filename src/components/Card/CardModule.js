import React from 'react'
import { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";

import styles from './Card.module.css'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Rating from '@material-ui/lab/Rating';



const CardModule = ({ value, url, testUrlDetals }) => {
    const history = useHistory()

    const [urlTest, setUrlTest] = useState('')
    const [stars, setStars] = useState(3)
    const [averageRaiting, setAverageRaiting] = useState(3.4)
    const [comments, setComments] = useState(17)
    const [prioritet, setPrioritet] = useState('10 минут (1 км)')


    // console.log(test())
    const details = (urlValue) =>{
        history.push({
            pathname: 'details',
            state: { detail: {
                urlValue,
                url
            } }
        });
    }
  
    return (
        <>
            <Card className={styles.card} onClick={() => details(value.url)}>
                <CardActionArea>
                    <div className={styles.card__head}>
                        <CardMedia
                            className={styles.card__image}
                            src={url + value.image}
                            component="img"
                            onError={e => {
                                e.target.src = 'http://3.bp.blogspot.com/-XBaqJmOapaE/VdkLF9jZlBI/AAAAAAAABRk/h--0GSkQQm0/s1600/no%2Bimage.png';
                            }}
                        />
                        <div className={styles.card__hurt}>
                            <svg width="26" height="24" viewBox="0 0 26 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g filter="url(#filter0_bd)">
                                    <path d="M12.8326 17.5133L12.5444 17.2832C6.34854 12.4513 4.66748 10.7486 4.66748 7.98746C4.66748 5.68654 6.58869 3.84579 8.9902 3.84579C10.9594 3.84579 12.0641 4.90422 12.8326 5.73255C13.6011 4.90422 14.7058 3.84579 16.675 3.84579C19.0766 3.84579 20.9978 5.68654 20.9978 7.98746C20.9978 10.7486 19.3167 12.4513 13.1208 17.2832L12.8326 17.5133Z" fill="white" fill-opacity="0.25" />
                                    <path d="M12.8326 17.5133L12.5444 17.2832C6.34854 12.4513 4.66748 10.7486 4.66748 7.98746C4.66748 5.68654 6.58869 3.84579 8.9902 3.84579C10.9594 3.84579 12.0641 4.90422 12.8326 5.73255C13.6011 4.90422 14.7058 3.84579 16.675 3.84579C19.0766 3.84579 20.9978 5.68654 20.9978 7.98746C20.9978 10.7486 19.3167 12.4513 13.1208 17.2832L12.8326 17.5133Z" stroke="white" />
                                </g>
                                <defs>
                                    <filter id="filter0_bd" x="0.16748" y="-0.654205" width="25.3303" height="23.8073" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                        <feGaussianBlur in="BackgroundImage" stdDeviation="2" />
                                        <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur" />
                                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                        <feOffset dy="1" />
                                        <feGaussianBlur stdDeviation="2" />
                                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                                        <feBlend mode="normal" in2="effect1_backgroundBlur" result="effect2_dropShadow" />
                                        <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow" result="shape" />
                                    </filter>
                                </defs>
                            </svg>
                        </div>
                    </div>

                </CardActionArea>
                <CardContent className={styles.card__content}>
                    <div className={styles.card__heading}>
                        <div className={styles.card__generalraiting}>
                            <Rating className={styles.card__raiting}
                                size='small'
                                name="simple-controlled"
                                value={stars}
                                onChange={(event, newValue) => {
                                    setStars(newValue);
                                }}
                            />

                            <div className={styles.card__average}>{averageRaiting}/5</div>
                        </div>
                        <div className={styles.card__comments}>{comments} отзывов</div>
                    </div>
                    <div className={styles.card__address}>{value.address}</div>
                    <div className={styles.card__rooms}>
                        <span className={styles.card__numberrooms}>Кол-во комнат:</span>
                        <span className={`${styles.card__numberrooms} ${styles.card__countrooms}`}>{value.qty_rooms}</span>
                    </div>
                    <div className={styles.card__rooms}>
                        <span className={styles.card__numberrooms}>К приоритету:</span>
                        <span className={`${styles.card__numberrooms} ${styles.card__countrooms}`}>{prioritet}</span>
                    </div>
                    <div
                        className={styles.card__price}>{String(value.price.replace(/(\d)(?=(\d{3})+(\D|$))/g, '$1 ')).replace(/\.0+/, '')} ₽
                        {value.payment_type === "sale" ? '' : '/ месяц'}</div>
                </CardContent>
            </Card>
        </>
    )
}

export default CardModule
