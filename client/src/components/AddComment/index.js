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


export const AddComment = () => {
    const classes = useStyles();

    return (
        <Grid className={classes.mainContent} position="static">
            <TextField
                className={classes.textField}
                id="add-new-post"
                label="Add new post"
                multiline
                size="small"
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