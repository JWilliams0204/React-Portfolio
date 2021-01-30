import React, { Component } from 'react';
import "app.css";
import "./components/nav.js";
import "./Components/form.js"
import 'bootstrap/dist/css/bootstrap.min.css';

export default class Portfolio extends Component {
    render() {
        return (
            <div>
                 <H2 align="center">My Work Examples</H2>
   
   <div className="container">
     <div className="w-50 p-3" style="background-color: white;">


<div className="row">
<div className="col-md">
  
   <a  href=" JWCodeRefractor.github.io">JWCodeRefractor.github.io
   </a>
   <br>
   <a href="https://jwilliams0204.github.io/PasswordGeneratorJW/">https://jwilliams0204.github.io/PasswordGeneratorJW/
  </a>
  <br><br>
  <a href="https://jwilliams0204.github.io/MultipleChoiceJW/">https://jwilliams0204.github.io/MultipleChoiceJW/
  </a>
  <br><br>
  Group Project Website:
  <a href="https://j35rl4r.github.io/PokeDex-V1/">https://j35rl4r.github.io/PokeDex-V1/
  </a>
  
  </div>
  </div>
  </div>
        </div>   
        </div>
        )
    }
}

export default Portfolio;
