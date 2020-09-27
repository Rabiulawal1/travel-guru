import React, { useState } from 'react';
import { Navbar, Nav, Form, FormControl, Button, CardDeck, Card, Image} from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import fakeData2 from './../../../fakeData2/FakeData2';

const ImageCard = (props) => {
    const picture = fakeData2;
    const [image, setImage ] = useState(picture);
    console.log(props)

    const clickImage = () => {
        setImage(picture);
    }
    
    let history = useHistory ();
      
    const logIn = () => {
      history.push("/CoxbazarBooking");
    }
    const logInSree = () =>{
        history.push("/SreemongolBooking");

    }
    const bookingSun = () =>{
        history.push("/SundorbonBooking");

    }
    const login = () =>{
        history.push("/Login");

    }


    return (
        <div>
            <div>
            {
                    image.Name === 'Coxbazar' && (<div className="coxbazar">
                    <h1>Coxs Bazar</h1>
                    <button onClick={()=>logIn()}>Booking</button>

                </div>)
                }
                <div className="locations">
                    
                    <div className="sreemongol">
                        <h1>Sreemongol</h1>
                        <button onClick={()=>logInSree()}>Booking</button>


                    </div>
                    <div className="sundorbon">
                        <h1>Sundorbon</h1>
                        <button onClick={()=>bookingSun()}>Booking</button>

                    </div>

                </div>
            </div>
            <button>
            <Card onClick ={clickImage}>
                    <Card.Img  variant="top" src={props.image.photo} />
                    <Card.Body>
                     <Card.Title>{props.image.Name}</Card.Title>
                    <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in to
                        additional content. This content is a little bit longer.
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                </Card>

            </button>
            
        </div>
    );
};

export default ImageCard;