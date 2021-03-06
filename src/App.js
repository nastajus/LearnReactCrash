import React, { Component } from 'react';
import Projects from './Components/Projects'
import './App.css';

class App extends Component {

  constructor(){
    super();

    // we don't actually want to set the data here.
    this.state = {
      projects: [
        {
          title: 'Business Website',
          category: 'Web Design'
        },
        {
          title: 'Social App',
          category: 'Mobile Development'
        },
        {
          title: 'Ecommerce Shopping',
          category: 'Web Development'
        }
      ]
    }
    this.state.hey = { "things" : "more things"};
    this.state.hoy = { yo: 'oh oy ow' };
    // INVALID: this.state.okso.more.asdf = {"1" : "1" };
    // INVALID: this.state.oksoo.moree.asdff = "1" ;
  }

  render() {
    return (
      <div className="App">
        My App
        <Projects test="hello world"/>
        <Projects projects={this.state.projects} hey={this.state.hey}/>
      </div>
    );
  }
}

export default App;
