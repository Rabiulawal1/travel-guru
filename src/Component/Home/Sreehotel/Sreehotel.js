import React, { useState } from 'react';
import Sreemongol from '../Sreemongol/Sreemongol';
import fakeData from './../../../fakeData/fakeData';
import './Sreehotel.css';

const Sreehotel = () => {
    const Sunhotel = fakeData;
    console.log(fakeData)
    const [hotel, setHotel] = useState(Sunhotel);

    return (
        <div className='myhotel'>
            <h4>Stay in Sreemongol hotel</h4>
            <div className="hotelpart">
            {
                      hotel.map(hotel => <Sreemongol hotel = {hotel}
                        ></Sreemongol>)
            }
            </div>
            <div className="map">
           
            </div>
            
        </div>
       
    );
};

export default Sreehotel;