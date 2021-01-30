import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "app.css";
import "card.js"


export default class Contact extends Component {
    render() {
        return (
            <div>
                <div className="card-group">
    
    <div className="container">
      <div className="row justify-content-md-center">
      <div className="col-6">
                <form>
                <div className="form-group">
      <label for="exampleInputEmail1">Name</label>
      <input  type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter name"></input>
      <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
    </div>
    <div className="form-group">
      <label for="exampleInputPassword1">Email</label>
      <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Email"></input>
    </div>
   
    <button type="submit" className="btn btn-primary">Submit</button>
  
  
  </form>
            </div>
            </div>
            </div>
            </div>
            </div>
            
        )
    };
}

export default Contact;