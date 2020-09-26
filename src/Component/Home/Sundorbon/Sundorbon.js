import React from 'react';

const Sundorbon = (props) => {
    console.log(props);
    return (
        
        <div>

            <div className="card mb-3" >
               <div className="row no-gutters shadow p-3 mb-5 bg-white rounded">
                    <div className="col-md-4">
                        <img src={props.hotel.img} className="card-img" alt="..."></img>
                    </div>
                    <div className="col-md-8">
                        <div class="card-body">
                            <h5 className="card-title">Course Name : {props.hotel.Description}</h5>
                            <h5 className="card-title">Instructor Name : {props.hotel.Details}</h5>
                            <h5 className="card-text">Course Price: {props.hotel.more} $ </h5> <br/> <br/>

                        </div>
                    </div>
                </div>
            </div>



            {/* <h1>{props.children.courseName}</h1>
           <h3>{props.children.price}</h3>
           <img src={props.children.img} alt=""/>
           <button className='btn btn-warning'>HI click me</button> */}
        </div>
    );
};

export default Sundorbon;