import React from 'react';
import { Grid, Segment } from 'semantic-ui-react';

import LeftMenu from '../LeftMenu/LeftMenu';
import Notebooks from '../Notebooks/Notebooks';
import TextEditor from '../TextEditor/TextEditor';

export default function Homepage() {
  return (
    <Grid
      columns={3}
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
        <Grid.Column
          width={4}
        >
          <Notebooks />
        </Grid.Column>
        <Grid.Column
          width={9}
        >
          <TextEditor />
        </Grid.Column>
      </Grid.Row>
    </Grid>

  );
}
