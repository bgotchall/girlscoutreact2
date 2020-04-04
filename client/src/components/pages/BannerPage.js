import React, { useState, useEffect } from "react";
import { useAuth0 } from "../../react-auth0-spa";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";



const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            flexGrow: 1,
            display: "flex",
            flexWrap: "wrap",
            margin: "30px"
            //backgroundColor: 'rgb(255, 230, 204)',
        },
    }, textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: '100ch',
    },
    bigBox: {
        margin: theme.spacing(1),
        width: '100ch',
        // height: '500px',
    },
    paper: {
        padding: theme.spacing(2),
        margin: theme.spacing(1),
        textAlign: "center",
        color: theme.palette.text.secondary,
        backgroundColor: " offwhite"
    },
    date: {
        padding: theme.spacing(2),
        margin: theme.spacing(1),
        textAlign: "center",
        color: theme.palette.text.secondary,
        backgroundColor: " offwhite",
        width: "200px",
    },
}));


const debug = true;

function BannerPage() {
    const { isAuthenticated_real } = useAuth0();
    const isAuthenticated =  isAuthenticated_real|| debug;
    const classes = useStyles();

    const [title, setTitle] = useState("");
    const [subtitle, setSubTitle] = useState("");
    const [body, setBody] = useState("");
    const [selectedDate, handleDateChange] = useState(new Date());

    const handleSubmit = e => {
        e.preventDefault();
        console.log("title is " + title);
        console.log("body is " + body);
        console.log("the date is " + selectedDate)
        postData();
    };

    function postData() {
        const data = {
            title: title,
            subtitle: subtitle,
            news_detail: body
        }
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        };
        fetch('api/header', requestOptions)
            .then(response => response.json())
        //.then(data => setPostId(data.id));

    };

    return (
        <>
            {isAuthenticated && (
                <div className={classes.root} >
                    <Grid container className={classes.contentContainer} item xs={12}>
                        <Grid item xs={12}>
                            <Paper className={classes.paper}>
                                <h1> Banner Edit</h1>
                            </Paper>
                        </Grid>

                        <Grid item xs={12}>
                            <Paper className={classes.paper}>
                                <form className={classes.root} noValidate autoComplete="off">
                                    
                                    <TextField
                                        className={classes.textField}
                                        id="standard-full-width"
                                        label="Title"
                                        variant="outlined"
                                        onChange={e => setTitle(e.target.value)}
                                    />
                                    <TextField
                                        className={classes.textField}
                                        id="standard-full-width"
                                        label="Sub Title"
                                        variant="outlined"
                                        onChange={e => setSubTitle(e.target.value)}
                                    />
                                    <TextField
                                        className={classes.bigBox}
                                        id="newsItem"
                                        label="News Item"
                                        variant="outlined"
                                        multiline='true'
                                        onChange={e => setBody(e.target.value)}
                                    />

                                    <Button
                                        variant="contained"
                                        color="primary"
                                        onClick={handleSubmit}
                                        type="submit"
                                    >Submit</Button>
                                </form>
                            </Paper>
                        </Grid>
                    </Grid>
                </div>
            )}
            {!isAuthenticated && (

                <div>
                    <paper>
                        <h1> news page public content </h1>
                        <p> You should log in</p>
                    </paper>
                </div>
            )}
        </>
    );
};

export default BannerPage;

