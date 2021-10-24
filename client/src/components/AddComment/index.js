import React from 'react';

import { TextField, InputAdornment, Button, Grid, IconButton, Avatar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import file from '../../assets/img/add-file-post.png'

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

    const addFile = () => {
        console.log('hello');
        const input = document.createElement('input');
        input.type = 'file';
        input.click();


        input.onchange = e => {
            // getting a hold of the file reference
            const file = e.target.files[0];

        }
    };

    return (
        <Grid className={classes.mainContent} position="static">
            <TextField
                style={{ fontFamily: "Rosarivo" }}
                className={classes.textField}
                id="add-new-post"
                label="Typing..."
                multiline
                size="small"
                variant="outlined"
                InputProps={{
                    endAdornment: <InputAdornment position="end"><IconButton onClick = {addFile}><img src={file}  alt="add file" />
                        </IconButton></InputAdornment>,
                }}
                maxRows={4}
                    />
            <Button style={{ fontFamily: "Rosarivo" }} variant="contained" size="small" className={classes.buttonAdd}><b>Find</b></Button>

        </ Grid>
    )
}