import useLottieAnimation from '../../hooks/useLottieAnimation';

export const LottieComponent = ({ animationData, renderer }) => {
    // Se obtiene la referencia al contenedor usando el hook useLottieAnimation
    const container = useLottieAnimation(animationData, renderer)

    // Se renderiza el contenedor con la animación
    return <div className="container" ref={container}></div>
}
