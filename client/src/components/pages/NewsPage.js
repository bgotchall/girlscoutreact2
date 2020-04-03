import React, { useState } from "react";
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


            //flexWrap: 'wrap',
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
}));



function NewsPage() {
    const { isAuthenticated } = useAuth0();
    const classes = useStyles();

    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");

    const handleSubmit = e => {
        e.preventDefault();
        console.log("title is " + title);
        console.log("body is " + body);
        
      };

    return (
        <>
            {isAuthenticated && (
                <div>
                    <h1> news page secret content </h1>
                    <p> more content is allowed?</p>
                </div>
            )}
            {!isAuthenticated && (
                <div className={classes.root} >

                    <Grid container className={classes.contentContainer} item xs={12}>
                        <Grid item xs={12}>
                            <Paper className={classes.paper}>
                                <h1> News page public page</h1>
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
                                    onSubmit={handleSubmit}
                                    type="submit"
                                    >Submit</Button>
                                </form>
                            </Paper>
                        </Grid>
                    </Grid>




                    <paper>


                    </paper>
                </div>
            )}
        </>
    );
};

export default NewsPage;

