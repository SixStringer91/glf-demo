import React, { useMemo } from 'react';
import CmsBlock from './CMSBlock/CmsBlock';
import {
    Routes,
    Route
} from "react-router-dom";
import { ResolveURL } from './resolve-url';
import classes from './main.module.css';
import { ALL, MAIN, PRODUCT } from './routes';
import { Product } from './product';

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