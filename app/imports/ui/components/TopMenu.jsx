
import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';
import { Container, Menu, Dropdown, Image, Grid } from 'semantic-ui-react';


export default class TopMenu extends React.Component {
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