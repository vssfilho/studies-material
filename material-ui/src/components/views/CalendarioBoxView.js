import React, { Component } from 'react';
import ModalFormEvento from './calendario/modal/CalendarioFormEventoView';
import CalendarioView from './calendario/CalendarioView'

export default class CalendarioBoxView extends Component {
  render() {
    return (
      <div>
        <ModalFormEvento />
        <CalendarioView />
      </div>
    );
  }
}