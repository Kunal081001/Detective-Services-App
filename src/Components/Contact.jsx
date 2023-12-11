import { useState } from 'react';

import "./style/contact.css";
import { Navigationbar } from './Navigationbar';
import { Footer } from './Footer';
import { Alert } from 'react-bootstrap';
import { Header } from './Header';
export function Contact() {
    return (
        <>
        <Navigationbar/>
        <Header text="Contact Us"></Header>
        <div className='ContactForm'>
            <div className='container'>
                <div className='row'>
                    <div className='col-12 text-center'>
                        <div className='contactForm'>
                            <form
                                id='contact-form'
                            >
                                {/* Row 1 of form */}
                                <div className='row formRow'>
                                    <div className='col-6'>
                                        <input
                                            type='text'
                                            name='name'
                                            className='form-control formInput'
                                            placeholder='Name'
                                        ></input>
                                    </div>
                                    <div className='col-6'>
                                        <input
                                            type='email'
                                            name='email'
                                            className='form-control formInput'
                                            placeholder='Email address'
                                        ></input>
                                    </div>
                                </div>
                                <div className='row formRow'>
                                    <div className='col'>
                                        <input
                                            type='text'
                                            name='subject'
                                            className='form-control formInput'
                                            placeholder='Subject'
                                        ></input>
                                    </div>
                                </div>
                                {/* Row 3 of form */}
                                <div className='row formRow'>
                                    <div className='col'>
                                        <textarea
                                            rows={3}
                                            name='message'
                                            className='form-control formInput'
                                            placeholder='Message'
                                        ></textarea>
                                    </div>
                                </div>

                                <button
                                    className='submit-btn btn btn-primary'
                                    type='submit'
                                > Submit
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
     </>
    );
}