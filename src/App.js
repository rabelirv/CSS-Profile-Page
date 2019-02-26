import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <head>
<title></title>
</head>

<body>
<div className="header">
  <img src="https://s3.amazonaws.com/codecademy-content/courses/freelance-1/unit-2/travel.jpeg"  alt="avatar"/>
  <h1>Olivia Woodruff</h1>
  <p className="about-me">I am a developer specializing in HTML and CSS. I like to run, bike, and make coffee using an Aeropress.</p>
</div>

<h2>Projects</h2>
<p className="title">Web Development projects</p>
<ul>
  <li>Coffee Brur</li>
  <li>Taco Finder</li>
  <li>CSS Selector Finder</li>
  <li>HTML Formatter</li>
</ul>

<p className="title">Design projects</p>
<ul>
  <li>Yum Yum Fudge Inc.</li>
  <li>University of Marimont Dance Marathon</li>
</ul>
<h2>Contact</h2>
<p>Find me on Twitter, Dribbble, and GitHub.</p>

<h6>&copy; Copyright. All Rights Reserved.</h6>
</body>
      </div>
    );
  }
}

export default App;
