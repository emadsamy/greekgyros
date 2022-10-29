import React, {useState} from 'react';
import {NavLink, useNavigate} from 'react-router-dom';
import classes from './Share.module.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Facebook from '../../assets/img/icons/facebook-1.svg';
import Messenger from '../../assets/img/icons/messenger.svg';
import Whatsapp from '../../assets/img/icons/whatsapp.svg';
import Copy from '../../assets/img/icons/copy.svg';
import {Helmet} from "react-helmet";
import { FacebookShareButton } from 'react-share';

const Share = (props) => {
    const [show, setShow] = useState(false);
    const [copied, setCopied] = useState(false);
    const navigate = useNavigate();
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const nameUrl = window.location.href;

    const clipboard = () => {
        const el = document.createElement("input");
        el.value = window.location.href;
        document.body.appendChild(el);
        el.select();
        document.execCommand("copy");
        document.body.removeChild(el);
        setCopied(true);
        setTimeout(() => {
            setCopied(false);
        }, 1000);
    }

    const whatsappHandler = () => {
        let url = window.location.href;
        let text = 'https://wa.me/201111490081?&text=' + url + ' ' + props.title;
        window.open(text,'_blank');
    }

    return (
        <>
            <Helmet>
                <meta property="og:type" content="website" />
                <meta property="og:url" content={window.location.href} />
                <meta property="og:title" content={props.title} />
                <meta property="og:description" content={props.description} />
                <meta property="og:image" content={props.img} />
                <meta property="og:image:width" content="400" />
                <meta property="og:image:height" content="400" />
            </Helmet>
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                className={`${classes.modalContainer} modal-share`}
                centered>
                <Modal.Header closeButton></Modal.Header>
                <Modal.Body>
                    <div className={classes.mainTitle}>Share this with friends and family.</div>
                    <div className={`${classes.shareView} fc`}>
                        <img className={`img-fluid ${classes.proImg}`} src={props.img} alt={props.title} />
                        <div className={classes.title}>{props.title}</div>    
                    </div>
                    <div className={classes.grid}>
                        <button onClick={clipboard} className={`btn ${classes.btn}`}>
                            <img className={`img-fluid ${classes.imgBtn}`} src={Copy} alt={'Clipboard'} />
                            {copied ? 'Copied!' : 'Copy Link'}
                        </button>

                        <button onClick={whatsappHandler} className={`btn ${classes.btn}`}>
                            <img className={`img-fluid ${classes.imgBtn}`} src={Whatsapp} alt={'Whatsapp'} />
                            Whatsapp
                        </button>

                        {/* <a href="#" target="_blank" className={`btn ${classes.btn}`}>
                            <img className={`img-fluid ${classes.imgBtn}`} src={Messenger} alt={'Clipboard'} />
                            Messenger
                        </a> */}

                        <FacebookShareButton
                            appId={'629322731899614'}
                            url={nameUrl}
                            quotes={'quotes'}
                            hashtag={'#hash_test'}
                            title={'this is main title'}
                            description={'this is description'}
                            className={`btn ${classes.btn}`}
                        >
                            <img className={`img-fluid ${classes.imgBtn}`} src={Facebook} alt={'Facebook'} />
                            Facebook
                        </FacebookShareButton>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
}

export { Share };