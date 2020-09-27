import React, { useState } from 'react';
import Sundorbon from '../Sundorbon/Sundorbon';
import fakeData from './../../../fakeData/fakeData';
import './Sunhotel.css';


const Sunhotel = () => {
    const Sunhotel = fakeData;
    console.log(fakeData)
    const [hotel, setHotel] = useState(Sunhotel);

    
    return (
        <div className='myhotel'>
            <h4>Stay in Sundorbon hotel</h4>
            <div className="hotelpart">
            {
                      hotel.map(hotel => <Sundorbon hotel = {hotel}
                        ></Sundorbon>)
            }
            </div>
            <div className="map">
           
            </div>
            
        </div>
    );
};


export default Sunhotel;