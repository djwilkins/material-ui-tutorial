import React from 'react'
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { IconButton } from '@material-ui/core';
import { DeleteOutlined }  from '@material-ui/icons';

export default function NoteCard({ note }) {
    return (
        <div>
            <Card elevation={3}>
                <CardHeader
                action={
                    <IconButton>
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