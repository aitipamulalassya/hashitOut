import React from 'react'
import '../App.css';
export default function Availabledoctors() {
  return (
    <div className='doc'>
        <div className='doc-container-1'>
            <div className='container-indivi'>
             <div>
                <img src="/img3.jpg" width="400" height="300" alt="doc1"></img>
                </div>
                <div>
                    <p>Doctor Name: Umesh Rao</p>
                    <p>Qualification: MBBS</p>
                    <p>Experience: 9 years</p>
                    <p>contact: 8979795587</p>
                    <button style={{
                        backgroundColor: "green",padding:"10px",
                        borderRadius:"5px"
                    }}>Request for call</button>
                </div>
                
            </div>
            <div className='container-indivi'>
                <div >
            <img src="/img4.jpg"  width="400" height="300" alt="doc2"></img>
            </div>
            <div>
                <p>Doctor Name: Kondalu</p>
                <p>Qualification: Cardilogist</p>
                <p>Experience: 15 years</p>
                <p>contact: 9063414104</p>
                <button style={{
                    backgroundColor: "green",padding:"10px",
                            borderRadius:"5px"}}>Request for call</button>
                            </div>
            </div>
        </div>
        <div className='doc-container-2'>
            <div className='container-indivi'>
                <div>
                <img src="/img5.jpg"  width="400" height="300" alt="doc3"></img>
                </div>
                <div>
                <p>Doctor Name: Prabakar</p>
                <p>Qualification: Nurologist</p>
                <p>Experience: 12 years</p>
                <p>contact: 8979795587</p>
                <button style={{
                    backgroundColor: "green",padding:"10px",
                    borderRadius:"5px"}}>Request for call</button>
                    </div>
            </div>
            <div className='container-indivi'>
                <div>
            <img src="/img6.jpg"  width="400" height="300" alt="doc3"></img>
            </div>
            <div>
                <p>Doctor Name: Mallika</p>
                <p>Qualification: Dentist</p>
                <p>Experience: 11 years</p>
                <p>contact: 8979795587</p>
                <button style={{
                    backgroundColor: "green",padding:"10px",
                    borderRadius:"5px"}}>Request for call</button>
                    </div>
            </div>
        </div>
    </div>
    
  )
}
