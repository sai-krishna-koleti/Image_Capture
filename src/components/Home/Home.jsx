import React, { useState } from 'react'
import './homeStyles.css'
import { WebcamCapture} from '../Webcam/Webcam'


const Home = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('');


    const submitForm = () => {
        alert("Form submitted");
        setName('');
        setEmail('');
    }


    return (
        <div className="home-container">
            <div className="container">
                <div className="text">
                    <h1>Capture the Image</h1>
                    <form className="form">
                        <WebcamCapture/>
                        
                        <button type="submit" id="login-button" onClick={(e) => submitForm(e)}>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Home
