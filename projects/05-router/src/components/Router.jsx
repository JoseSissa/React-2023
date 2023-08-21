import { useState, useEffect } from 'react'
import { Page404 } from '../pages/404';
import { EVENTS } from '../const';
import { match } from 'path-to-regexp';

export function Router ({ routes = [], defaulComponent: DefaulComponent = () => (<Page404 />) }) {
    const [currentPath, setCurrentPath] = useState(window.location.pathname);

    useEffect(() => {
        const onLocationChange = () => {
        setCurrentPath(window.location.pathname)
        }
        
        window.addEventListener(EVENTS.PUSHSTATE, onLocationChange)
        window.addEventListener(EVENTS.POPSTATE, onLocationChange)
        
        return () => {
        window.removeEventListener(EVENTS.PUSHSTATE, onLocationChange)
        window.removeEventListener(EVENTS.POPSTATE, onLocationChange)
        }
    }, [currentPath]);

    let routeParams = {}

    const Page = routes.find(elem => {
        if(elem.path === currentPath) return true

        const matchUrl = match(elem.path, { decode: decodeURIComponent })
        const matched = matchUrl(currentPath)
        if(!matched) return false

        routeParams = matched.params
        return true
    })?.component

    return Page 
        ? <Page routeParams={routeParams} /> 
        : <DefaulComponent routeParams={routeParams} />
}