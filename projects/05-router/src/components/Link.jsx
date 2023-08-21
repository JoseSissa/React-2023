import { EVENTS } from "../const"

function navigate (href) {
    window.history.pushState({}, '', href)
    // Crea un evento personalizado
    const navigationEvent = new Event(EVENTS.PUSHSTATE)
    // "Envía" el evento personalizado para que pueda ser escuchado cuando se ejecute esta función
    window.dispatchEvent(navigationEvent)
}

export function Link ({ target, to, ...props }) {
    const handleClick = (e) => {
        // button 0 equivale al click principal o primario, que por lo general es el click izquierdo
        const isMainEvent = e.button === 0
        const isModifiedEvent = e.metaKey || e.altKey || e.ctrlKey || e.shiftKey
        const isManageableEvent = target === undefined || target === '_self'
    
        if(isMainEvent && isManageableEvent && !isModifiedEvent) {
            // Evitamos el comportamiento por defecto de la etiqueta a para evitar que la página se recargue cada que le demos al link
            e.preventDefault()
            navigate(to)
        }
    }
    return (
        <a onClick={handleClick} href={to} target={target} {...props} ></a>
    )
}