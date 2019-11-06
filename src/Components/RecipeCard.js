import React, { Component } from 'react';
import Card from 'react-bootstrap/Card'

const RecipeCard = ({imageSrc, title, content, link }) => (
    <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={imageSrc} />
  <Card.Body>
    <Card.Title>{title}</Card.Title>
    <Card.Text>
      {content}
    </Card.Text>
    <Card.Link href={link}>See Full Recipe</Card.Link>
  </Card.Body>
</Card>
)