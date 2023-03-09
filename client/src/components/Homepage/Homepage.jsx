import React from 'react';
import { Grid, Segment } from 'semantic-ui-react';

import LeftMenu from '../LeftMenu/LeftMenu';

export default function Homepage() {
  return (
    <Grid
      columns={2}
      celled
      style={{
        height: '90vh',
      }}
    >
      <Grid.Row>
        <Grid.Column
          width={3}
        >
          <Segment>
            <LeftMenu />
          </Segment>
        </Grid.Column>
        <Grid.Column>
          <Segment>1</Segment>
          <Segment>2</Segment>
        </Grid.Column>
      </Grid.Row>
    </Grid>

  );
}
