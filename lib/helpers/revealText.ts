// ----- Packages -----
import gsap, {Power2} from 'gsap'

// ----- Constants -----
import {animationDirection} from '../constants/animationDirection'

/**
 * Anime l'apparition d'un élément en décalage horizontal.
 *
 * @param element - L'élément à animer (HTMLElement ou null)
 * @param toLeftOrRight - Direction de l'animation (animationDirection.TOLEFT | animationDirection.TORIGHT)
 * @param delay - Délai avant le démarrage de l'animation (en secondes)
 * @param duration - Durée de l'animation (en secondes)
 */
export const revealText = (
    element: HTMLElement | null,
    toLeftOrRight: typeof animationDirection[keyof typeof animationDirection],
    delay: number,
    duration: number
): void => {
    if (!element) return

    const fromX = toLeftOrRight === animationDirection.TOLEFT ? -100 : 100

    const tl = gsap.timeline()
    tl.fromTo(
        element,
        {
            x: fromX,
            opacity: 0,
        } as gsap.TweenVars,
        {
            x: 0,
            opacity: 1,
            ease: Power2.easeOut,
            duration: duration,
            delay: delay,
        } as gsap.TweenVars
    )
    tl.play()
}
