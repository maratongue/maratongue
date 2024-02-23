import { computed } from 'vue'
import { usePageContext } from '#lib/vike/composables/usePageContext'

function useI18n() {
  const c = usePageContext()
  return computed(() => c.i18n || {})
}

export default useI18n