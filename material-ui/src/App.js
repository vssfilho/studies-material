import React, { Component } from 'react';
import MenuView from './components/views/MenuView';
import CalendarioBoxView from './components/views/CalendarioBoxView';
import Grid from '@material-ui/core/Grid';
import IndexForm from './components/views/IndexForm';

class App extends Component {
  render() {
    /*
    <Grid container spacing={24}>
      <Grid item xs={12} sm={2}>
        <MenuView />
      </Grid>
      <Grid item xs={12} sm={10}>
        <CalendarioBoxView />
      </Grid>
    </Grid>
    */
    return (
      <div>
        <IndexForm />
      </div>
    );
  }
}

export default App;
