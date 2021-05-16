import React from 'react'
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { IconButton, makeStyles } from '@material-ui/core';
import { DeleteOutlined }  from '@material-ui/icons';

const useStyles = makeStyles({
    test: {
        border: (note) => {
            if (note.category === 'work') {
                return '1px solid red'
            }
        }
    }
});

export default function NoteCard({ note, handleDelete }) {
    const classes = useStyles(note);

    return (
        <div>
            <Card elevation={3} className={classes.test}>
                <CardHeader
                action={
                    // <IconButton onClick={() => console.log('delete', note.title)}>
                    <IconButton onClick={() => handleDelete(note.id)}>
                        <DeleteOutlined />
                    </IconButton>
                    }
                    title={note.title}
                    subheader={note.category}
                />
                <CardContent>
                    <Typography variant="body2" color="textSecondary">
                        {note.details}
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
}