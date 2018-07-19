import React, { Component } from 'react';
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import CustomCheckbox from '../utils/CustomCheckbox';

import Pubsub from 'pubsub-js';
import '../style/style.css';
import tema from '../style/AppBarStyle';
import $ from 'jquery';

export default class MenuView extends Component {

    constructor() {
        super();
        this.openFormEventoView = this.openFormEventoView.bind(this);
        this.openPreviewEventoView = this.openPreviewEventoView.bind(this);
        this.state = {
            checkbox: [
                { id: 1, desc: 'Check 1' },
                { id: 2, desc: 'Check 2' },
                { id: 3, desc: 'Check 3' },
                { id: 4, desc: 'Check 4' },
            ]
        };
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
                    <FormControl component="fieldset">
                        <FormGroup>
                            {
                                this.state.checkbox.map(value => {
                                    return (
                                        <FormControlLabel
                                            control={
                                                <CustomCheckbox
                                                    checked={this.state.gilad}
                                                    //onChange={this.handleChange('gilad')}
                                                    id={value.id}
                                                    tema={tema.temaAzul}
                                                />
                                            }
                                            label={value.desc}
                                        />
                                    )
                                })
                            }
                        </FormGroup>
                    </FormControl>
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
