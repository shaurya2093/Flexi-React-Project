// import React, { useState } from 'react';
// import { Form, Button } from 'react-bootstrap';
// import './SignUp.css'

// const LoginSignup = () => {
//   const [activeForm, setActiveForm] = useState('login');

//   const handleFormSubmit = (event) => {
//     event.preventDefault();

//     // TODO: Send the login or signup data to the server.
//     // If the authentication or account creation is successful, redirect the user to the home page.
//     // Otherwise, display an error message.
//   };

//   return (
//     <div className="sign-up-container">
//       <h1>Login or Sign Up</h1>

//       <div className="row">
//         <div className="col-md-6">
//           <Form onSubmit={handleFormSubmit}>
//             <Form.Group controlId="formGroupEmail">
//               <Form.Label>Email Address</Form.Label>
//               <Form.Control type="email" placeholder="Enter your email address" />
//             </Form.Group>

//             {activeForm === 'login' && (
//               <Form.Group controlId="formGroupPassword">
//                 <Form.Label>Password</Form.Label>
//                 <Form.Control type="password" placeholder="Enter your password" />
//               </Form.Group>
//             )}

//             {activeForm === 'signup' && (
//               <Form.Group controlId="formGroupName">
//                 <Form.Label>Name</Form.Label>
//                 <Form.Control type="text" placeholder="Enter your name" />
//               </Form.Group>
//             )}

//             <Button type="submit">Submit</Button>
//           </Form>
//         </div>

//         <div className="col-md-6">
//           <ul className="nav nav-pills nav-fill">
//             <li className="nav-item">
//               <a
//                 className={`nav-link ${activeForm === 'login' ? 'active' : ''}`}
//                 onClick={() => setActiveForm('login')}
//               >
//                 Login
//               </a>
//             </li>
//             <li className="nav-item">
//               <a
//                 className={`nav-link ${activeForm === 'signup' ? 'active' : ''}`}
//                 onClick={() => setActiveForm('signup')}
//               >
//                 Sign Up
//               </a>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LoginSignup;

import React from 'react'
import './SignUp.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
const defaultState = {
  name:null,
  email:null,
  password:null,
  nameError:null,
  emailError:null,
  passwordError:null
  }
  class CustomFormValidation extends React.Component{
    constructor(){
      super();
      this.state = defaultState;
      this.handleInputChange = this.handleInputChange.bind(this);
      }
      handleInputChange(event) {
      const target = event.target;
      var value = target.value;
      const name = target.name;
      this.setState({
      [name]: value
      });
      }
      validate(){
      let nameError = "";
      let emailError = "";
      let passwordError = "";
      if(!this.state.name){
      nameError = "Name field is required";
      }
      const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      if(!this.state.email || reg.test(this.state.email) === false){
      emailError = "Email Field is Invalid ";
      }
      if(!this.state.password){
      passwordError = "Password field is required";
      }
      if(emailError || nameError || passwordError){
      this.setState({nameError,emailError,passwordError});
      return false;
      }
      return true;
      }
      submit(){
      if(this.validate()){
      console.warn(this.state);
      this.setState(defaultState);
      }
      }
    render(){
      return(
        <div className="App">
          <div class="container-fluid ps-md-0">
              <div class="row g-0">
                <div class="d-none d-md-flex col-md-4 col-lg-6 bg-image"></div>
                <div class="col-md-8 col-lg-6">
                  <div class="login d-flex align-items-center py-5">
                    <div class="container">
                      <div class="row">
                        <div class="col-md-9 col-lg-8 mx-auto">
                          <h3 class="login-heading mb-4">Welcome back!</h3>
            
                          
                          <form>
                            <div class="form-floating mb-3">
                              <input type="email" className={"form-control " + (this.state.emailError ? 'invalid' : '')} id="floatingInput" name='email' placeholder="name@example.com" value={this.state.email} onChange={this.handleInputChange} />
                              <label for="floatingInput">Email address</label>
                              <span className="text-danger">{this.state.emailError}</span>
                            </div>
                            <div class="form-floating mb-3">
                              <input type="password" className={"form-control " + (this.state.passwordError ? 'invalid' : '')} id="floatingPassword" name="password" placeholder="Password" value={this.state.password} onChange={this.handleInputChange} />
                              <label for="floatingPassword">Password</label>
                              <span className="text-danger">{this.state.passwordError}</span>
                            </div>
            
                            <div class="form-check mb-3">
                              <input class="form-check-input" type="checkbox" value="" id="rememberPasswordCheck" />
                              <label class="form-check-label" for="rememberPasswordCheck">
                                Remember password
                              </label>
                            </div>
            
                            <div class="d-grid">
                              <button class="btn btn-lg btn-primary btn-login text-uppercase fw-bold mb-2" type="button" onClick={()=>this.submit()}>Sign in</button>
                              <div class="text-center">
                                <a class="small" href="#">Forgot password?</a>
                              </div>
                            </div>
            
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
 )  
}
}
export default CustomFormValidation;
