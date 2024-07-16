import React, { useState } from 'react';
import { contactData } from './ContactData';
import { Map } from '..';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
        subject: '',
    });

    const [submitStatus, setSubmitStatus] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        if (response.status === 200) {
            setSubmitStatus('success');
        } else {
            setSubmitStatus('error');
        }
    };

    return (
        <div id="contact" className="section pb-0">
            <div className="container">
                <div className="row g-4 g-xl-5">
                    <div className="col-12 col-xl-4">
                        <span className="title-heading text-white-04">İletişim</span>
                        <h1 className="display-3 fw-medium mb-0">İletişim&apos;e <span className="text-gradient">Geç</span></h1>
                    </div>
                    <div className="col-12 col-xl-8">
                        <div className="row g-4 g-lg-5">
                            <div className="col-12 col-md-6">
                                <h6 className="sm-heading">Email:</h6>
                                <h3 className="mb-0">{contactData.mainData.email}</h3>
                            </div>
                            <div className="col-12 col-md-6">
                                <h6 className="sm-heading">Discord:</h6>
                                <h3 className="mb-0">{contactData.mainData.phone}</h3>
                            </div>
                          
                        </div>
                     
                    </div>
                </div>
             
            </div>
        </div>
    );
};

export default Contact;
