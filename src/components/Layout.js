import React from 'react'
import { makeStyles } from '@material-ui/core'

// Create custom useStyles Hook from makeStyles
// It will hold custom css classes
const useStyles = makeStyles({
    page: {
        background: '#f9f9f9',
        width: '100%'
    }
  });

export default function Layout({ children }) {
    const classes = useStyles();

    return (
        <div>
            {/* app bar */}

            {/* side drawer */}

            <div className={classes.page}>
                {children}
            </div>
        </div>
    )
}
