import { computed, reactive, ref } from "vue";
import exercises from "./exercises";

export const MAX_LESSON = 5;

export const exercise = ref();

export const currentClass = reactive({
  currentLesson: 0,
});

export const NON_SELECTED = null;
export const select = ref(NON_SELECTED);

export const implementation = computed(() => {
  if (!exercise.value) return undefined;
  const impl = exercises.find((lesson) => lesson.name === exercise.value?.type);
  if (!impl) return undefined;

  return {
    name: impl.name,
  };
});