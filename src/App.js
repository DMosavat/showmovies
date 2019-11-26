import React, { Component } from 'react';
import {Route , Switch } from 'react-router-dom';

//add bootstarpt styles file 
import 'bootstrap/dist/css/bootstrap.min.css';

//add sections components
import Header from './components/sections/Header.js';
import Footer from './components/sections/Footer';

//add pages components
import Home from './components/pages/home';
import About from './components/pages/about';
import Favorites from './components/pages/favorites';
import NoMatch from "./components/pages/noMatch";

class App extends Component{
  

    render(){
        return(
            <div >
                          
                <Header />
                
               <div >                
                   
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/favorites"  component={Favorites} />
                        <Route path="/about"  component={About} />
                        <Route component={NoMatch}/>
                    </Switch>
                    
                </div>
               
                <Footer />             
                
            </div>
        );
    }
}

export default App;