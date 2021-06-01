// Custom App Bar with a 'Recipes' title and clickable SearchIcon,
// which is responsible for showing Search Bar. The component has
// been implemented on the basis of: https://material-ui.com/components/app-bar/

import React, { useRef, useState } from 'react';
import { IconButton, AppBar, Toolbar, Typography, InputBase, makeStyles } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import CloseIcon from '@material-ui/icons/Close';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

export default function CustomAppBar({ onSearch, canSearch }) {
    const styles = useStyles();
    const [isSearching, setIsSearching] = useState(false);
    const [canClear, setCanClear] = useState(false);
    
    // Searchbar's value:
    const searchBarInput = useRef('');

    // Reacting for clicking search button in search bar:
    const searchButtonEvent = () => onSearch(searchBarInput.current.value);

    // Handle with clicking "Enter":
    const keyPress = (e) => {
        if (e.keyCode === 13) {
            e.target.blur();
            onSearch(searchBarInput.current.value);
        }
    }

    return (
        <div className={styles.root}>
            <AppBar position='static' className={styles.appBar}>
            {isSearching 
            ?
            <Toolbar> 
                <IconButton className={styles.backButton} 
                            onClick={() => { 
                                setIsSearching(false); 
                                setCanClear(false);
                                }}>
                    <ArrowBackIcon/>
                </IconButton>
                {/* Searchbar */}
                <div className={styles.searchBar}>
                    {/* Search */}
                    <IconButton className={styles.searchBarButton} 
                                onClick={searchButtonEvent}>
                        <SearchIcon/>
                    </IconButton>
                    {/* Input */}
                    <InputBase placeholder='Search for recipe'
                               inputRef={searchBarInput}
                               onChange={(input) => setCanClear(input.target.value.length > 0)}
                               className={styles.searchBarInput}
                               onKeyDown={keyPress}/>
                    {/* Clear */}
                    {canClear
                    ? 
                    <IconButton className={styles.searchBarButton} 
                                onClick={() => { 
                                    searchBarInput.current.value = ''; 
                                    setCanClear(false);
                                }}>
                        <CloseIcon/>
                    </IconButton>
                    :
                    <></>
                    }
                </div>
            </Toolbar>
            :
            <Toolbar> {/* Title + button */}
                <Typography className={styles.title}>Recipes</Typography>
                {canSearch &&
                <IconButton className={styles.searchButton} 
                            onClick={() => { setIsSearching(true); }}>
                    <SearchIcon/>
                </IconButton>
                }
            </Toolbar>
            }
            </AppBar>
        </div>
    );
}

const useStyles = makeStyles({
    // Both variants:
    root: {
        position: 'sticky',
        top: 0,
        zIndex: 9999,
    },
    appBar: { 
        backgroundColor: '#6200EE', 
    },

    // AppBar variant:
    title: { 
        width: '100%', 
        textAlign: 'left', 
        color: 'rgba(255, 255, 255, 0.75)',
        fontSize: '1.25em',
        userSelect: 'none',
    },
    searchButton: { 
        padding: 0, 
        color: 'rgba(255, 255, 255, 0.75)',
    },

    // SearchBar variant:
    backButton: {
        paddingLeft: 0, 
        color: 'rgba(255, 255, 255, 0.75)',
    },
    searchBar: { 
        borderRadius: 4, 
        backgroundColor: 'rgba(255, 255, 255, 0.75)', 
        width: '100%', 
        display: 'flex',
    },
    searchBarButton: { 
        paddingTop: 0, 
        paddingBottom: 0, 
        paddingLeft: '1%', 
        paddingRight: '1%',
        color: 'rgba(0, 0, 0, 0.75)',
    },
    searchBarInput: {
        width: '100%',
        fontSize: '1.25em',
        lineHeight: '1.5em',
    },
});
  