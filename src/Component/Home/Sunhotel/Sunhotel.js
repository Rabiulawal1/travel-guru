import React, { useState } from 'react';
import Sundorbon from '../Sundorbon/Sundorbon';
import fakeData from './../../../fakeData/fakeData';

const Sunhotel = () => {
    const Sunhotel = fakeData;
    console.log(fakeData)
    const [hotel, setHotel] = useState(Sunhotel);

    
    return (
        <div>
            <div className="hotelpart">
            {
                      hotel.map(hotel => <Sundorbon hotel = {hotel}
                        ></Sundorbon>)
                  }
            </div>
            
        </div>
    );
};

export default Sunhotel;