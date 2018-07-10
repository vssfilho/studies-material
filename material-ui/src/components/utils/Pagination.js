import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import { withStyles } from '@material-ui/core/styles';
import { firstRowOnPage, lastRowOnPage } from '@devexpress/dx-grid-core';
import Select from '@material-ui/core/Select';
import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';

import FirstPageIcon from '@material-ui/icons/FirstPage';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import LastPageIcon from '@material-ui/icons/LastPage';

const styles = theme => ({
    pagination: {
        float: 'right',
        margin: 0,
    },
    rowsLabel: {
        ...theme.typography.caption,
        paddingRight: theme.spacing.unit * 5,
        lineHeight: `${theme.spacing.unit * 5}px`,
    },
    button: {
        minWidth: theme.spacing.unit * 2,
        height: theme.spacing.unit * 5,
    },
    activeButton: {
        fontWeight: 'bold',
        cursor: 'default',
    },
    arrowButton: {
        width: theme.spacing.unit * 4,
        height: theme.spacing.unit * 4,
        display: 'inline-block',
        verticalAlign: 'middle',
    },
    prev: {
        marginRight: 0,
    },
    next: {
        marginLeft: 0,
    },
    pageSizeSelector: {
        ...theme.typography.caption,
        float: 'right',
        paddingRight: theme.spacing.unit * 5,
    },
    label: {
        paddingRight: theme.spacing.unit * 3,
        lineHeight: `${theme.spacing.unit * 5}px`,
        float: 'left',
    },
    pageSizes: {
        display: 'inline-block',
    },
    pageSizeTitle: {
        width: 'auto',
        marginRight: theme.spacing.unit / 2,
    },
    inputRoot: {
        paddingTop: theme.spacing.unit * 0.75,
        float: 'right',
        fontSize: theme.spacing.unit * 1.75,
        textAlign: 'right',
    },
    selectIcon: {
        top: 2,
    },
    '@media(max-width: 768px)': {
        button: {
            display: 'none',
        },
        prev: {
            marginRight: theme.spacing.unit,
        },
        next: {
            marginLeft: theme.spacing.unit,
        },
        rowsLabel: {
            paddingRight: theme.spacing.unit * 2,
        },
        label: {
            display: 'none',
        },
        pageSizeSelector: {
            paddingRight: theme.spacing.unit * 2,
        },
    },
});

const PageButton = ({
    text, isActive, isDisabled, classes, onClick,
}) => {
    const buttonClasses = classNames({
        [classes.button]: true,
        [classes.activeButton]: isActive,
    });

    return (
        <Button
            className={buttonClasses}
            disabled={isDisabled}
            onClick={onClick}
            disableRipple={isActive}
        >
            {text}
        </Button>
    );
};

PageButton.propTypes = {
    text: PropTypes.string.isRequired,
    isActive: PropTypes.bool,
    isDisabled: PropTypes.bool,
    classes: PropTypes.object.isRequired,
    onClick: PropTypes.func,
};

PageButton.defaultProps = {
    onClick: () => { },
    isDisabled: false,
    isActive: false,
};

const PaginationBase = ({
    totalPages,
    totalCount,
    pageSize,
    currentPage,
    onCurrentPageChange,
    getMessage,

    onPageSizeChange,
    pageSizes,

    classes,
}) => {
    const from = firstRowOnPage(currentPage, pageSize, totalCount);
    const to = lastRowOnPage(currentPage, pageSize, totalCount);
    const showAll = getMessage('showAll');

    return (
        <div>
            <div className={classes.pagination}>
                <span className={classes.rowsLabel}>
                    {getMessage('info', { from, to, count: totalCount })}
                </span>
                <IconButton
                    onClick={() => (currentPage > 0) && onCurrentPageChange(0)}
                    disabled={currentPage === 0}
                    aria-label="First Page"
                >
                    <FirstPageIcon />
                </IconButton>
                <IconButton
                    onClick={() => (currentPage > 0) && onCurrentPageChange(currentPage - 1)}
                    disabled={currentPage === 0}
                    aria-label="Previous Page"
                >
                    <KeyboardArrowLeft />
                </IconButton>

                <IconButton
                    onClick={() => currentPage < totalPages - 1 && onCurrentPageChange(currentPage + 1)}
                    disabled={currentPage === totalPages - 1 || totalCount === 0}
                    aria-label="Next Page"
                >
                    <KeyboardArrowRight />
                </IconButton>

                <IconButton
                    onClick={() => currentPage < totalPages - 1 && onCurrentPageChange(totalPages)}
                    disabled={currentPage === totalPages - 1 || totalCount === 0}
                    aria-label="Last Page"
                >
                    <LastPageIcon />
                </IconButton>

            </div>
            <div className={classes.pageSizeSelector}>
                <span className={classes.label}>
                    {getMessage('rowsPerPage')}
                </span>
                <Select
                    value={pageSize}
                    onChange={event => onPageSizeChange(event.target.value)}
                    classes={{
                        icon: classes.selectIcon,
                    }}
                    input={
                        <Input
                            disableUnderline
                            classes={{ root: classes.inputRoot }}
                        />
                    }
                >
                    {pageSizes.map(item => (
                        <MenuItem key={item} value={item}>
                            {item !== 0 ? item : showAll}
                        </MenuItem>
                    ))}
                </Select>
            </div>
        </div>
    );
};

PaginationBase.propTypes = {
    totalPages: PropTypes.number.isRequired,
    currentPage: PropTypes.number.isRequired,
    onCurrentPageChange: PropTypes.func.isRequired,
    classes: PropTypes.object.isRequired,
    totalCount: PropTypes.number.isRequired,
    pageSize: PropTypes.number.isRequired,
    getMessage: PropTypes.func.isRequired,

    onPageSizeChange: PropTypes.func.isRequired,
    pageSizes: PropTypes.arrayOf(PropTypes.number).isRequired,
};

export const Pagination = withStyles(styles, { name: 'Pagination' })(PaginationBase);