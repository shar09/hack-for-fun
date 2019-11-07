import React from 'react';
import Card from 'react-bootstrap/Card';

const RecipeCard = ({ image, title, sourceUrl, missedIngredients }) => (
    <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={image} />
        <Card.Body>
            <Card.Title>{title}</Card.Title>
            {missedIngredients.map(ingredient => (
                <Card.Text key={ingredient.id}>{ingredient.original}</Card.Text>
            ))}
            <Card.Link href={sourceUrl}>See Full Recipe</Card.Link>
        </Card.Body>
    </Card>
);

export default RecipeCard;
