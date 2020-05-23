import React, { useState, useEffect, memo } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Grid, TextField, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useForm, ErrorMessage } from "react-hook-form";

import { getTodo, addTodo, updateTodo } from './TodoActions';

const useStyles = makeStyles({
    root: {
        marginTop: 16,
        marginBottom: 16,
        padding: 16,
        boxShadow: "0px 3px 5px -1px rgba(0,0,0,0.2), 0px 6px 10px 0px rgba(0,0,0,0.14), 0px 1px 18px 0px rgba(0,0,0,0.12)"
    },
    button: {
        marginTop: 16
    }
});

export const TodoForm = memo(() => {
    console.log('TodoForm')
    const classes = useStyles();
    const dispatch = useDispatch();
    const { todoEdit, isTodoUpdated } = useSelector(state => state.todoState);
    const { isEditItem } = todoEdit;
    console.log('isEditItem+++++++', isEditItem)

    const { register, errors, handleSubmit } = useForm();

    useEffect(() => {
        if (isTodoUpdated) {
            console.log('update useEffect');
            dispatch(getTodo());
        }
    }, [isTodoUpdated])


    const handleOnSubmit = (data) => {
        console.log('submit', data);
        const { title, description } = data;
        if (!isEditItem) {
            dispatch(addTodo(data));
            dispatch(getTodo());
        } else {
            const updateValue = {
                id: todoEdit.id,
                title,
                description
            }
            dispatch(updateTodo(updateValue));
        }
    }

    return (
        <Container maxWidth="sm" className={classes.root}>
            <form onSubmit={handleSubmit(handleOnSubmit)}>
                <Grid container spacing={3} alignItems="center">
                    <Grid item md={12}>
                        <input
                            name="title"
                            defaultValue={isEditItem ? todoEdit.title : ''}
                            ref={register({
                                required: 'Provide Title'
                            })}
                        />
                        {/* {errors.title && <p>Provide Title</p>} */}
                        <ErrorMessage errors={errors} name='title' as='p' />
                    </Grid>
                    <Grid item md={12}>
                        <input
                            name="description"
                            defaultValue={isEditItem ? todoEdit.description : ''}
                            ref={register({
                                required: true
                            })}
                        />
                    </Grid>
                    <Grid item md={12}>
                        <Button
                            className={classes.button}
                            variant="contained"
                            color="primary"
                            type='submit'
                        >
                            {
                                isEditItem ? 'UPDATE' : 'ADD'
                            }
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </Container>
    )
})

TodoForm.propTypes = {

}

