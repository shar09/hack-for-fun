import React, { Component } from 'react';
import RecipeCard from './RecipeCard';

const RecipeList = recipes => (
    <div>
        {recipes.map((recipe, index) => (
            <RecipeCard key={index} imageSrc={recipe.imageSrc} title={recipe.title} content={recipe.content} link={recipe.link} />
        ))}
    </div>
);

export default RecipeList;
