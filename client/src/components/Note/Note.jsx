import React from 'react';
import { Card, Label } from 'semantic-ui-react';

export default function Note({ note }) {
  return (
    <Card>
      <Card.Content header={note.title} />
      <Card.Content description={note.text} />
      <Card.Content extra>
        <Label.Group circular>
          <Label color="yellow">
            Yellow
          </Label>
          <Label color="blue">
            Blue
          </Label>
          <Label color="pink">
            Pink
          </Label>
        </Label.Group>
      </Card.Content>
    </Card>
  );
}
