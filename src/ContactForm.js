
// code adapted from https://herotofu.com/solutions/guides/react-contact-form
import React, {useState} from 'react';

import './ContactForm.css';

const EMAIL_SEND = "https://public.herotofu.com/v1/80b21450-e49f-11ec-a7c6-13f77fe97b07";

const ContactForm = () => {
    const [sent, setSent] = useState(false);

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        body: ""
    })

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData(data => ({
            ...data,
            [name]: value
        }));
    };

    const handleSend = () => {
        setTimeout(() => {
            setSent(true);
        }, 100);
    };

    if (sent) {
        return (
            <div className="ContactForm ContentForm-sent section block">
                <h2>Thank you for your interest in <i>Milonga</i>.</h2>
                <h3>One of us will return your message soon.</h3>
                <p>~ Julie, Kat, &amp; Tor</p>
                <br />
                <a href="/" className="btn btn-light px-5 border-dark">
                    return to Milonga home page
                </a>
            </div>
        )
    }

    return (
        <div className="ContactForm section block" id="ContactForm">
            <h3>Send us a message:</h3>
            <form
                action={EMAIL_SEND}
                onSubmit={handleSend}
                method="POST"
                target="_blank"
            >
                <div className="ContactForm-input-div">
                    <input 
                        type="text"
                        placeholder="your name"
                        name="name"
                        size={50}
                        value={formData.name}
                        onChange={handleChange}
                        autofocus={true}
                    />
                </div>
                <div className="ContactForm-input-div">
                    <input 
                        type="text"
                        placeholder="your email address"
                        name="email"
                        size={50}
                        value={formData.email}
                        onChange={handleChange}
                    />
                </div>
                <div className="ContactForm-input-textarea">
                    <textarea 
                        name="body"
                        placeholder="how may we help you?"
                        value={formData.body}
                        onChange={handleChange}
                        cols={110}
                        rows={5}
                    />
                </div>
                <div className="ContactForm-input-div">
                    <button className="btn btn-light px-5 border-dark">
                        send message
                    </button>
                </div>
                <p className="text-danger bg-light p-0 m-0 border"><small>
                        note: we will not confirm your email address, <br />
                        but this is the only way we have to respond, <br />
                        so please double-check it
                    </small></p>
            </form>
        </div>
    );
};

export default ContactForm;
