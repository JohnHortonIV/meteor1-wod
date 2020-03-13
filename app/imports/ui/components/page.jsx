// eslint-disable-next-line max-classes-per-file
import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';
import { Container, Menu, Dropdown, Image, Grid } from 'semantic-ui-react';

class TopMenu extends React.Component {
  render() {
    return (
        <Menu borderless className="topmenu">
          <Container>
            <Menu.Item>HOME</Menu.Item>
            <Menu.Item>MISSION</Menu.Item>
            <Dropdown item text="PRODUCTS & SERVICES">
              <Dropdown.Menu>
                <Dropdown.Item></Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown item text="ABOUT US">
              <Dropdown.Menu>
                <Dropdown.Item></Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Menu.Item>CONTACT</Menu.Item>
          </Container>
        </Menu>
    );
  }
}


class FullWidthImage extends React.Component {
  render() {
    return (
        <Image fluid src="//courses.ics.hawaii.edu/ics314s20/morea/ui-frameworks/wod-three-peaks-image.png"/>
    );
  }
}

class FooterMenu extends React.Component {
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

class ThreePeaks extends React.Component {

  render() {
    return (
        <div>
          <TopMenu/>
          <FullWidthImage/>
          <FooterMenu/>
        </div>
    );
  }
}

// eslint-disable-next-line no-undef
ReactDOM.render(<ThreePeaks/>, document.getElementById('root'));
