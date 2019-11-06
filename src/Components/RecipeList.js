import React from 'react';
import RecipeCard from './RecipeCard';
import styled from 'styled-components';

const RecipeContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 60px;
    max-width: ${props => props.theme.maxWidth};
    margin: 0 auto;
`;

const RecipeList = ({ recipes }) => (
    <RecipeContainer>
        {recipes.map((recipe, index) => (
            <RecipeCard key={index} imageSrc={recipe.imageSrc} title={recipe.title} content={recipe.content} link={recipe.link} />
        ))}
    </RecipeContainer>
);

export default RecipeList;
