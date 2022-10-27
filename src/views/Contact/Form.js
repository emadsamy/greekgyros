import React, {useEffect, useState, Suspense} from 'react';
import {Route, Switch, NavLink, Navigate} from 'react-router-dom';
import axios from 'axios';
import classes from './Contact.module.css';
import Loader from '../../assets/img/icons/loading.svg';

const Form = (props) => {
    const [fullName, setFullName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState('');
    const [success, setSuccess] = useState({});

    const contactHandler = () => {
        setLoading(true);
        setErrors('');
        setSuccess('');
        const options = {
            url: window.baseURL + "/contact",
            method: "POST",
            data: {
                fullname: fullName,
                phone_number: phoneNumber,
                email: email,
                message: message 
            },
        };

        axios(options)
        .then((res) => {
            if (res.data.errors) {
                setErrors(res.data.errors);
                setSuccess('');
            } else {
                setSuccess({
                    success: res.data.success,
                    message: res.data.message
                });
                setFullName('');
                setPhoneNumber('');
                setEmail('');
                setMessage('');
            }
            setLoading(false);
        })
        .catch((err) => {
            alert(err);
            setLoading(false);
            setSuccess('');
        });
    }

    return (
        <>
            <form>
                <div className={classes.form}>
                    {
                        success.success ? <div className={`success-msg`}><span className={`icon-correct icon`}></span> {success.message}</div> : ''
                    }
                    <div className={`form-group-row`}>
                        <label className={'fgr-label'}>Full Name</label>
                        <div className={'fgrinp'}>
                            <input 
                                className={`fgr-input`} 
                                type="text" 
                                placeholder="Enter your full name "
                                value={fullName}
                                onChange={(e) => setFullName(e.target.value)} />
                        </div>
                    </div>

                    <div className={`form-group-row`}>
                        <label className={'fgr-label'}>Phone Number</label>
                        <div className={'fgrinp'}>
                            <input 
                                className={`fgr-input`} 
                                type="text" 
                                placeholder="Enter your phone number"
                                value={phoneNumber}
                                onChange={(e) => setPhoneNumber(e.target.value)} />
                        </div>
                    </div>

                    <div className={`form-group-row`}>
                        <label className={'fgr-label'}>Email</label>
                        <div className={'fgrinp'}>
                            <input 
                                className={`fgr-input`} 
                                type="email" 
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)} />
                        </div>
                    </div>

                    <div className={`form-group-row`}>
                        <label className={'fgr-label'}>Message</label>
                        <div className={'fgrinp'}>
                            <textarea 
                                className={`fgr-input`} 
                                placeholder="Write your message"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}></textarea>
                        </div>
                    </div>

                    {
                        errors ? <div className={classes.errors}>
                            {errors.map((row, index) => {
                                return <div className={`errors-card`}><span className={`icon-exclamation icon`}></span> {row}</div>;
                            })}
                        </div> : ''
                    }

                    <div className={classes.action}>
                        <button disabled={loading} onClick={contactHandler} className={`btn main-btn`}>
                            {loading ? <div className={classes.loading}><img src={Loader} alt="Loading..." /> Loading...</div> : 'Contact Us'}
                        </button>
                    </div>
                </div>
            </form>
        </>
    );
}

export { Form };