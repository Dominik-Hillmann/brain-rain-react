// Libraries
import React, { Component } from 'react';
// Styles
import '../css/Bubbles.css';

export default class Bubbles extends Component {
  render() {
    return (
      <>
        <img src="../img/white-circle.png" style={{
          marginLeft: '80vw',
          height: '5px',
          animationDelay: '0s'
        }} className="bubble" alt="A bubble." />

        <img src="../img/white-circle.png" style={{
          marginLeft: '85vw',
          height: '3px',
          animationDelay: '1s'
        }} className="bubble" alt="A bubble." />

        <img src="../img/white-circle.png" style={{
          marginLeft: '70vw',
          height: '7px',
          animationDelay: '2s'
        }} className="bubble" alt="A bubble." />

        <img src="../img/white-circle.png" style={{
          marginLeft: '90vw',
          height: '2px',
          animationDelay: '1.5s'
        }} className="bubble" alt="A bubble." />


        <img src="../img/white-circle.png" style={{
          marginLeft: '68vw',
          height: '2px',
          animationDelay: '0.3s'
        }} className="bubble" alt="A bubble." />
      </>
    );
  }
}