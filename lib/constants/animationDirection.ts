export const animationDirection = {
    TOLEFT: 'toLeft',
    TORIGHT: 'toRight',
} as const

export type AnimationDirection = typeof animationDirection[keyof typeof animationDirection]
