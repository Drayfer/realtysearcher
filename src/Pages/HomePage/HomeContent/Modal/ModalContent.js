import React from 'react'
import { useState } from 'react';
import styles from './ModalContent.module.css';

const ModalContent = ( {closeModal} ) => {
    return (
        <>
            <div className={styles.modal}>
                <div className={styles.modal__body}>
                    <h1>About the project</h1>
                    <p>On the website Casa Veloce you will find objects for rent and sale of real estate. All objects presented on the site have been checked by professional moderators. You can conveniently search for offers thanks to a well-structured catalog and a search engine on our website. To simplify the search, we have implemented a system for recommending similar ads.</p>
                    <button className={styles.close__btn} onClick={() => closeModal()}>Close</button>
                </div>
            </div>
        </>
    )
}

export default ModalContent
