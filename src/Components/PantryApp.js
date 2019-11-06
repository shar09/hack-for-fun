import React from 'react';
import RecipeList from './RecipeList';

const PantryApp = props => {
    const [recipes, setRecipes] = React.useState([{ imageSrc: 'test', title: 'test', content: 'test', link: 'test' }]);
    console.log("TCL: recipes", recipes)

    return (
        <div>
            <h1>Welcome to the pantry!</h1>
            {recipes && <RecipeList recipes={recipes} />}
            {/* IngredientsForm */}
        </div>
    );
};

export default PantryApp;
