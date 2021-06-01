import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import FavoriteIcon from '@material-ui/icons/Favorite';
import SearchIcon from '@material-ui/icons/Search';
import { Link } from 'react-router-dom';

export default function BottomNavigationBar({ pathname }) {
    const classes = useStyles();

    let p = pathname
    if (pathname === '' || pathname === 'FUD')
        p = 'search'

    return (
        <BottomNavigation value={p} className={classes.root}>
            <BottomNavigationAction component={Link} to={'/search'} label='Search' value='search' icon={<SearchIcon />} classes={{ label: classes.label, root: classes.button, selected: classes.selected }} />
            <BottomNavigationAction component={Link} to={'/favorites'} label='Favorites' value='favorites' icon={<FavoriteIcon />} classes={{ label: classes.label, root: classes.button, selected: classes.selected }} />
        </BottomNavigation>
    );
}

const useStyles = makeStyles({
    root: {
        position: 'sticky',
        bottom: 0,
        width: '100%',
        backgroundColor: '#6200EE',
    },
    button: {
        width: '50%',
        maxWidth: 'none',
        '&$selected': {
            color: 'white',
        },
    },
    label: {
        color: 'white',
    },
    selected: {

    }
});
