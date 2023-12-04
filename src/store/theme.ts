import { persistentAtom } from '@nanostores/persistent'

export enum ThemeType {
    DARK = 'dark',
    LIGHT = 'light'
}

export type Theme = 'dark' | 'light';

export const $themeState = persistentAtom<Theme>(ThemeType.DARK);