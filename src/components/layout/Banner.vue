<template>
  <div class="flex w-full">
    <div
      class="w-1/2 flex flex-wrap lg:flex-nowrap p-6 lg:p-12 bg-main rounded-es-[30px] rounded-ss-[30px] shadow-md"
    >
      <!-- Left Content Section -->
      <div class="banner-content flex-1 lg:mr-8 space-y-6">
        <Transition
          enter-active-class="animate__animated animate__fadeInDown"
          leave-active-class="animate__animated animate__fadeOutUp"
        >
          <div
            v-if="recipe.title"
            class="bg-white font-semibold px-4 py-2 rounded-full flex items-center space-x-1 w-fit"
          >
            <i class="mdi mdi-script text-amber-700 text-2xl"></i> Hot Recipe
          </div>
        </Transition>

        <Transition
          enter-active-class="animate__animated animate__fadeInLeft"
          leave-active-class="animate__animated animate__fadeOutRight"
        >
          <h1 v-if="recipe.title" class="text-3xl lg:text-4xl font-bold">
            {{ recipe.title || '' }}
          </h1>
        </Transition>

        <Transition
          enter-active-class="animate__animated animate__fadeInLeft"
          leave-active-class="animate__animated animate__fadeOutRight"
        >
          <p
            v-if="shortDescription"
            class="text-gray-600"
            v-html="shortDescription || ''"
          ></p>
        </Transition>

        <Transition
          enter-active-class="animate__animated animate__fadeInLeft"
          leave-active-class="animate__animated animate__fadeOutRight"
        >
          <div
            v-if="recipe.readyInMinutes"
            class="flex items-center !mt-6 space-x-4"
          >
            <span
              class="flex items-center p-2 px-3 bg-[#0000001a] rounded-full"
            >
              <i class="mdi mdi-timer text-xl mr-2"></i>
              <span class="text-sm"
                >{{ recipe.readyInMinutes || '' }} Minutes</span
              >
            </span>
            <span
              class="flex items-center p-2 px-3 bg-[#0000001a] rounded-full capitalize"
            >
              <i class="mdi mdi-silverware-fork-knife text-xl mr-2"></i>
              <span class="text-sm">{{
                recipe.dishTypes ? recipe.dishTypes[0] : ''
              }}</span>
            </span>
          </div>
        </Transition>

        <Transition
          enter-active-class="animate__animated animate__fadeInLeft"
          leave-active-class="animate__animated animate__fadeOutRight"
        >
          <button
            v-if="recipe.readyInMinutes"
            class="bg-black flex items-center p-2 px-6 rounded-xl text-white space-x-2 !mt-14 hover:bg-[#333] hover-transition"
            @click="() => emit('showRecipeDetail', 'Hello from button!')"
          >
            <span class="text-sm">View Recipe</span>
            <i class="mdi mdi-play-circle text-xl mr-2"></i>
          </button>
        </Transition>
      </div>

      <!-- Right Image Section -->
    </div>
    <Transition
      enter-active-class="animate__animated animate__fadeInRight"
      leave-active-class="animate__animated animate__fadeOutLeft"
    >
      <div v-if="recipe.image" class="banner-image mt-6 lg:mt-0 w-1/2">
        <img
          class="shadow-md rounded-ee-[30px] rounded-se-[30px] h-full"
          src="/src/assets/img/main-banner-steak.jpg"
          alt="Recipe Image"
        />
      </div>
    </Transition>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'

const props = defineProps({
  recipe: {
    type: Object,
    required: true,
    default: {},
  },
})

const emit = defineEmits(['showRecipeDetail'])
const shortDescription = computed(() => {
  if (props.recipe && props.recipe.summary) {
    const fullDescription = props.recipe.summary
    return fullDescription.length > 100
      ? fullDescription.slice(0, 100) + '...'
      : fullDescription
  }
  return null
})
</script>

<style>
/* Add any additional styles here if needed */
</style>
