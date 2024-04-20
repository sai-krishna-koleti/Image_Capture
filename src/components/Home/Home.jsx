import React, { useState } from 'react';
import './homeStyles.css';
import { WebcamCapture } from '../Webcam/Webcam';

const Home = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const submitForm = () => {
        alert(Form submitted with Name: ${name} and Email: ${email});
        setName('');
        setEmail('');
    }

    return (
        <div className="home-container">
            <div className="container">
                <div className="text">
                    <h1>Capture the Image</h1>
                    <form className="form">
                        <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
                        <WebcamCapture />
                        <button type="submit" id="login-button" onClick={(e) => submitForm(e)}>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Home;
