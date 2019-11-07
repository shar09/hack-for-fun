import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  constructor(props) {
   super(props);
   this.state = {
     word: '',
     items: []
   };
 }

 addToList = (e) => {
   this.setState({ items: [this.state.word, ...this.state.items], word: ''})
   this.renderList();

 }

 onChange = (e) => {
   this.setState({word: e.target.value});
 }
 
 render() {
     const renderList = () => {
       return (
     <ul>
       {this.state.items.map((word, index) =>
         <li key={index}>{word}</li>) }
     </ul>
   )};

   return <div>
     <input value={this.state.word} onChange={this.onChange} />
     <button onClick={this.addToList}>+</button>
     {renderList()}
   </div>;
 }

export default App;
