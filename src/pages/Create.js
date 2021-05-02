import React from 'react'
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
// import { makeStyles } from '@material-ui/core/styles';

// Create custom useStyles Hook from makeStyles
// It will hold custom css classes
// const useStyles = makeStyles({

// })

export default function Create() {
  // Grab css classes from useStyles hook to apply to components below
  // const classes = useStyles();

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

      <Button
        onClick={() => console.log("You clicked me.")}
        type="submit"
        color="secondary"
        variant="contained"
        endIcon={<KeyboardArrowRightIcon/>}
      >
        Submit
      </Button>

    </Container>
  )
}
