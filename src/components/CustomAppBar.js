// Custom App Bar with a "Recipes" title and clickable SearchIcon,
// which is responsible for showing Search Bar. The component has
// been implemented on the basis of: https://material-ui.com/components/app-bar/


import React, { useRef, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import CloseIcon from '@material-ui/icons/Close';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';


export default function CustomAppBar(props) {
    // Styles:
    const classes = useStyles();

    // State responsible for displaying correct view 
    // - bar with title and button if false OR searchbar if true:
    const [isSearching, setIsSearching] = useState(false);

    // State responsible for displaying "clear button" 
    // only if there is anything to clear:
    const [canClear, setCanClear] = useState(false);
    
    // Searchbar's value:
    const searchBarInput = useRef("");

    // Reacting for clicking search button in search bar:
    const searchButtonEvent = () => props.search(searchBarInput.current.value);
    
    // Rendering:
    return(
        <div className={classes.root}>
            <AppBar position="static" className={classes.appBar}>
            {isSearching 
            ?
            <Toolbar> 
                    <IconButton className={classes.backButton} 
                                onClick={() => { 
                                    setIsSearching(false); 
                                    setCanClear(false);
                                }}>
                        <ArrowBackIcon/>
                    </IconButton>
                {/* Searchbar */}
                <div className={classes.searchBar}>
                    {/* Search */}
                    <IconButton className={classes.searchBarButton} 
                                onClick={searchButtonEvent}>
                        <SearchIcon/>
                    </IconButton>
                    {/* Input */}
                    <InputBase placeholder="Search for recipe"
                               inputRef={searchBarInput}
                               onChange={(input) => setCanClear(input.target.value.length > 0)}
                               className={classes.searchBarInput}/>
                    {/* Clear */}
                    {canClear
                    ? 
                    <IconButton className={classes.searchBarButton} 
                                onClick={() => { 
                                    searchBarInput.current.value = ""; 
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
                <Typography className={classes.title}>Recipes</Typography>
                <IconButton className={classes.searchButton} 
                            onClick={() => { setIsSearching(true); }}>
                    <SearchIcon/>
                </IconButton>
            </Toolbar>
            }
            </AppBar>
        </div>
    )
}


const useStyles = makeStyles((theme) => ({
    // Both variants:
    root: { flexGrow: 1 },
    appBar: { backgroundColor: '#6200EE' },

    // AppBar variant:
    title: { 
        width: '100%', 
        textAlign: 'left', 
        color: 'rgba(255, 255, 255, 0.75)',
        fontSize: 20,
        userSelect: 'none'
    },
    searchButton: { 
        padding: 0, 
        color: 'rgba(255, 255, 255, 0.75)' 
    },

    // SearchBar variant:
    backButton: {
        paddingLeft: 0, 
        color: 'rgba(255, 255, 255, 0.75)' 
    },
    searchBar: { 
        borderRadius: '4px', 
        backgroundColor: 'rgba(255, 255, 255, 0.75)', 
        width: '100%', 
        display: 'flex'
    },
    searchBarButton: { 
        paddingTop: 0, paddingBottom: 0, 
        paddingLeft: '1%', paddingRight: '1%',
        color: 'rgba(0, 0, 0, 0.75)'
    },
    searchBarInput: {
        width: '100%',
        fontSize: 20,
        lineHeight: 24
    }
  }));
  