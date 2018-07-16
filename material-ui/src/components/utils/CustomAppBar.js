import React from 'react';
import PropTypes from 'prop-types';
import { withTheme } from '@material-ui/core/styles';

import padrao from '../style/AppBarPadrao';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import CloseIcon from '@material-ui/icons/Close';
import EditIcon from '@material-ui/icons/Edit';
import Grid from '@material-ui/core/Grid';

function CustomAppBar(props) {

    return (
        <div>
            <AppBar style={props.tema.appBar}>
                <Grid container spacing={0}>
                    <Grid item xs={12}>
                        <Toolbar style={padrao.toolBar} >
                            <Typography style={padrao.flex} />
                            <IconButton style={padrao.buttonAppBar}>
                                <DeleteIcon size="small" />
                            </IconButton>
                            <IconButton style={padrao.buttonAppBar} onClick={props.handleClose}>
                                <CloseIcon size="small" />
                            </IconButton>
                        </Toolbar>
                    </Grid>
                    <Grid item xs={12} style={padrao.titulo}>
                        Título
                    </Grid>
                </Grid>
                <div style={padrao.editButton}>
                    <Button mini variant="fab" style={props.tema.button}>
                        <EditIcon size="small" />
                    </Button>
                </div>
            </AppBar>
        </div>
    );
}

CustomAppBar.propTypes = {
    theme: PropTypes.object.isRequired,
};

export default withTheme()(CustomAppBar);