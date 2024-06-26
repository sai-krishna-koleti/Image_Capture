import React, { useState, useCallback, useRef } from 'react';
import Webcam from "react-webcam";

const videoConstraints = {
    width: 220,
    height: 200,
    facingMode: "user"
};

export const WebcamCapture = () => {
    const [image, setImage] = useState('');
    const webcamRef = useRef(null);

    const capture = useCallback(() => {
        const imageSrc = webcamRef.current.getScreenshot();
        setImage(imageSrc);
    }, []);

    return (
        <div className="webcam-container">
            <div className="webcam-img">
                {image === '' ? (
                    <Webcam
                        audio={false}
                        height={200}
                        ref={webcamRef}
                        screenshotFormat="image/jpeg"
                        width={220}
                        videoConstraints={videoConstraints}
                    />
                ) : (
                    <img src={image} alt="Webcam Capture" />
                )}
            </div>
            <div>
                {image !== '' ? (
                    <button
                        onClick={(e) => {
                            e.preventDefault();
                            setImage('');
                        }}
                        className="webcam-btn"
                    >
                        Retake Image
                    </button>
                ) : (
                    <button
                        onClick={(e) => {
                            e.preventDefault();
                            capture();
                        }}
                        className="webcam-btn"
                    >
                        Capture
                    </button>
                )}
            </div>
        </div>
    );
};
