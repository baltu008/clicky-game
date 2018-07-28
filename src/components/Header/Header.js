import React from "react";
import { Jumbotron } from "reactstrap";


const Header = props => (
  <div className="container">
    <div className="row">
      <Jumbotron>
        <h1>Linux OS Distro Game</h1>
        <hr />
        <h2>Rules:</h2>
        <ul>
          <li>Start game by clicking on a picture.</li>
          <li>Increase points by clicking on different pictures each time!</li>
          <li>
            Note: If you click on a picture more than once the game is over!
          </li>
        </ul>
        <h4>Current Score: {props.score}</h4>
        <h4>Highest Score: {props.highScore} </h4>
      </Jumbotron>
    </div>
  </div>
);

export default Header;
