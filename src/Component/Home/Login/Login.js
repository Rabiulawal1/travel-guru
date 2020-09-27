import React, { useContext, useState } from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import firebaseConfig from '../../../firebaseConfig';
import { userContext } from '../../../App';
import { useHistory, useLocation } from 'react-router-dom';
import './Login.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  } from '@fortawesome/free-solid-svg-icons';
import img from './../../../Icon/fb.png';
import img1 from './../../../Icon/google.png';


firebase.initializeApp(firebaseConfig);


const Login = () => {
    const [newUser, setNewUser] = useState(false);

    const [user,setUser] = useState({
        isSignedIn:false,
        name:'',
        email:'',
        photo:'',
        password:'',
        error:'',
        success:false

    });
    const [loggedInUser, setloggedInUser] = useContext(userContext);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    const provider = new firebase.auth.GoogleAuthProvider();
    const fbprovider = new firebase.auth.FacebookAuthProvider();
    const handleSignin = () =>{
        firebase.auth().signInWithPopup(provider)
        .then(res =>{
            const {displayName,email} = res.user;
            const isSignedInUser = {
                isSignedIn: true,
                name:displayName,
                email:email
            }
            setUser(isSignedInUser);
            setloggedInUser(isSignedInUser);

        })

    }

    const handleBlur = (e) => {
        let isFieldValid = true;
        if(e.target.name === 'email'){
            isFieldValid = /\S+@\S+\.\S+/.test(e.target.value);
        }
        if(e.target.name === 'password'){
            const isPasswordValid = e.target.value.length > 6;
            const isPasswordHasNumber = /\d{1}/.test(e.target.value);
            isFieldValid = isPasswordValid && isPasswordHasNumber;
        }
        if(isFieldValid){ 
            const newUserInfo = {...user};
            newUserInfo[e.target.name] = e.target.value;
            setUser(newUserInfo);

        }
    }
    const handleSubmit = (e) =>{
        console.log(user.email, user.password);
        if(newUser && user.email && user.password){
            firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
            .then(res =>{
                const newUserInfo = {...user};
                newUserInfo.error = '';
                newUserInfo.success =true;
                setUser(newUserInfo);
            })
            .catch(error => {
                // Handle Errors here.
                const newUserInfo = {...user};
                newUserInfo.error = error.message;
                newUserInfo.success = false;
                setUser(newUserInfo);
                
              });

        }
        if(!newUser && user.email && user.password){
            firebase.auth().signInWithEmailAndPassword(user.email, user.password)
            .then(res =>{
                const newUserInfo = {...user};
                newUserInfo.error = '';
                newUserInfo.success =true;
                setUser(newUserInfo);
                setloggedInUser(newUserInfo);
                history.replace(from);
                console.log(newUserInfo)

            })
            .catch(error => {
                // Handle Errors here.
                const newUserInfo = {...user};
                newUserInfo.error = error.message;
                newUserInfo.success = false;
                setUser(newUserInfo);
              });

        }
        e.preventDefault();
    }

    const handleFbSignin = () =>{
        firebase.auth().signInWithPopup(fbprovider).then(function(result) {
            // This gives you a Facebook Access Token. You can use it to access the Facebook API.
            var token = result.credential.accessToken;
            // The signed-in user info.
            var user = result.user;
            console.log(user)
            // ...
          }).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            console.log(error)
            // ...
          });
    }


    return (
        
        <div >
            <div className='loginform'>
            <input type="checkbox" name="newUser" onChange={() => setNewUser(!newUser)}/>
            <label htmlFor="newUser">Signup for New User</label>
            <form onSubmit={handleSubmit}>
            { newUser && <div><label htmlFor="">Name:  </label>
            <input onBlur={handleBlur} type="text" name="name" placeholder="enter your name" required/></div>
            }<br/>
            <label htmlFor="email">Email: </label>  
            <input onBlur={handleBlur} type="text" name="email" placeholder="enter your Email" required/><br/>
            <label htmlFor="password">Password: </label> 
            <input onBlur={handleBlur} type="password" name="password" placeholder="enter your password" required/><br/><br/><b></b>
            <input type="submit"/>
            </form>

            </div>
            <div className="fbsignin">
                <div className="fbimg">
                    <img src={img1} alt=""/>
                </div>
                <div className="fbbutton">
                {
                user.isSignedIn ? <button onClick={handleSignin}> Signout </button> :

                <button onClick={handleSignin}>Google Signin </button>

            }
                </div>
        
            </div> 
            
            
            <div className="google">
            

            </div>
            <div className="fbsignin">
                <div className="fbimg">
                    <img src={img} alt=""/>
                </div>
                <div className="fbbutton">
                <button onClick={handleFbSignin}>FaceBook Signin</button>
                </div>
        
            </div>            
            
            <p style={{color:'red'}}>{user.error}</p>
            {user.success && <p style={{color:'green'}}>User {newUser ? 'created' : 'logedin'} Successfully</p>}

            
        </div>
    );
};

export default Login;