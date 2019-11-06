import React, {Component} from 'react';
import PantryApp from './Components/PantryApp';

class App extends Component{

  constructor(props)
  {
    super(props);
    //adds this.state to save the recipes, and indicate json is loaded or not
    this.state = {
      recipes: [],
      isLoaded: false,
      //ingredients: [] ???
    }
  }


  componentDidMount() {
    //API from which to pull json
    const API = "https://api.spoonacular.com/recipes/findByIngredients"
    const apikey = "e7e8a1d91f9b4f46bbb75f039569e610"
    //number of recipes to pull
    // have it be changed so we can pull any number of recips whenever possible
    let number = 5
    //list of ingredients
    // modify so take in multiple ingredients
    let ingredientList = ["beef", "onion", "carrot", "salt", "pepper"]
    //turns ingredients so that list of ingredients can be added to url
    const ingredientString = ingredientList.map( ingredient => (
        ingredient + ",+"
      )
    )
    //create a url string for fetch
    let fetch_string = API + "?ingredients=" + ingredientString + "&number=" + number + "&apiKey="+ apikey + "&limitLicense=true"
    fetch(fetch_string)
      .then(res => res.json())
      .then(json => {
        this.setState({
          isLoaded: true, //json from url loaded
          recipes: json, 
        })
      });
  }
  render(){
    var { isLoaded, recipes } = this.state;
    console.log(recipes)
    if (!isLoaded) {
      return <div> Loading </div>

    }
    return (
      <div className="App">
        <PantryApp />
      </div>
    )
  }
}
export default App;
