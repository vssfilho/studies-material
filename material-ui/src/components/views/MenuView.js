import React, { Component } from 'react';
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';
import Pubsub from 'pubsub-js';
import '../style/style.css';
import $ from 'jquery';

export default class MenuView extends Component {

    constructor() {
        super();
        this.openFormEventoView = this.openFormEventoView.bind(this);
        this.openPreviewEventoView = this.openPreviewEventoView.bind(this);
    }

    componentDidMount() {
        //$(document).ready(function () {
            //console.log($.browser);
            //if (!$.browser.webkit) {
            //    $('.wrapper').html('<p>Sorry! Non webkit users. :(</p>');
            //}
        //});
    }

    openFormEventoView() {
        Pubsub.publish('show-modal-calendario-form-event', null);
    }

    openPreviewEventoView() {
        Pubsub.publish('show-modal-preview-event', null);
    }

    render() {
        return (
            <div id="wrapper">
                <div className="scrollbar" id="style-1">
                    <Button variant="fab" onClick={this.openFormEventoView} color="primary" aria-label="add">
                        <AddIcon />
                    </Button>
                    <Button variant="fab" onClick={this.openPreviewEventoView} color="secondary" aria-label="add">
                        <AddIcon />
                    </Button>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <div className="force-overflow"></div>
                </div>
            </div>
        );
    }
}
