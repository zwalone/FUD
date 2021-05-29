import React, { Fragment } from 'react';
import BottomNavigationBar from '../components/BottomNavigation';
import FavoritePage from './FavoritePage';
import SearchPage from './SearchPage';
import { getPathnameSegment } from '../utils/urlUtils';

export default function MainPages() {
    const pathname = getPathnameSegment(1);

    return (
        <Fragment>
            { pathname === 'favorites' ? <FavoritePage /> : <SearchPage /> }
            <BottomNavigationBar pathname={pathname} />
        </Fragment>
    );
}
