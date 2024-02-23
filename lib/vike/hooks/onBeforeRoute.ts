import { redirect } from 'vike/abort'
import type { OnBeforeRouteSync } from 'vike/types'
import { DEFAULT_I18N_CONFIG, i18nConfig } from '#lib/i18n/config'
import type { I18nGlobal } from '#lib/i18n/types'
import { detectLocale, detectLocaleClient, extractLocale } from '#lib/i18n/utils'

const onBeforeRoute: OnBeforeRouteSync = (
  c,
): ReturnType<OnBeforeRouteSync> => {
  const { urlWithoutLocale, locale } = extractLocale(c.urlPathname)

  const defaultLocale
    = i18nConfig.defaultLocale || DEFAULT_I18N_CONFIG.defaultLocale

  const i18n: I18nGlobal = {
    urlWithoutLocale,
    url: c.urlPathname,
    locale: locale || defaultLocale,
  }

  if (!locale) {
    const acceptLanguage
      = typeof window === 'undefined'
        ? null
        : detectLocaleClient(navigator.language)?.lang

    const lang = c.acceptLanguage
      ? detectLocale(c.acceptLanguage)?.lang || defaultLocale
      : acceptLanguage || defaultLocale

    if (lang !== defaultLocale) {
      if (i18n.url === urlWithoutLocale)
        throw redirect(`/${lang}${urlWithoutLocale}`)
    }
  }

  return {
    pageContext: {
      urlLogical: urlWithoutLocale,
      i18n,
    },
  } as any
}

export default onBeforeRoute