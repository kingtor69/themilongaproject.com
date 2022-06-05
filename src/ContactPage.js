
import React from 'react';
import {Container} from 'reactstrap';
import ContactForm from './ContactForm';
import SubscribeForm from './SubscribeForm';

const ContactPage = () => {
    return (
        <Container>
            <br />
            <ContactForm />
            <div className="section block my-3">
                <h3>or...</h3>
                <h5 className="h6">If you do the former, don't worry, you'll have another chance for the latter.</h5>
            </div>
            <SubscribeForm />
        </Container>
    );
};

export default ContactPage; 
