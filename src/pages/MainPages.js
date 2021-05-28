import React, { Fragment, useState } from 'react';
import BottomNavigationBar from '../components/BottomNavigation';
import FavoritePage from './FavoritePage';
import SearchPage from './SearchPage';

export default function MainPages () {
    const pathname = window.location.pathname;
    const [value, setValue] = useState(pathname);

    return (
        <Fragment>
            { value === "/search" ? <SearchPage/> : <FavoritePage/> }
            <BottomNavigationBar onChange={(_, newValue) => setValue(newValue)} pathname={pathname}/>
        </Fragment>
    )
}