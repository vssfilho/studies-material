import React, { Component } from 'react';
import Pubsub from 'pubsub-js';
import { withStyles, MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import tema from '../../../style/AppBarStyle';


import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';

import CustomAppBar from '../../../utils/CustomAppBar';

const styles = {
    dialog: {
        width: 448,
    },
    appbar: {
        position: 'relative',
        boxShadow: 'none',
    },
    dialogContentPreview: {
        paddingTop: '24px',
    }
};


class PreviewEventoView extends Component {

    constructor() {
        super();
        this.state = {
            open: false,
            tema: 'vermelho'
        }
    }

    handleOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    componentDidMount() {
        Pubsub.subscribe('show-modal-preview-event', () => {
            this.handleOpen();
        });
    }

    render() {

        const { classes } = this.props;

        return (

            <Dialog
                open={this.state.open}
                onClose={this.handleClose} >
                <div className={classes.dialog}>
                    <CustomAppBar tema={tema.temaVermelho} handleClose={this.handleClose} />
                    <DialogContent>
                        <div className={classes.dialogContentPreview}>
                            conteúdo
                        </div>
                    </DialogContent>
                </div>
            </Dialog>

        );

    }

}

const ModalWrapped = withStyles(styles)(PreviewEventoView);
export default ModalWrapped;