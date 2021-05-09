import React, { useEffect, useState } from 'react'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

export default function Notes() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/notes')
      .then(res => res.json())
      .then(data => setNotes(data))
  }, []);

  // For "xs" (extra small) size screens and up, each Grid item should take up 12 columns (in the 12 column grid)
  // For "sm" (small) size screens and up, each Grid item below should take up 6 columns (in the 12 column grid)
  // For "md" (medium) size screens and up, each Grid item below should take up 3 columns (in the 12 column grid)
  return (
    <div>
      <Grid container>
        <Grid item xs={12} sm={6} md={3}>
          <Paper>1</Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Paper>2</Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Paper>3</Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Paper>4</Paper>
        </Grid>
      </Grid>

      {notes.map(note => (
        <p key={note.id}>{ note.title }</p>
      ))}
    </div>
  )
}
