import { useEffect, useRef } from "react"
import Lottie from "lottie-web"

// Hook que carga y destruye una animación de Lottie
const useLottieAnimation = (animationData, renderer) => {
    const container = useRef(null)
    const anim = useRef(null)

    useEffect(() => {
        // Se carga la animación cuando el componente se monta
        anim.current = Lottie.loadAnimation({
            container: container.current,
            renderer: renderer,
            loop: true,
            autoplay: true,
            animationData: animationData,
        })

        // Se destruye la animación cuando el componente se desmonta
        return () => {
            anim.current.stop()
            anim.current.destroy()
        }
    }, [animationData, renderer])

    // Se devuelve una referencia al contenedor donde se renderiza la animación
    return container
}

export default useLottieAnimation
