import React from 'react'
import { useState } from 'react';
import styles from './ModalContent.module.css';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';


const ModalContent = ({ closeModal, data, url, im }) => {


    const [imageMain, setImageMain] = useState(im)
    const [index, setIndex] = useState(data.images.findIndex((image, index) => im.includes(image.image)))

    const changeImage = (direction) => {
        let num = index
        switch (direction) {
            case 'forward':
                index === data.images.length - 1 && (num = 0)
                setImageMain(`${url}${data.images[num + 1].image}`)
                setIndex(num + 1)
                break;
            case 'backward':
                index === 0 && (num = data.images.length - 1)
                setImageMain(`${url}${data.images[num - 1].image}`)
                setIndex(num - 1)
                break;
            default:
                break
        }
    }

    return (
        <>
            <div className={styles.modal} onClick={e => (e.currentTarget === e.target) && closeModal()}>
                <div className={styles.modal__body} style={{ backgroundImage: `url(${imageMain})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                 
                    <button className={styles.close__btn} onClick={() => closeModal()}>&times;</button>
                    <div className={styles.modal__arrows}>
                        <button className={styles.modal__arrowbtn} onClick={() => changeImage('backward')}>&#10094;</button>
                        <button className={styles.modal__arrowbtn} onClick={() => changeImage('forward')}>&#10095;</button>
                    </div>

                    {/* <img id={`image${modalImage}`} alt="modalImage" className={styles.modal__image} src={im} style={{objectFit: 'cover'}}/> */}



                </div>
            </div>
        </>
    )
}

export default ModalContent
