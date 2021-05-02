import React from 'react'
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import SendIcon from '@material-ui/icons/Send';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';

export default function Create() {
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
        startIcon={<SendIcon />}
        endIcon={<KeyboardArrowRightIcon/>}
      >
        Submit
      </Button>

    </Container>
  )
}
