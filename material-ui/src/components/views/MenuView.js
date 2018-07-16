import React, { Component } from 'react';
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';
import Pubsub from 'pubsub-js';

export default class MenuView extends Component {

    constructor() {
        super();
        this.openFormEventoView = this.openFormEventoView.bind(this);
        this.openPreviewEventoView = this.openPreviewEventoView.bind(this);
    }

    openFormEventoView() {
        Pubsub.publish('show-modal-calendario-form-event', null);
    }

    openPreviewEventoView() {
        Pubsub.publish('show-modal-preview-event', null);
    }

    render() {
        return (
            <div>
                <Button variant="fab" onClick={this.openFormEventoView} color="primary" aria-label="add">
                    <AddIcon />
                </Button>
                <Button variant="fab" onClick={this.openPreviewEventoView} color="secondary" aria-label="add">
                    <AddIcon />
                </Button>
            </div>
        );
    }
}
