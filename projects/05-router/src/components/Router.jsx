import { useState, useEffect, Children } from 'react'
import { Page404 } from '../pages/404';
import { EVENTS } from '../const';
import { match } from 'path-to-regexp';

export function Router ({ children, routes = [], defaulComponent: DefaulComponent = () => (<Page404 />) }) {
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

    // De esta forma obtenemos el path y el componente de cada Route sacados del Children importado de react 
    const routesFromChildren = Children.map(children, ({ props, type }) => {
        const { name } = type
        const isRoute = name === 'Route'
        return isRoute ? props : null
    })
    // Lo concatenamos con las rutas que vienen del componente Router, (el objeto de rutas del App.jsx)
    const routesToUse = routes.concat(routesFromChildren)

    const Page = routesToUse.find(elem => {
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