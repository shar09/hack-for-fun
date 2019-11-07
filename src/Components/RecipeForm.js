import React from 'react';
import { Form, Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";

export default class RecipeForm extends React.Component {
  constructor(props) {
  super();
  this.state = {
     word: '',
     items: [],
   };
 };
 addToList = (e) => {
   const updated_items = [this.state.word, ...this.state.items]
   this.setState({ items: updated_items, word: ''})
   this.props.setIngredients(updated_items)
   this.renderList()
 }

 removeFromList = (word) => {
   const i = this.state.items.indexOf(word);
   const newList = [...this.state.items];
   newList.splice(i,1);
   this.setState({items: newList})
 }

 onChange = (e) => {
   this.setState({word: e.target.value});
 }

 renderList = () => {
   return (
     <ul>

       {this.state.items.map((word, index) =>
         <li key={index}>{word} - <Button onClick= {() => {     this.removeFromList(word) }} > X </Button></li> ) }
     </ul>
   )
 }


 render() {
  return (
        <div>
            <Form style={{ width: '20rem' }}>
                <Form.Group controlId="formIngredients">
                    <Form.Label > Ingredients </Form.Label>
                    <Form.Control type="Text" placeholder="Enter Ingredient" value={this.state.word} onChange={this.onChange} />
                    <Button  onClick={this.addToList}> Add Ingredient </Button>
                </Form.Group>
            </Form>
            {this.renderList()}
        </div>
    );
  }
}
