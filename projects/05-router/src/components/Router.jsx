import { useState, useEffect } from 'react'
import { Page404 } from '../pages/404';
import { EVENTS } from '../const';

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

    const Page = routes.find(elem => elem.path === currentPath)?.component
    return Page ? <Page /> : <DefaulComponent />
}