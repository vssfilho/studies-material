import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import Select from '@material-ui/core/Select';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import Button from '@material-ui/core/Button';
import { InputFinanceiroReal, InputTelefoneMovel, InputTelefoneFixo } from '../utils/CustomElements'
import { classButtonPrimary, classButtonSecondary, cssLabel, classInputText, cssFocused } from '../style/styleCSS';

export default class FormElements extends Component {

    constructor() {
        super();
        this.state = {
            openModalForm: false,
            scroll: 'paper',
        };
    }

    componentDidMount() {
        this.props.store.subscribe(() => {
            this.setState({ openModalForm: this.props.store.getState().form });
        });
    }

    /*
    openModalCadastro = scroll => () => {
        this.setState({ openModalForm: true, scroll });
    };
    */

    closeModalCadastro = () => {
        this.setState({ openModalForm: false });
    };

    render() {
        return (
            <Dialog
                open={this.state.openModalForm}
                onClose={this.handleClose}
                scroll={this.state.scroll}
                aria-labelledby="scroll-dialog-title"
            >
                <DialogContent>
                    <form>
                        <TextField
                            id="nome"
                            label="Nome"
                            fullWidth
                            placeholder="Nome"
                            InputProps={{
                                classes: {
                                    input: classInputText,
                                    focused: cssFocused,
                                },
                            }}
                            InputLabelProps={{
                                shrink: true,
                                className: cssLabel,
                            }}
                        />
                        <TextField
                            id="data_nascimento"
                            label="Data de Nascimento"
                            type="date"
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                        <FormControl>
                            <InputLabel htmlFor="sexo">Sexo</InputLabel>
                            <Select
                                native
                                inputProps={{
                                    name: 'sexo',
                                    id: 'sexo',
                                }}
                            >
                                <option value="Sexo" />
                                <option value={'M'}>Masculino</option>
                                <option value={'F'}>Feminino</option>
                            </Select>
                        </FormControl>
                        <TextField
                            label="Salário"
                            id="salario"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            InputProps={{
                                inputComponent: InputFinanceiroReal,
                            }}
                        />
                        <TextField
                            label="Telefone Fixo"
                            id="telefone_fixo"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            InputProps={{
                                inputComponent: InputTelefoneFixo,
                            }}
                        />
                        <TextField
                            label="Telefone Celular"
                            id="telefone_movel"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            InputProps={{
                                inputComponent: InputTelefoneMovel,
                            }}
                        />
                        <FormControl>
                            <InputLabel
                                FormLabelClasses={{
                                    root: cssLabel,
                                    focused: cssFocused,
                                }}
                                htmlFor="custom-css-input"
                            >
                                Custom CSS
                            </InputLabel>
                            <Input
                                id="custom-css-input"
                            />
                        </FormControl>
                    </form>
                </DialogContent>
                <DialogActions>
                    <Button className={classButtonSecondary} onClick={this.closeModalCadastro}>
                        Cancelar
                    </Button>
                    <Button className={classButtonPrimary} onClick={this.closeModalCadastro}>
                        Salvar
                    </Button>
                </DialogActions>
            </Dialog>
        );
    }

}
