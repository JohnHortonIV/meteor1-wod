import React from 'react';
import { Grid } from 'semantic-ui-react';

export default class FooterMenu extends React.Component {
  render() {
    return (
        <div className="footer">
          <Grid container>
            <Grid.Row centered>
              (c) 2017 Three Peaks <br/>
              Photos taken by Aki Lily Photography. <br/>
              Site created by ICS 314.
            </Grid.Row>
          </Grid>
        </div>
    );
  }
}