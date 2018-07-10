import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import SearchIcon from '@material-ui/icons/Search';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';

export const SearchPanelInput = ({
    onValueChange,
    value,
    getMessage,
    style,
    className,
    ...restProps
}) => (
        <Input
            id="input-with-icon-adornment"
            startAdornment={
                <InputAdornment position="start">
                    <SearchIcon />
                </InputAdornment>
            }
            fullWidth
            className={classNames('form-control', className)}
            onChange={e => onValueChange(e.target.value)}
            value={value}
            style={{ ...style }}
            placeholder={'Buscar...'}
            {...restProps}
        />
    );

SearchPanelInput.propTypes = {
    value: PropTypes.any,
    onValueChange: PropTypes.func.isRequired,
    style: PropTypes.object,
    getMessage: PropTypes.func.isRequired,
    className: PropTypes.string,
};

SearchPanelInput.defaultProps = {
    value: null,
    style: null,
    className: undefined,
};