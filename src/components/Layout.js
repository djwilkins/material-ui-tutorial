import React from 'react'
import { useHistory, useLocation } from 'react-router-dom';
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
const useStyles = makeStyles((theme) => {
    return {
        page: {
            background: '#f9f9f9',
            width: '100%',
            padding: theme.spacing(3)
        },
        drawer: {
            width: drawerWidth
        },
        drawerPaper: {
            width: drawerWidth
        },
        root: {
            display: 'flex' // We're making this a flex row (default) so our Drawer/sidebar doesn't cover up our main page content below.
        },
        active: {
            background: '#e6e6e6' // Apply an active style to the Sidebar (Drawer) navigation link of the page we're currently already on.
        },
        title: {
            padding: theme.spacing(2)
        }
      }
});

export default function Layout({ children }) {
    const classes = useStyles();
    const history = useHistory();
    const location = useLocation();

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
                    <Typography variant="h5" className={classes.title}>
                        Ninja Notes
                    </Typography>
                    <List>
                        {menuItems.map((link) => (
                            <ListItem
                              key={link.text}
                              button
                              onClick={() => history.push(link.path)}
                              className={link.path === location.pathname ? classes.active : null }
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
