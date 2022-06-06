
import React from 'react';
import {Container} from 'reactstrap';
import ContactForm from './ContactForm';
import SubscribeForm from './SubscribeForm';

const ContactPage = () => {
    return (
        <Container>
            <br />
            <ContactForm />
            <p className="text-danger bg-light p-0 m-0 border"><small>
                note: we will not confirm your email address, <br />
                but this is the only way we have to respond, <br />
                so please double-check it
            </small></p>
            <div className="section block my-3">
                <h3>or...</h3>
                <SubscribeForm />
            </div>
        </Container>
    );
};

export default ContactPage; 
