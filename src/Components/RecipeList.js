import React from 'react';
import RecipeCard from './RecipeCard';
import styled from 'styled-components';

const RecipeContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    justify-items: space-around;
    max-width: ${props => props.theme.maxWidth};
    margin: 40px;
`;


const RecipeList = ({ recipes }) => (
    <RecipeContainer>
        {recipes.map((recipe, index) => (
            <RecipeCard
                key={index}
                image={recipe.image}
                title={recipe.title}
                sourceUrl={recipe.sourceUrl}
                missedIngredients={recipe.missedIngredients}
            />
        ))}
    </RecipeContainer>
);

export default RecipeList;
