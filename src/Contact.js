
import React from 'react';
import ContactForm from './ContactForm';
import SubscribeForm from './SubscribeForm';

const Contact = () => {
    return (
        <div className="Contact" id="Contact">
            {/* <a className="section-header" href="/contact">Click To Request More Information</a> */}
            <h2 className="section-header">Contact Us</h2>
            <ContactForm />
            <div className="section block my-3">
                <h3>or...</h3>
                <SubscribeForm />
            </div>
        </div>
    );
};

export default Contact;
