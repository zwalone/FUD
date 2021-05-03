import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import FavoriteIcon from '@material-ui/icons/Favorite';
import SearchIcon from '@material-ui/icons/Search';

export default function BottomNavigationBar({ onChange }) {
    const classes = useStyles();
    const [value, setValue] = React.useState("favorites");

    const handleChange = (event, newValue) => {
        setValue(newValue)
        onChange(event, newValue)
    };

    return (
        <BottomNavigation value={value} onChange={handleChange} className={classes.root}>
            <BottomNavigationAction label="Favorites" value="favorites" icon={<FavoriteIcon />} classes={{ label: classes.label, root: classes.button, selected: classes.selected}}/>
            <BottomNavigationAction label="Search" value="search" icon={<SearchIcon />} classes={{ label: classes.label, root: classes.button, selected: classes.selected}} />
        </BottomNavigation>
    );
}

const useStyles = makeStyles({
    root: {
        position: 'absolute',
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