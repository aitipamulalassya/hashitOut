import React from 'react'
import '../App.css';
export default function () {
  return (
    <div>
        <div className="aboutcontainer">
            <h1 style={{textAlign: 'center'}}>About Us</h1>
        <div className="about-section">
            <p>Welcome to <strong>TeleHealth Connect</strong>, a platform dedicated to bringing quality healthcare to rural areas. We aim to bridge the gap between medical professionals and underserved communities using telemedicine technology.</p>
            <img src="/img1.jpg" alt="Image1"/> 
            <img src="/img2.jpg" alt="Image2"/>       
           <img />
        </div>
        <div className="about-section">
            <h2>Our Mission</h2>
            <p>our mission is to bridge the healthcare gap by providing accessible, affordable, and high-quality telemedicine services to rural communities. We strive to empower individuals with the tools they need to manage their health conveniently from the comfort of their homes. By connecting patients to experienced doctors and healthcare professionals, we aim to improve health outcomes and reduce disparities in rural healthcare. With secure, confidential consultations and transparent pricing, we ensure every patient feels valued and supported. Our commitment to innovation and patient-centered care drives us to continuously enhance our services. Together, we’re building a healthier future, one consultation at a time.</p>
        </div>
        <div className="about-section">
            <h2>Why Choose Us?</h2>
            <ul>
                <li>Experienced doctors and healthcare professionals.</li>
                <li>Accessible from the comfort of your home via video, audio, or text consultations.</li>
                <li>Affordable and transparent pricing with no hidden fees.</li>
                <li>Confidential and secure consultations with patient data protection.</li>
                <li>Receive prompt consultations without long wait times or travel delays.</li>
                <li>Stay on top of your health with convenient access to regular consultations and follow-ups.</li>
            </ul>
        </div>
    </div>

    </div>
  )
}
