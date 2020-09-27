import React from 'react';
import './Sundorbon.css';

const Sundorbon = (props) => {
    return (
        <div>
           
            <div className='hotelroom'>
           
            <div className="hoteldescription">
                <div className="img">
                    <img src={props.hotel.img} alt=""/>
                </div>
                <div className="hotelfacility">
                    <h4>{props.hotel.Description}</h4>
                    <h6>{props.hotel.Details}</h6>
                    <h6>{props.hotel.more}</h6>
                    <h6>{props.hotel.offer}</h6>
                </div>
                
            </div>           
                      
        </div>

        </div>
        
        
    );
};

export default Sundorbon;