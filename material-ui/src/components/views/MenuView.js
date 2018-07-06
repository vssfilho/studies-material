import React, { Component } from 'react';
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';
import Pubsub from 'pubsub-js';

export default class MenuView extends Component {
    
    constructor() {
        super();
        this.openFormEventoView = this.openFormEventoView.bind(this);
    }

    openFormEventoView() {
        Pubsub.publish('show-modal-calendario-form-event', null);
    }

    render() {
        return (
            <Button variant="fab" onClick={this.openFormEventoView} color="primary" aria-label="add">
                <AddIcon />
            </Button>
        );
    }
}
