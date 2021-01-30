import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "app.css";
import "./components/card.js"
import JarrettPic from "./public/img/JarrettPic";

export default class Index extends Component {
    render() {
        return (
            <div className = "container">
                <div className ="row justify-content-md-center" >
                <div className="card-body">
        <div className="row">
        <div className="col-md-4">
          <img src = { JarrettPic } alt = "Jarrett headshot"/>
   </div> 
   <div className="col-md-8"> 
        <h5 className="card-title">About Me</h5>
        
        <p className="card-text">Hello my name is Jarrett Williams, i am agraduate of West Chester University. I am from Upper Darby, PA. I have work experience in many areas but i am now beginning a career as a junior web developer.
          If you would like to get into contact with me for any work you can go to my contact page, or emailme directly at <a href="jarrett0204@gmail.com">jarrett0204@gmail.com</a> and i will respond back to you in a reasonable time period. 
        </p>
        <a href="https://www.linkedin.com/in/jarrett-williams-73936799/">https://www.linkedin.com/in/jarrett-williams-73936799/</a>
                </div>
                </div>
                </div>
                </div>
                </div>
            
        )
    }
}

export default Index;
