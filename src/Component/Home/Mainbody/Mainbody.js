import React from 'react';
import logo from '../../../Logo.png';
import './Mainbody.css';
import { Navbar, Nav, Form, FormControl, Button, CardDeck, Card} from 'react-bootstrap';
import coxbazar from './../../../Image/Rectangle 1.png';
import sreemongol from './../../../Image/Sreemongol.png';
import sundorbon from './../../../Image/sundorbon.png';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link, useHistory
  } from "react-router-dom";

const Mainbody = () => {

   
        let history = useHistory();
      
        const logIn = () => {
          history.push("/CoxbazarBooking");
        }
        const logInSree = () =>{
            history.push("/SreemongolBooking");

        }
        const bookingSun = () =>{
            history.push("/SundorbonBooking");

        }
    
        

    return (
        <div className="homepage">
            <Navbar  className="logo" bg="transparent" variant="transparent">
                 <img src={logo} alt=""/>
                 <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                </Form>
                <Nav className="mr-auto">
                <Nav.Link href="#home">News</Nav.Link>
                <Nav.Link href="#features">Destination</Nav.Link>
                <Nav.Link href="#pricing">Blog</Nav.Link>
                <Nav.Link href="#pricing">Contact</Nav.Link>
                <Button>Login</Button>
                </Nav>
                
            </Navbar>
            <div className="body">
                <div className="locations">
                    <div className="coxbazar">
                        <h1>Coxs Bazar</h1>
                        <button onClick={()=>logIn()}>Booking</button>

                    </div>
                    <div className="sreemongol">
                        <h1>Sreemongol</h1>
                        <button onClick={()=>logInSree()}>Booking</button>


                    </div>
                    <div className="sundorbon">
                        <h1>Sundorbon</h1>
                        <button onClick={()=>bookingSun()}>Booking</button>

                    </div>

                </div>
                <div className="card">
                <CardDeck>
                        <Card>
                            <Card.Img variant="top" src={coxbazar} />
                            <h5>Coxbazar</h5>
                        </Card>
                        <Card>
                            <Card.Img variant="top" src={sreemongol} />
                            <h5>Sreemongol</h5>
                        </Card>
                        <Card>
                            <Card.Img variant="top" src={sundorbon} />
                            <h5>Sundorbon</h5>
                        </Card>
                        </CardDeck>
                </div>
            </div>
            
            
            
        </div>
    );
};

export default Mainbody;