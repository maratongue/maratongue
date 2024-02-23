import { parseCookies } from '#lib/web/utils/cookies'
import type { PageContext } from 'vike/types'
import { DEFAULT_COLOR_SCHEME, parseColorScheme } from '../utils'

function onTheme(c: PageContext) {
  const cookies = parseCookies(c.cookies)
  const cookie = cookies.theme

  const { primary, secondary } = parseColorScheme(
    c.config.theme?.colorScheme || DEFAULT_COLOR_SCHEME,
  )
  const themeClass = (cookie || primary).replace('light', '')

  const compoundScheme: any = {
    light: 'light dark',
    dark: 'dark light',
  }
  const colorScheme = secondary
    ? compoundScheme[cookie || primary]
    : cookie || primary

  return { themeClass, colorScheme }
}

export default onTheme