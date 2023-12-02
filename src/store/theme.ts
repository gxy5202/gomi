import { atom } from 'nanostores'

export enum ThemeType {
    DARK = 'dark',
    LIGHT = 'light'
}

export type Theme = 'dark' | 'light';

export const $themeState = atom<Theme>('dark');