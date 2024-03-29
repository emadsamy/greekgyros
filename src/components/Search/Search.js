import React, {useState} from 'react';
import axios from 'axios';
import {NavLink} from 'react-router-dom';
import classes from './Search.module.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import Loading from '../../assets/img/icons/loading-blue.svg';

const Search = (props) => {
    const [search, setSearch] = useState('');
    const [loading, setLoading] = useState(false);
    const [toggleSearch, setToggleSearch] = useState(false);
    const [data, setData] = useState([]);
    const [dataCount, setDataCount] = useState('');
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const { t, i18n } = useTranslation();

    const searchHandler = (e) => {
        setLoading(true);
        setSearch(e.target.value);
        if (e.target.value.length > 0) {
            setToggleSearch(true);
            const options = {
                url: window.baseURL + "/search",
                method: "POST",
                data: {
                    search: search,
                    lang: i18n.language
                },
            };
    
            axios(options)
            .then((res) => {
                setData(res.data.data);
                setDataCount(res.data.count);
                setLoading(false);
            })
            .catch((err) => {
                alert(err);
                setLoading(false);
            });
        } else {
            setToggleSearch(false);
        }
    }

    return (
        <>
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                className={classes.modalContainer}>
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Search
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {/* <h4>Centered Modal</h4> */}
                    <div className={`${classes.searchGroup} form-group-row`}>
                        {/* <label className={'fgr-label'}>Search</label> */}
                        <div className={`fgrinp fcsb`}>
                            <input 
                                className={`fgr-input`} 
                                type="text" 
                                placeholder="what do you want ..."
                                value={search}
                                onInput={searchHandler} />
                                {loading ? <img className={`img-fluid ${classes.imgLoading}`} src={Loading} alt="Loading" /> : '' }
                                {
                                    toggleSearch ? <div className={classes.searchList}>
                                    <div className={classes.searchResult}>
                                        {
                                            dataCount == 0 ? 
                                                <div className={classes.searchNoResults}>No Results</div> 
                                                : data && data.map((row, index) => {
                                                const title = i18n.language == 'ru' ? row.title_ru : row.title_en;
                                                return <div key={index} onClick={() => setShow(false)} className={classes.searchRow}>
                                                    <NavLink 
                                                        to={`/view-product/${title.replace(/\s+/g, '-').toLowerCase()}/${row.id}`}
                                                        state={{
                                                            proId: row.id, 
                                                        }}
                                                        className={classes.searchLink}
                                                        >
                                                        {title}
                                                    </NavLink> 
                                                </div>
                                            })
                                        }
                                    </div>
                                    <div className={classes.searchTitle}>Search Result {dataCount}</div>
                                </div> : ''
                                }
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
}

export { Search };