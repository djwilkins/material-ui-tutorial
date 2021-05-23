import React, { useEffect, useState } from 'react'
import Container from '@material-ui/core/Container';
import NoteCard from '../components/NoteCard';
import Masonry from 'react-masonry-css';
import { makeStyles } from '@material-ui/core'

// Implementing React Masonry CSS standard classes (https://www.npmjs.com/package/react-masonry-css)
// Through Material UI makeStyles
const useStyles = makeStyles({
  myMasonryGrid: {
    display: 'flex',
    marginLeft: '-30px', /* gutter size offset */
    width: 'auto'
  },
  myMasonryGridColumn: {
    paddingLeft: '30px', /* gutter size */
    backgroundClip: 'padding-box'
  },
  /* Style your items */
  myMasonryGridColumnDiv: { /* change div to reference your elements you put in <Masonry> */
    marginBottom: '30px'
  }
});

// Create breakpointColumnObj to feed Masonry component for responsive column number (per screen width)
// Adjusted from official docs - https://www.npmjs.com/package/react-masonry-css
const breakpointColumnsObj = {
  default: 3,
  1200: 2,
  850: 1
};

export default function Notes() {
  const [notes, setNotes] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    fetch('http://localhost:8000/notes')
      .then(res => res.json())
      .then(data => setNotes(data))
  }, []);

  const handleDelete = async (id) => {
    await fetch('http://localhost:8000/notes/' + id, {
      method: 'DELETE'
    })
    // Once the fetch request / JSON Server delete from json file is complete
    // We also need to update our notes in state - we which do here simply by
    // filtering the current notes in state to the exclusion of the deleted one
    // And setting state to that new filtered notes array
    const newNotes = notes.filter(note => note.id !== id)
    setNotes(newNotes);
  }

  // For "xs" (extra small) size screens and up, each Grid item should take up 12 columns (in the 12 column grid)
  // For "md" (medium) size screens and up, each Grid item below should take up 6 columns (in the 12 column grid)
  // For "lg" (large) size screens and up, each Grid item below should take up 4 columns (in the 12 column grid)
  return (
    <Container>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className={classes.myMasonryGrid}
        columnClassName={classes.myMasonryGridColumn}
      >
        {notes.map(note => (
          <div className={classes.myMasonryGridColumnDiv} key={note.id}>
            <NoteCard note={note} handleDelete={handleDelete} />
          </div>
        ))}
      </Masonry>
    </Container>
  )
}
