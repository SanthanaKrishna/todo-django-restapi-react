import React from 'react';
import PropTypes from 'prop-types';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
    toolbar: {
        textAlign: 'center',
        height: 80
    },
    heading: {
        margin: 'auto'
    }
})
export const TodoHeader = props => {
    const classes = useStyles();
    return (
        <AppBar position="static">
            <Toolbar className={classes.toolbar}>
                <Typography className={classes.heading}>
                    Todo App
                </Typography>
            </Toolbar>
        </AppBar>
    )
}

TodoHeader.propTypes = {

}
