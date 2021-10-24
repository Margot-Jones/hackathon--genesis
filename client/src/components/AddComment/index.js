import React from 'react';

import { TextField, InputAdornment, Button, Grid, IconButton, Avatar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import addFile from '../../assets/img/add-file-post.png'

const useStyles = makeStyles({
    mainContent: {
        display: 'flex',
        marginBottom: '20px',
        backgroundColor: '#941B0C',
        padding: '20px',
        borderRadius: '10px',
    },

    buttonAdd: {
        backgroundColor: '#F6AA1C',
        marginLeft: '10px',
        color: '#fff',
        flex: '1',
    },

    textField: {
        flex: '5',
        backgroundColor: '#fff',
        borderRadius: '5px',
        color: '#941B0C'
    }
});

export const POSTEXAMPLE = {
    date: '23.10.2021',
    author: 'tentacion1999',
    avatar:
        'https://images.unsplash.com/photo-1593642532842-98d0fd5ebc1a?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=869&q=80',
    title: 'Lizard',
    image:
        'https://images.unsplash.com/photo-1593642532842-98d0fd5ebc1a?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=869&q=80',
    text: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
};



export const AddComment = ({ avatar }) => {
    const classes = useStyles();

    return (
        <Grid className={classes.mainContent} position="static">
            <TextField
                className={classes.textField}
                id="add-new-post"
                label="Add new post"
                multiline
                variant="outlined"
                InputProps={{
                    endAdornment: <InputAdornment position="end"><IconButton ><img src={addFile}  alt="add file" />
                        </IconButton></InputAdornment>,
                }}
                maxRows={4}
                    />
            <Button variant="contained" size="small" className={classes.buttonAdd}>Add</Button>

        </ Grid>
    )
}