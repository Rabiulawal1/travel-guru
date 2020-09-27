import React, { useState } from 'react';
import Coxbazar from '../Coxbazar/Coxbazar';
import fakeData from './../../../fakeData/fakeData';

const Coxhotel = () => {
    const Sunhotel = fakeData;
    console.log(fakeData)
    const [hotel, setHotel] = useState(Sunhotel);

    return (
        <div className='myhotel'>
            <h4>Stay in Cox's Bazar hotel</h4>
            <div className="hotelpart">
            {
                      hotel.map(hotel => <Coxbazar hotel = {hotel}
                        ></Coxbazar>)
            }
            </div>
            <div className="map">
           
            </div>
            
        </div>
    );
};

export default Coxhotel;