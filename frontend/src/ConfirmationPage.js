
import React from 'react';
import {Container} from 'reactstrap';
import SubscribeForm from './SubscribeForm';

const ConfirmationPage = () => (
    <div className="ContactForm ContentForm-sent section block">
        <Container>
            <h2>Thank you for your interest in <i>Milonga</i>.</h2>
            <h3>One of us will return your message soon.</h3>
            <p>~ Julie, Kat, &amp; Tor</p>
            <br />
            <SubscribeForm />
            <br />
            <a href="/" className="btn btn-light px-5 border-dark">
                return to Milonga home page
            </a>
        </Container>
    </div>
);

export default ConfirmationPage;
