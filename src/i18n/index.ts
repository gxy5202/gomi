import { localeFrom, browser } from '@nanostores/i18n'
import { persistentAtom } from '@nanostores/persistent'
import zh from './zh';
import en from './en';

export const localeSettings = persistentAtom<string>('locale')

export const locale = localeFrom(
  localeSettings,
  browser({
      available: ['en', 'zh'],
      fallback: 'en'
  })
)