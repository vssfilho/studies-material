import React from 'react';
import PropTypes from 'prop-types';
import { withTheme } from '@material-ui/core/styles';

import Checkbox from '@material-ui/core/Checkbox';

function CustomCheckbox(props) {

    return (
        <Checkbox style={props.tema.checkbox}
            //checked={this.state.gilad}
            //onChange={this.handleChange('gilad')}
            value={props.id}
        />
    );

}

CustomCheckbox.propTypes = {
    theme: PropTypes.object.isRequired,
};

export default withTheme()(CustomCheckbox);