import { createI18n, localeFrom, browser, formatter } from '@nanostores/i18n'
import { persistentAtom } from '@nanostores/persistent'

export const setting = persistentAtom<string | undefined>('locale', undefined)

export const locale = localeFrom(
  setting,  // User’s locale from localStorage
  browser({ // or browser’s locale auto-detect
    available: ['en', 'zh'],
    fallback: 'en'
  })
)

export const format = formatter(locale)

export const i18n = createI18n(locale, {
  get (code) {
    return fetchJSON(`/translations/${code}.json`)
  }
})