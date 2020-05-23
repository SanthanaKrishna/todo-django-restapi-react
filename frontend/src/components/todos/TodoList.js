import React, { useEffect, memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Container, Typography, List, ListItem, ListItemText, ListItemSecondaryAction, IconButton, CircularProgress } from '@material-ui/core';
import { Edit as EditIcon, Delete as DeleteIcon } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
import { getTodo, editTodo, deleteTodo } from './TodoActions';

const useStyles = makeStyles(theme => (
    {
        root: {
            display: 'flex',
            '& > * + *': {
                marginLeft: theme.spacing(2),
            },
        },
        container: {
            padding: 16
        }
    }
));

export const TodoList = memo(() => {
    console.log('todolist')
    const classes = useStyles();
    const dispatch = useDispatch();
    const { isLoading = true, error = '', todoList = [], isTodoDeleted } = useSelector(state => state.todoState);


    useEffect(() => {
        console.log('get useEffect')
        dispatch(getTodo());
    }, [])

    useEffect(() => {
        if (isTodoDeleted) {
            console.log('delete useEffect')
            dispatch(getTodo());
        }
    }, [isTodoDeleted])

    const handleEdit = (items) => {
        console.log('edit', items)
        dispatch(editTodo(items));
    }

    const handleDelete = (items) => {
        console.log('delete', items)
        dispatch(deleteTodo(items));
    }

    return (
        <Container className={classes.Container} maxWidth="md">
            {
                isLoading ?
                    <div className={classes.root}>
                        <p>loading...</p>
                        <CircularProgress />
                    </div>
                    : !todoList.length
                        ?
                        <Typography>No Todo available</Typography>
                        :
                        <List>
                            {
                                todoList.map(item => (
                                    <ListItem key={item.id}>
                                        <ListItemText primary={item.title} />
                                        <ListItemText primary={item.description} />
                                        <ListItemSecondaryAction>
                                            <IconButton edge="end" aria-label="delete" color="primary" onClick={() => handleEdit(item)}>
                                                <EditIcon />
                                            </IconButton>
                                            <IconButton edge="end" aria-label="delete" onClick={() => handleDelete(item)} >
                                                <DeleteIcon />
                                            </IconButton>
                                        </ListItemSecondaryAction>
                                    </ListItem>
                                ))
                            }
                        </List>
            }
        </Container>
    )
})
