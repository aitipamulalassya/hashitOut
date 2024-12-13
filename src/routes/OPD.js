import '../App.css';

function OPD() {
  return (
    <>
    <div className='bg-img'>

   
    <h1>OPD Timings</h1>
    <h2>General OPD Hours:</h2>
   <div className='para'>
<p>
Monday to Friday: 9:00 AM - 5:00 PM</p>
<p>
Saturday: 9:00 AM - 1:00 PM</p><p>
Closed on Sunday
</p>
</div>
<h2>Specialty Timings:</h2>
<div className='para'>


<p>

Dermatology: Monday & Wednesday, 9:00 AM - 12:00 PM
</p>
<p>
Cardiology: Tuesday & Thursday, 2:00 PM - 5:00 PM</p><p>Pediatrics: Friday, 9:00 AM - 12:00 PM</p>
<p>
Orthopedics:
Tuesday& Thursday: 9:00 AM - 12:00 PM
Friday: 2:00 PM - 5:00 PM

</p>
</div>
</div>
    </>
  );
}
export default OPD;