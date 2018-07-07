import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import { InputFinanceiroReal, InputTelefoneMovel, InputTelefoneFixo } from '../utils/CustomElements'

export default class FormElements extends Component {

    state = {
        open: true,
        scroll: 'paper',
    };

    handleClickOpen = scroll => () => {
        this.setState({ open: true, scroll });
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    render() {
        return (
            <Dialog
                open={this.state.open}
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
                            InputLabelProps={{
                                shrink: true,
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
                    </form>
                </DialogContent>
                <DialogActions>
                    <Button onClick={this.handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={this.handleClose} color="primary">
                        Subscribe
                    </Button>
                </DialogActions>
            </Dialog>
        );
    }

}