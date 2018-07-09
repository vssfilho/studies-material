import React, { Component } from 'react';
import FormElemets from './FormElements';
import Button from '@material-ui/core/Button';

import FormApi from '../api/FormApi';

import { classButtonPrimary } from '../style/styleCSS';

class IndexForm extends Component {

    constructor() {
        super();
        this.openModalCadastro = this.openModalCadastro.bind(this);
    }

    openModalCadastro(event) {
        event.preventDefault();
        this.props.store.dispatch(FormApi.openModalCadastro(true));
    }

    render() {
        return (
            <div>
                <Button className={classButtonPrimary} variant="contained" onClick={this.openModalCadastro}>
                    Abrir Form Cadastro
                </Button>
                <FormElemets store={this.props.store} />
            </div>
        );
    }

}

export default IndexForm;