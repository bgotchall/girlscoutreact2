import {debugging} from '../../globals';
import React, { useState, useEffect } from "react";
import { useAuth0 } from "../../react-auth0-spa";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

import { DatePicker } from "@material-ui/pickers";

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
function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}


function NewsPage() {
    const { isAuthenticated } = useAuth0();
    const isAuthenticated2 = isAuthenticated || debugging;
    const classes = useStyles();

    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [selectedDate, handleDateChange] = useState(new Date());
    const [writeOpen, setWriteOpen] = useState(false);  //for the snackbar/toast/alert
    const [deleteOpen, setDeleteOpen] = useState(false);  //for the snackbar/toast/alert
    const [dirty, setDirty]= useState(false);

    const [list, setList] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        // Update the document title using the browser API
        getList();
        setTitle("");
        setBody("");
        setDirty(false);
    }, [dirty]);

    //Retrieves the list of items from the Express app
    function getList() {
        fetch('api/news')
            .then(res => res.json())
            .then(results => {
                setList(results);
                setIsLoaded(true);
                console.log(`length is ${results.length}`)
            })
    }


    const handleSubmit = e => {
        e.preventDefault();
        console.log("title is " + title);
        console.log("body is " + body);
        console.log("the date is " + selectedDate)
        postData();
        setTitle("");
        setBody("");
        setDirty(true);
    };

    function deleteNews(id)  {
       
        console.log("Deleting " + id);
        fetch('api/news/' + id,{method:'delete'})
            .then(res => res.json())
            .then(results => {
                console.log(`item ${id} was deleted.  result: ${results}`)
                setDirty(true);
                setDeleteOpen(true);          //fire off the toast
            
            })

    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setWriteOpen(false);
        setDeleteOpen(false);
    };

    function postData() {
        const data = {
            newsDate:  selectedDate ,
            title: title,
            news_detail: body,
            author: 0,
        }
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        };
        fetch('api/news', requestOptions)
            .then(response => response.json())
            
        setWriteOpen(true);          //fire off the toast
        

    };

    return (
        <>
            {isAuthenticated2 && (
                <div className={classes.root} >
                    <Grid container className={classes.contentContainer} item xs={12}>
                        <Grid item xs={12}>
                            <Paper className={classes.paper}>
                                <h1> Edit News</h1>
                            </Paper>
                        </Grid>

                        <Grid item xs={12}>
                            <Paper className={classes.paper}>
                                <form className={classes.root} noValidate autoComplete="off">
                                    <DatePicker
                                        className={classes.date}
                                        disableToolbar
                                        variant="outlined"
                                        format="MM/dd/yyyy"
                                        margin="normal"
                                        id="date-picker-inline"
                                        label="News Date"
                                        value={selectedDate}
                                        onChange={handleDateChange}
                                        KeyboardButtonProps={{
                                            'aria-label': 'change date',
                                        }}
                                    />
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
                                        onClick={handleSubmit}
                                        type="submit"
                                    >Submit</Button>
                                </form>
                            </Paper>

                            <h1>NEWS</h1>

                            {list.map((item) => {
                                return (
                                    <div>
                                        <p>{item.newsDate}</p>
                                        <h5>{item.title}</h5>
                                        <p>{item.news_detail}</p>
                                        <button
                                           onClick={() => deleteNews(item.id)}
                                           buttonsid={item.id} 
                                        >delete</button>
                                        <hr />
                                    </div>
                                );
                            })}


                        </Grid>
                    </Grid>







                    <Snackbar open={writeOpen} autoHideDuration={3000} onClose={handleClose}>
                        <Alert onClose={handleClose} severity="success">
                            News Item Saved!
                        </Alert>
                    </Snackbar>
                    <Snackbar open={deleteOpen} autoHideDuration={3000} onClose={handleClose}>
                        <Alert onClose={handleClose} severity="success">
                            Item Deleted!
                        </Alert>
                    </Snackbar>

                </div>
            )}
            {!isAuthenticated2 && (

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

export default NewsPage;

