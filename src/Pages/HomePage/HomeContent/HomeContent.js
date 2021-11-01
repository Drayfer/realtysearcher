
import axios from 'axios';
import { useState, useEffect, useContext } from 'react';
import { useHistory } from "react-router-dom";
import styles from './HomeContent.module.css';
import ModalContent from './Modal/ModalContent';
import ListContext from '../../../context';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';

const transport = [
    { id: 1, name: 'car' },
    { id: 2, name: 'pedestrian' },
    { id: 3, name: 'bicycle' }
];

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        flexWrap: "nowrap",
        paddingRight: theme.spacing(1),
        marginBottom: 10,
        textTransform: 'capitalize'
    }
}));

const HomeContent = () => {
    const history = useHistory();
    const cl = useStyles();

    const { state, setState } = useContext(ListContext);

    // console.log('context ====>', state);
    // const [state, setState] = useState(false);
    const [settings, setSettings] = useState(false);


    const [isAny, setAny] = useState(false);
    const [isOne, setOne] = useState(false);
    const [isTwo, setTwo] = useState(false);
    const [isThree, setThree] = useState(false);
    const [isFour, setFour] = useState(false);

    const [openModal, SetOpenModal] = useState(false);
    const [rooms, setRooms] = useState([]);

    const [priorities, setPrioriteties] = useState([]);
    const [transportation, setTransportation] = useState([]);

    const [formData, setFormData] = useState({
        // high_price: '',
        // low_price: '',
        // high_qty_rooms: '',
        // type_movements: String(transportation),
        poi_categories_ids: priorities,
        city: '',
        payment_type: 'rent',
    });
    const [check, setCheck] = useState([]);


    const closeModal = () => SetOpenModal(false);


    // const fetchData = async () => {
    //     await axios.get('https://realty.awkr.site/api/realitys/', { params: formData })
    //         .then(response => {
    //             setState(response.data.results)
    //         })
    //         .then(history.push({
    //             pathname: '/listing',
    //         }))

    // }


    const fetchData = () => {
        history.push({
            pathname: '/listing',
            state: { params: formData }
        })
    }

    useEffect(() => {
        const fetchData = async () => {
            await axios.get('https://realty.awkr.site/api/categories/')
                .then(response => setCheck(response.data.results))
        }
        fetchData()

    }, []);

    // useEffect(() => {
    //     const fetchData = async () => {
    //         await axios.get('https://realty.awkr.site/api/realitys/', { params: formData })
    //                 .then(response => setState(response.data.results))
    //     }
    //     fetchData()

    // }, [formData]);

    const minMaxRooms = (number) => {
        let a = []
        a = rooms.slice()
        if (a.includes(number)) {
            const index = a.indexOf(number);
            if (index > -1) {
                a.splice(index, 1);
            }
        } else {
            a.push(number)
            a.sort()
        }

        setFormData({ ...formData, low_qty_rooms: a[0], high_qty_rooms: a[a.length - 1] })
        setRooms([...a])
    }

    const onChengeChoiceProperties = (e, id) => {
        if (e) {
            setPrioriteties(prev => !prev.find(elem => elem === id) ? [...prev, id] : prev)
        } else {
            setPrioriteties(prev => prev.filter(elem => elem !== id))
        }
        setFormData({ ...formData, poi_categories_ids: `${formData.poi_categories_ids}${id},` })
        console.log('data', formData);
    }

    const onChengeChoiceTransportation = (e, name) => {

        if (e) {
            setTransportation(prev => !prev.find(elem => elem === name) ? [...prev, name] : prev)
            setFormData(prev => ({ ...prev, type_movements: String(transportation) }))
        } else {
            setTransportation(prev => prev.filter(elem => elem !== name))
            setFormData(prev => ({ ...prev, type_movements: String(transportation) }))
        }
        // if (!Boolean) {
        //     setTransportation(prev => !prev.find(elem => elem === e.target.id) ? prev.push(e.target.id) : prev)
        // } else {
        //     setTransportation(prev => prev.filter(elem => elem !== e.target.id))
        // }
        setFormData(prev => ({ ...prev, type_movements: String(transportation) }))
    }
    console.log('test', transportation, 'data', formData);

    return (

        <div>
            {openModal && <ModalContent closeModal={closeModal} />}
            <div className={styles.wrapper}>
                <div className={styles.container}>


                    <form className={styles.item__form} >
                        <div className={styles.item__country}>
                            <p style={{ fontStyle: 'normal', fontFamily: 'Inter', fontWeight: '500', fontSize: '14px' }}>
                                Select the country where you live so that we can customize the site for you
                            </p>
                        </div>
                        <div className={styles.option}>
                            <select className={styles.item__list}
                                style={{ fontStyle: 'normal', fontFamily: 'Inter', fontWeight: '500', fontSize: '16px' }}
                            >
                                <option>Ukraine</option>
                            </select>
                            <button className={styles.btn__next}
                                style={{ fontStyle: 'normal', fontFamily: 'Inter', fontWeight: '500', fontSize: '16px' }}>
                                Next
                            </button>
                            <input className={styles.btn__plus} style={{ fontStyle: 'Inter', fontWeight: '300', fontSize: '24px' }}
                                value='×' type='button'
                            />
                        </div>
                    </form>


                    <div className={styles.item}>
                        <div className={styles.item__heading}>
                            <div className={styles.item__about}>
                                ABOUT SERVICE
                            </div>
                            <div className={styles.pick__yourself}>
                                <span>Pick yourself</span>
                            </div>
                            <div>
                                <span className={styles.apartment}>apartment </span>
                                <span className={styles.in_taste}>in taste</span>
                            </div>
                        </div>
                        <div className={styles.item__mission}>
                            Casa Velocè - a service for finding properties for rent or purchase
                        </div>
                        <button className={styles.item__btn} onClick={() => SetOpenModal(true)}>More about the project →</button>

                    </div>

                    <form className={styles.item__selection}>

                        <div className={styles.form} >
                            <div className={styles.radio__container} onChange={e => setFormData({ ...formData, payment_type: e.target.value })}>
                                <div className={`${styles.form__item} ${styles.radio__btn} ${styles.nth__2}`}>
                                    <input type="radio" name="option1" id="radio1" value='rent' checked={formData.payment_type === 'rent'} />
                                    <label for="radio1" style={{ fontStyle: 'normal', fontFamily: 'Body/Middle', fontWeight: '500', fontSize: '16px' }}>Rent</label>
                                </div>
                                <div className={`${styles.form__item} ${styles.radio__btn} ${styles.nth__2}`}>
                                    <input type="radio" name="option1" id="radio2" value='sale' />
                                    <label for="radio2" style={{ fontStyle: 'normal', fontFamily: 'Body/Middle', fontWeight: '500', fontSize: '16px' }}>Purchase</label>
                                </div>
                            </div>
                        </div>
                        <div className={styles.item__filter}>
                            <div className={`${styles.item__filter__block} ${styles.item__filter__block1}`}>
                                <h6 className={styles.item__block} style={{ fontStyle: 'normal', fontFamily: 'Body/Small', fontWeight: '500', fontSize: '14px' }}>City</h6>
                                <input className={styles.input__city} type="text" placeholder='For example: Kyiv'
                                    style={{ fontStyle: 'normal', fontFamily: 'Body/Middle', fontWeight: '500', fontSize: '16px' }}
                                    onChange={e => setFormData({ ...formData, city: e.target.value })}
                                ></input>
                            </div>
                            <div className={`${styles.item__filter__block} ${styles.item__filter__block2}`}>
                                <h6 className={styles.item__block} style={{ fontStyle: 'normal', fontFamily: 'Body/Small', fontWeight: '500', fontSize: '14px' }}>Priorities</h6>
                                <div className={styles.item__priorities}>
                                    <Grid container spacing={3} className={cl.root}>
                                        {check.map(({ name, id, is_check }) => (
                                            <>
                                                <div className={styles.root} key={id}>

                                                    <FormControlLabel className={styles.checkbox__container} style={priorities.find(prop => prop === id) ? { backgroundColor: "#FFFFFF" } : { backgroundColor: "transparent" }}

                                                        control={
                                                            <Checkbox
                                                                size='small'
                                                                onChange={(e) => { onChengeChoiceProperties(e.target.checked, id) }}

                                                                name={name}
                                                                icon={<CheckBoxOutlineBlankIcon style={{ transform: 'scale(.9)' }} />}
                                                                checkedIcon={<CheckBoxIcon style={{ transform: 'scale(.9)' }} />}
                                                            />
                                                        }
                                                        label={<span style={{ fontSize: '1rem' }}>{name}</span>}
                                                    />



                                                </div>
                                            </>
                                        ))}
                                    </Grid>

                                </div>
                            </div>
                        </div>

                        <h5 className={styles.title__settings} style={{ fontStyle: 'normal', fontFamily: 'Body/Middle', fontWeight: '500', fontSize: '16px' }}>Detailed settings</h5>
                        <hr className={styles.line}></hr>
                        <input className={styles.btn__detailed} style={{ fontStyle: 'Inter', fontWeight: '300', fontSize: '24px' }}
                            onClick={() => setSettings(!settings)} value='+' type='button'
                        />
                        {settings &&
                            <div className={`${styles.item__filter2}`} >
                                <div >
                                    <h6 className={styles.item__block} style={{ fontStyle: 'normal', fontFamily: 'Body/Small', fontWeight: '500', fontSize: '14px' }}>Budget</h6>
                                    <div className={`${styles.item__checkboxes} ${styles.item__checkboxes2} `}>
                                        <div className={`${styles.checkbox__container} ${styles.checkbox__price} `}>
                                            <span className={styles.containeer__text}>From:</span>
                                            <input className={styles.containeer__input} type="text" placeholder='20 000 ₽' value={formData.low_price}
                                                onChange={e => setFormData({ ...formData, low_price: e.target.value })} />
                                        </div>
                                        <div className={`${styles.checkbox__container} ${styles.checkbox__price} `}>
                                            <span className={styles.containeer__text}>To:</span>
                                            <input className={styles.containeer__input} type="text" placeholder='40 000 ₽' value={formData.high_price}
                                                onChange={e => setFormData({ ...formData, high_price: e.target.value })} />
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <h6 className={styles.item__block} style={{ fontStyle: 'normal', fontFamily: 'Body/Small', fontWeight: '500', fontSize: '14px' }}>Number of rooms</h6>
                                    <div className={`${styles.item__checkboxes} ${styles.item__checkboxes__room}`}>
                                        <label className={styles.checkbox__container}
                                            for="Any"
                                            style={isAny ? { backgroundColor: "#FFFFFF" } : { backgroundColor: "transparent" }}
                                            onClick={() => { setAny(!isAny) }}
                                        >
                                            <input type="checkbox" checked={isAny} style={{ cursor: "pointer" }} /> Any
                                        </label>
                                        <label className={styles.checkbox__container}
                                            for="One"
                                            style={isOne ? { backgroundColor: "#FFFFFF" } : { backgroundColor: "transparent" }}
                                            onClick={() => {
                                                setOne(!isOne)
                                                minMaxRooms(1)
                                            }}
                                        >
                                            <input type="checkbox" checked={isOne} style={{ cursor: "pointer" }} /> 1
                                        </label>
                                        <label className={styles.checkbox__container}
                                            for="Two"
                                            style={isTwo ? { backgroundColor: "#FFFFFF" } : { backgroundColor: "transparent" }}
                                            onClick={() => {
                                                setTwo(!isTwo)
                                                minMaxRooms(2)
                                            }}
                                        >
                                            <input type="checkbox" checked={isTwo} style={{ cursor: "pointer" }} /> 2
                                            <span className={styles.checkmark}></span>
                                        </label>
                                        <label className={styles.checkbox__container}
                                            for="Three"
                                            style={isThree ? { backgroundColor: "#FFFFFF" } : { backgroundColor: "transparent" }}
                                            onClick={() => {
                                                setThree(!isThree)
                                                minMaxRooms(3)
                                            }}
                                        >
                                            <input type="checkbox" checked={isThree} style={{ cursor: "pointer" }} /> 3
                                        </label>
                                        <label className={styles.checkbox__container}
                                            for="Four"
                                            style={isFour ? { backgroundColor: "#FFFFFF" } : { backgroundColor: "transparent" }}
                                            onClick={() => {
                                                setFour(!isFour)
                                                minMaxRooms(4)
                                            }}
                                        >
                                            <input type="checkbox" checked={isFour} style={{ cursor: "pointer" }} /> 4+
                                        </label>
                                    </div>
                                </div>
                                <div>
                                    <h6 className={styles.item__block} style={{ fontStyle: 'normal', fontFamily: 'Body/Small', fontWeight: '500', fontSize: '14px' }}>Transportation</h6>
                                    <div className={`${styles.item__checkboxes} ${styles.item__checkboxes__transport}`}>
                                        <Grid
                                            container
                                            direction="row"
                                            justifyContent="space-between"
                                            alignItems="center"
                                            xs={12}
                                            wrap='nowrap'
                                            className={cl.root}>
                                            {transport.map(({ name, id }) => (
                                                <>
                                                    <div cl
                                                        assName={cl.root} key={id}>

                                                        <FormControlLabel className={styles.checkbox__container} style={transportation.find(prop => prop === name) ? { backgroundColor: "#FFFFFF" } : { backgroundColor: "transparent" }}
                                                            control={
                                                                <Checkbox
                                                                    size='small'
                                                                    onChange={(e) => onChengeChoiceTransportation(e.target.checked, name)}
                                                                    icon={<CheckBoxOutlineBlankIcon style={{ transform: 'scale(.9)' }} />}
                                                                    checkedIcon={<CheckBoxIcon style={{ transform: 'scale(.9)' }} />}
                                                                    name={name}
                                                                />
                                                            }
                                                            label={<span style={{ fontSize: '.9rem' }}>{name}</span>}
                                                        />
                                                    </div>
                                                </>
                                            ))}
                                        </Grid>

                                    </div>

                                </div>
                            </div>
                        }
                        <button className={styles.btn__option} style={{ fontStyle: 'Inter', fontFamily: 'Body/Middle', fontWeight: '500', fontSize: '16px' }}
                            onClick={fetchData}>Find options</button>
                    </form>

                    {/* <div className={styles.img}>
                <img src="#" />
            </div> */}
                </div>

            </div>
        </div>
    )
}
export default HomeContent;
