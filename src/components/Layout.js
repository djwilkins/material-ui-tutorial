import React from 'react'
import { makeStyles, Drawer, Typography } from '@material-ui/core'


// Create custom useStyles Hook from makeStyles
// It will hold custom css classes
const drawerWidth = 240;
const useStyles = makeStyles({
    page: {
        background: '#f9f9f9',
        width: '100%'
    },
    drawer: {
        width: drawerWidth
    },
    drawerPaper: {
        width: drawerWidth
    },
    root: {
        display: 'flex' // We're making this a flex row (default) so our Drawer/sidebar doesn't cover up our main page content below.
    }
  });

export default function Layout({ children }) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            {/* app bar */}

            {/* side drawer */}
            <Drawer
              className={classes.drawer}
              variant="permanent"
              anchor="left"
              classes={{ paper: classes.drawerPaper }}
            >
                <div>
                    <Typography variant="h5">
                        Ninja Notes
                    </Typography>
                </div>
            </Drawer>

            <div className={classes.page}>
                {children}
            </div>
        </div>
    )
}
