import { useEffect, useState } from 'react'

function App() {
  const [enabled, setEnabled] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0});

  useEffect(() => {
    const handleMove = (e) => {
      const { clientX, clientY } = e
      setPosition({ x: clientX, y: clientY })
    }

    if(enabled) {
      window.addEventListener('pointermove', handleMove)
    }
    // El useEffect necesita limpiar la suscripciones ya que no lo hace de forma automática
    // Este return se ejecutará cada vez que el componente se desmonte o cuando el array de dependencias cambie, antes de ejecutar de nuevo el efecto
    // Así nos asegurams que empieze de cero las suscripciones cada vez que se ejecuta el efecto
    // cleanup:
    // -> cuando el componente se desmonta
    // -> cuando cambian las dependencias, antes de ejecutar
    //    el efecto de nuevo
    return () => { // cleanup method
      window.removeEventListener('pointermove', handleMove)
    }
  }, [enabled]);

  const handleClick = () => {
    setEnabled(!enabled)
  }

  return (
    <>
      <div style={{
          position: 'absolute',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          border: '1px solid #fff',
          borderRadius: '50%',
          opacity: 0.8,
          pointerEvents: 'none',
          left: -25,
          top: -25,
          width: 50,
          height: 50,
          transform: `translate(${position.x}px, ${position.y}px)`
        }}
      />
      <button onClick={handleClick}>
        {enabled ? 'Desactivar' : 'Activar'}
      </button>
    </>
  )
}

export default App
