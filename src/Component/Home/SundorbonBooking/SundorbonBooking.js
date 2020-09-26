import React from 'react';
import { Navbar, Nav, Form, FormControl, CardDeck, Card,Button} from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import logo from './../../../Logo.png';
import './SundorbonBooking.css';

const SundorbonBooking = () => {
    let history = useHistory();
      
    const booking = () => {
      history.push("/Sunhotel");
    }
    return (
        <div className='sreebooking'>
      <Navbar  className="logo" bg="transparent" variant="transparent">
             <img src={logo} alt=""/>
             <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            </Form>
            <Nav className="mr-auto">
            <Nav.Link className='menu' href="#home">News</Nav.Link>
            <Nav.Link className='menu' href="#features">Destination</Nav.Link>
            <Nav.Link className='menu' href="#pricing">Blog</Nav.Link>
            <Nav.Link className='menu' href="#pricing">Contact</Nav.Link>
            <Button className='button' variant="warning">Login</Button>
            </Nav>
            
        </Navbar>
      <div className="locationDetails">
        <div className="details">
        <h1>Sundorbon</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi ab, accusantium obcaecati ipsa harum libero soluta quis architecto! Impedit tempora laudantium repudiandae ipsam provident amet eos praesentium, iste delectus dicta!</p>
        </div>
        <div className="booking">
          <form action="">
            <p>origin</p>
            <input type="text"/>
            <p>Destination</p>
            <input type="text"/>
            <div className="date">
              <div className="from"><br/>
                <p>From</p>
                <input type="date"/>
              </div>
              <div className="to"><br/>
                <p>TO</p>
                <input type="date"/>
              </div>
            </div>
            <Button className='button' onClick={booking} variant="warning">Booking</Button>
          </form>
        
        </div>

      </div>
        
        
    </div>
    );
};

export default SundorbonBooking;