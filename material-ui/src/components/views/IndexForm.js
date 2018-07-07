import React, { Component } from 'react';
import FormElemets from './FormElements';
import Button from '@material-ui/core/Button';

export default class IndexForm extends Component {

    render() {
        return (
            <div>
                <Button variant="contained">
                    Abrir Form Cadastro
                </Button>
                <FormElemets />
            </div>
        );
    }

}