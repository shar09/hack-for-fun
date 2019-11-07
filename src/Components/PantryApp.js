import React from 'react';
import RecipeList from './RecipeList';
import './PantryApp.css';

const PantryApp = props => {
    const [recipes, setRecipes] = React.useState([{ imageSrc: 'test', title: 'test', content: 'test', link: 'test' }]);
    console.log("TCL: recipes", recipes)

    return (
        <div className="root">
        <div className="wrappper">
            <h1 className="header">Welcome to the pantry!</h1>
            {recipes && <RecipeList recipes={recipes} />}
            {/* IngredientsForm */}

            <div className="push"></div>
        </div>
        
        <footer>
            Footer 2019. 
        </footer> 
        </div>     
    );
};

export default PantryApp;
