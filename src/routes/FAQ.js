import React from 'react'
import '../App.css';
export default function FAQ() {
  return (
    <div className="faq">
    <h1>Frequently Asked Questions</h1>
    <div className="box">
        <h3>1.What is telemedicine?</h3>
        Telemedicine uses telecommunications technology to provide remote medical services, such as video consultations and monitoring. It helps rural patients access healthcare without long travel.
    </div>
    <div className="box">
        <h3>2.How does telemedicine benefit rural communities?</h3> 
        Telemedicine improves healthcare access in rural areas by overcoming distance, limited specialists, and resources,prescriptions, and follow-up care for better health outcomes.
    </div>
    <div className="box">
        <h3>3.Is telemedicine available 24/7?</h3>
        Some telemedicine platforms offer 24/7 urgent care, but availability depends on the platform, providers, and consultation type.
    </div>
    <div className="box">
        <h3>4.Can telemedicine be used for mental health care?</h3>
        Telemedicine platforms offer mental health services like counseling and therapy, benefiting rural areas with limited access to professionals.
    </div>
    <div className="box">
        <h3>5.Can I get prescriptions through telemedicine?</h3>
        Telemedicine consultations often lead to electronic prescriptions, though some medications may require a physical exam.
    </div>
    </div>
  )
}
