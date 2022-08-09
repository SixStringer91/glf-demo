import React, { useMemo } from 'react';
import CmsBlock from './CMSBlock/CmsBlock';
import {
    Routes,
    Route
} from "react-router-dom";
import { ResolveURL } from './resolve-url';
import classes from './main.module.css';
import { ALL, MAIN, PRODUCT, SEARCH } from './routes';
import { Product } from './product';
import { SearchResult } from './search-result';

const Main = () => {

    const routes = useMemo(() => [
        {
            path: MAIN,
            component: <CmsBlock />
        },
        {
            path: PRODUCT,
            component: <Product />
        },
        {
            path: ALL,
            component: <ResolveURL />
        },
        {
            path: SEARCH,
            component: <SearchResult />
        }
    ], []);


    const routesComponent = useMemo(() => {
        return routes.map(el => <Route key={`route-${el.path}`} path={el.path} element={el.component} />)
    }, [routes])


    return (
            <main className={classes.main}>
                <Routes>
                    {routesComponent}
                </Routes>
            </main>
    )
}
export default Main;