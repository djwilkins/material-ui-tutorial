import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { grey } from '@material-ui/core/colors';


// Create custom useStyles Hook from makeStyles
// It will hold custom css classes
const useStyles = makeStyles({
  field: {
    marginTop: 20,
    marginBottom: 20,
    display: 'block'
  }
})

export default function Create() {
  // Grab css classes from useStyles hook to apply to components below
  const classes = useStyles();
  const history = useHistory();
  const [title, setTitle] = useState('');
  const [details, setDetails] = useState('');
  const [titleError, setTitleError] = useState(false);
  const [detailsError, setDetailsError] = useState(false);
  const [category, setCategory] = useState('todos');

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default action of page refresh

    // Form validation (set error value to true if value missing)
    (!title) ? setTitleError(true) : setTitleError(false);
    (!details) ? setDetailsError(true) : setDetailsError(false);
    if (!title || !details) return; // return early if anything missing

    // If made it this far, new note data is good
    // Submit to data/db.json with POST request to save
    fetch('http://localhost:8000/notes', {
      method: 'POST',
      headers: {"Content-type": "application/json"},
      body: JSON.stringify({ title, details, category })
    }).then(() => history.push('/'));
  } // Note: JSON Server handles adding a unique id for us
  // Else could use something like lodash _.uniqueId()

  return (
    <Container>
      <Typography
        variant="h6"
        color="textSecondary"
        component="h2"
        gutterBottom
      >
        Create a New Note
      </Typography>

      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <TextField
          onChange={(e) => setTitle(e.target.value)}
          className={classes.field}
          label="Note Title"
          variant="outlined"
          color="secondary"
          fullWidth
          required
          error={titleError}
        >
        </TextField>
        <TextField
          onChange={(e) => setDetails(e.target.value)}
          className={classes.field}
          label="Details"
          variant="outlined"
          color="secondary"
          multiline
          rows={4}
          fullWidth
          required
          error={detailsError}
        >
        </TextField>

        <FormControl className={classes.field}>
          <FormLabel>Note Category</FormLabel>
          <RadioGroup value={category} onChange={(e) => setCategory(e.target.value)}>
            <FormControlLabel value="money" control={<Radio />} label="Money" />
            <FormControlLabel value="todos" control={<Radio />} label="Todos" />
            <FormControlLabel value="reminder" control={<Radio />} label="Reminder" />
            <FormControlLabel value="work" control={<Radio />} label="Work" />
          </RadioGroup>
        </FormControl>

        <Button
          type="submit"
          color="secondary"
          variant="contained"
          endIcon={<KeyboardArrowRightIcon/>}
        >
          Submit
        </Button>
      </form>

    </Container>
  )
}
