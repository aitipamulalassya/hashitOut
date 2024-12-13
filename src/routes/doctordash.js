import React from 'react'
import '../App.css'
export default function Doctordash() {
  return (
    <>
    
    <div className="search-container">
    <input type="text" placeholder="Search here..." id="searchInput"/>
    <button className='serch-btn' >Search</button>
  </div>
    <div className='appointment-table'>
     <table>
      <thead>
        <tr> <th>ID</th>
            <th>Name</th>
            <th>Date</th>
            <th>Time</th>
            <th>Status</th>
            <th>Call</th></tr>
      </thead>
      <tbody>
        <tr>
          <td>239A0n76</td>
          <td>Umesh</td>
          <td>21 Nov 2020</td>
          <td>06:00 PM</td>
          <td>Completed
          </td>
          <td><button className='Completed'>remove</button></td>
        </tr>
        <tr>
          <td>239A04567</td>
          <td>Kalyani</td>
          <td>21 Nov 2020</td>
          <td>06:00 PM</td>
          <td>pending
          </td>
          <td><button className='accept'>Accept</button></td>
        </tr>
        <tr>
          <td>239A0n76</td>
          <td>Umesh</td>
          <td>20 Jan 2022</td>
          <td>05:00 PM</td>
          <td>Completed
          </td>
          <td><button className='Completed'>remove</button></td>
        </tr>
        <tr>
          <td>239A0566</td>
          <td>Venkateshwarlu</td>
          <td>21 Nov 2020</td>
          <td>03:00 PM</td>
          <td>Missed
          </td>
          <td><button className='missed'>Remove</button></td>
        </tr>
        <tr>
          <td>239450n76</td>
          <td>Rajitha</td>
          <td>05 Apr 2024</td>
          <td>11:00 AM</td>
          <td>Pending
          </td>
          <td><button className='accept'>Accept</button></td>
        </tr>
        <tr>
          <td>23n480n76</td>
          <td>Ramu</td>
          <td>21 oct 2023</td>
          <td>07:00 PM</td>
          <td>Missing
          </td>
          <td><button className='missed'>remove</button></td>
        </tr>
      </tbody>
     </table>
    </div>
    </>
  )
}