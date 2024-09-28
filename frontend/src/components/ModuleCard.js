import React from 'react';
import { Card, Button } from 'react-bootstrap';

const ModuleCard = ({ module, onComplete }) => {
  return (
    <Card>
      <Card.Body>
        <Card.Title>{module.title}</Card.Title>
        <Card.Text>{module.description}</Card.Text>
        <Button variant="primary" onClick={() => onComplete(module._id)}>Complete Module</Button>
      </Card.Body>
    </Card>
  );
};

export default ModuleCard;
