<script setup lang="ts">
import { t } from "@psitta/vue"
import { course } from "../../../constants/course"
import { learnStore } from "../../../store"

definePageMeta({
  middleware: "premium",
  layout: "app",
})
</script>

<template>
  <div class="p-8">
    <h1 class="text-4xl mb-6">
      {{ t('Sections') }}
    </h1>

    <div class="grid gap-4 grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
      <div v-for="(section, i) in course.sections" :key="i" class="card bg-slate-300 shadow-xl">
        <div class="card-body">
          <h2 class="card-title">
            {{ section.name }}
          </h2>
          <p>{{ section.description }}</p>

          <template v-if="learnStore.currentSection === section.slug">
            <progress class="progress mb-2 mt-6 progress-warning w-full" value="35" max="100" />
          </template>

          <div class="card-actions justify-end">
            <button class="btn btn-primary btn-ghost">
              {{ t('See details') }}
            </button>

            <template v-if="learnStore.currentSection === section.slug">
              <A href="/explore" class="btn btn-primary">
                {{ t('Continue') }}
              </A>
            </template>

            <template v-if="learnStore.currentSection !== section.slug">
              <button class="btn btn-warning btn-outline">
                {{ t('Skip to here') }}
              </button>
            </template>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
