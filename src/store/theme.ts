import { persistentAtom } from '@nanostores/persistent'

export enum ThemeType {
    DARK = 'dark',
    LIGHT = 'light'
}

export type Theme = 'dark' | 'light';

export function updateTheme(theme: Theme, storage) {
    storage.setItem('theme', theme);
}

export function getTheme(storage) {
    return storage.getItem('theme') ?? ThemeType.DARK;
}