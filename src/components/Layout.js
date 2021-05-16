import React from 'react'
import { makeStyles, Drawer, Typography } from '@material-ui/core'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import SubjectOutlined from '@material-ui/icons/SubjectOutlined';
import AddCircleOutlined from '@material-ui/icons/AddCircleOutlined';

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

    const menuItems = [
        {
            text: 'My Notes',
            icon: <SubjectOutlined color="secondary" />,
            path: '/'
        },
        {
            text: 'Create Note',
            icon: <AddCircleOutlined color="secondary" />,
            path: '/create'
        }
    ]

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
                    <List>
                        {menuItems.map((link) => (
                            <ListItem
                              key={link.text}
                            >
                                <ListItemIcon>{link.icon}</ListItemIcon>
                                <ListItemText primary={link.text} />
                            </ListItem>

                        ))}
                    </List>
                </div>
            </Drawer>

            <div className={classes.page}>
                {children}
            </div>
        </div>
    )
}
