import React, { Component } from 'react';
import ModalFormEvento from './calendario/modal/CalendarioFormEventoView';
import CalendarioView from './calendario/CalendarioView'
import ModalPreviewEvento from './calendario/modal/PreviewEventoView';

export default class CalendarioBoxView extends Component {
  render() {
    return (
      <div>
        <ModalFormEvento />
        <CalendarioView />
        <ModalPreviewEvento />
      </div>
    );
  }
}