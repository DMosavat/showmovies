import React, { Component } from 'react';
import {Route , Switch } from 'react-router-dom';

//add bootstarpt styles file 
import 'bootstrap/dist/css/bootstrap.min.css';

//add sections components
import Footer from './components/footer';

//add pages components
import Home from './routes/home';
import NoMatch from "./routes/noMatch";

class App extends Component{
  

    render(){
        return(
            <div  >
                
               <div >                
                   
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route component={NoMatch}/>
                    </Switch>
                    
                </div>
               
                <Footer />             
                
            </div>
        );
    }
}

export default App;