<script setup lang="ts">
import Item from "./Item.vue"
import type { MenuItem as MenuItemType } from "./types"

defineProps<{
  items: MenuItemType[]
}>()

function closeMenu() {
  const elem = document.activeElement as any

  if (elem)
    elem?.blur()
}
</script>

<template>
  <ul tabindex="0" class="rounded-box w-full divide-y divide-base-200">
    <li v-for="item in items" :key="item.id" class="group" @click="closeMenu">
      <div
        class="rounded-lg hover:bg-base-200"
      >
        <Item :is="item" />
      </div>
    </li>
    <slot name="footer" />
  </ul>
</template>
