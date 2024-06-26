<script setup lang="ts">
import type { User } from "lucia"
import { useForm } from "vee-validate"
import { useI18n } from "@psitta/vue"
import { useToast } from "~~/layers/ui/composables/useToast"
import { MAX_OBSERVATION_CHARS } from "~/constants/base"

const { t } = useI18n()
const toast = useToast()
const user = useUser()

const form = useForm<{
  observation: User["observation"]
}>({
  initialValues: {
    observation: user.value!.observation,
  },
})

const isOpen = defineModel({ default: false })
const loading = ref(false)

const submit = form.handleSubmit(async () => {
  const data = form.values
  const username = user.value!.username

  loading.value = true

  try {
    await $fetch(`/api/profile/${username}`, {
      method: "patch",
      body: {
        observation: data.observation,
      },
    })

    user.value = { ...user.value!, observation: data.observation }

    toast.success(t("Observation has been updated successfully."))
  }
  catch (e) {
    toast.error(t("An error occurred while updating your observation."))
  }

  loading.value = false
  isOpen.value = false
})
</script>

<template>
  <Modal
    v-model="isOpen"
    :confirm-text="t('Save')"
    :loading="loading"
    @confirm="submit"
  >
    <template #default>
      <h1 class="font-bold text-2xl mb-2 mt-4">
        {{ t("What else would like to share with AI?") }}
      </h1>

      <div class="px-2 pb-2 space-y-2 overflow-y-auto mt-4">
        <Textarea
          class="resize-none"
          path="observation"
          :label="t('Your observation')"
          :rules="
            (v: any) =>
              v?.length <= MAX_OBSERVATION_CHARS
              || t(`It must contain at most ${MAX_OBSERVATION_CHARS} characters`)
          "
          :feedback="true"
        >
          <template #feedback>
            <span
              :class="{
                'text-red-500':
                  (form.values.observation?.length || 0) > MAX_OBSERVATION_CHARS,
              }"
            >
              {{ form.values.observation?.length || 0 }}/{{
                MAX_OBSERVATION_CHARS
              }}
              characters
            </span>
          </template>
        </Textarea>
      </div>
    </template>
  </Modal>
</template>
