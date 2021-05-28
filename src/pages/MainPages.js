import React, { Fragment, useState } from 'react';
import BottomNavigationBar from '../components/BottomNavigation';
import FavoritePage from './FavoritePage';
import SearchPage from './SearchPage';
import {getSegment} from '../utils/urlUtils'

export default function MainPages () {
    const pathname = getSegment(1);

    return (
        <Fragment>
            { pathname === "favorites" ? <FavoritePage/> : <SearchPage/> }
            <BottomNavigationBar onChange={() => {}} pathname={pathname}/>
        </Fragment>
    )
}