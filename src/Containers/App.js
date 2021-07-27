import React, { Component } from 'react';
import './App.css';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { withStyles } from '@material-ui/styles';

import PersonsCards from './../Person/PersonsCards'
import TabPanel from '../Tabs/TabPanel';

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: 'white',
  },
});

class App extends Component {
  state = {
    value: 0
  }

  a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

  handleChange = (event, newValue) => {
    this.setState({
      value: newValue
    })
  };

  render() {
    const { classes } = this.props;
    // const [value, setValue] = React.useState(0);

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Tabs value={this.state.value} onChange={this.handleChange} aria-label="simple tabs example">
            <Tab label="Persons Cards" {...this.a11yProps(0)} />
            <Tab label="Item Two" {...this.a11yProps(1)} />
            <Tab label="Item Three" {...this.a11yProps(2)} />
          </Tabs>
        </AppBar>
        <TabPanel value={this.state.value} index={0}>
          <PersonsCards />
        </TabPanel>
        <TabPanel value={this.state.value} index={1}>
        </TabPanel>
        <TabPanel value={this.state.value} index={2}>
          Item Three
        </TabPanel>
      </div>
    );

    // The code above is compiled into something like this. That's why we need to import React from 'react' module
    //return React.createElement('div', { className: 'App' }, React.createElement('h1', null,  'Hello'));
  }
}

export default withStyles(styles)(App);
