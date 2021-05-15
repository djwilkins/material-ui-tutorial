import React, { useEffect, useState } from 'react'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import NoteCard from '../components/NoteCard';

export default function Notes() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/notes')
      .then(res => res.json())
      .then(data => setNotes(data))
  }, []);

  // For "xs" (extra small) size screens and up, each Grid item should take up 12 columns (in the 12 column grid)
  // For "md" (medium) size screens and up, each Grid item below should take up 6 columns (in the 12 column grid)
  // For "lg" (large) size screens and up, each Grid item below should take up 4 columns (in the 12 column grid)
  return (
    <Container>
      <Grid container>
        {notes.map(note => (
          <Grid item key={note.id} xs={12} md={6} lg={4}>
            <NoteCard note={note} />
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}
