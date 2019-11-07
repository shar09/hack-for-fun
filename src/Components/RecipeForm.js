import React from 'react';
import { Form, Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";

export default class RecipeForm extends React.Component {
  constructor(props) {
  super();
  this.state = {
     word: '',
     items: []
   };
 };
 addToList = (e) => {
   const updated_items = [this.state.word, ...this.state.items]
   this.setState({ items: updated_items, word: ''})
   this.props.setIngredients(updated_items)
   this.renderList()
 }

 removeFromList = (index) => {
   // const items_copy = [...this.state.items]
   // const update_items = items_copy.splice(word, 1)
   // console.log(items_copy)
   // console.log(update_items)
   // this.setState({items: update_items});

 }

 onChange = (e) => {
   this.setState({word: e.target.value});
 }

 renderList = () => {
   return (
     <ul>

       {this.state.items.map((word, index) =>
         <li key={index}>{word} - <button onClick= {this.removeFromList(index)} > X </button></li> ) }
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
