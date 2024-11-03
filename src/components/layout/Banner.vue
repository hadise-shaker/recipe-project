<template>
  <div class="flex w-full max-w-[1280px] m-auto">
    <div
      class="w-1/2 flex flex-wrap lg:flex-nowrap p-6 lg:p-12 bg-[#E7FAFE] rounded-es-[30px] rounded-ss-[30px] shadow-md"
    >
      <!-- Left Content Section -->
      <div class="banner-content flex-1 lg:mr-8 space-y-6">
        <div
          class="bg-white font-semibold px-4 py-2 rounded-full flex items-center space-x-1 w-fit"
        >
          <i class="mdi mdi-script text-amber-700 text-2xl"></i> {{ tag }}
        </div>
        <h1 class="text-3xl lg:text-4xl font-bold">
          {{ title }}
        </h1>
        <p class="text-gray-600" v-html="description"></p>
        <div class="flex items-center !mt-6 space-x-4">
          <span class="flex items-center p-2 px-3 bg-[#0000001a] rounded-full">
            <i class="mdi mdi-timer text-xl mr-2"></i>
            <span class="text-sm">{{ time }}</span>
          </span>
          <span class="flex items-center p-2 px-3 bg-[#0000001a] rounded-full">
            <i class="mdi mdi-silverware-fork-knife text-xl mr-2"></i>
            <span class="text-sm">{{ category }}</span>
          </span>
        </div>
        <button
          class="bg-black flex items-center p-2 px-6 rounded-lg text-white space-x-2 !mt-14 hover:bg-[#333]"
        >
          <span class="text-sm">View Recipe</span>
          <i class="mdi mdi-play-circle text-xl mr-2"></i>
        </button>
      </div>

      <!-- Right Image Section -->
    </div>
    <div class="banner-image mt-6 lg:mt-0 w-1/2">
      <img
        class="shadow-md rounded-ee-[30px] rounded-se-[30px] h-full"
        :src="imageUrl"
        alt="Recipe Image"
      />
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true,
    default: 'Spicy delicious chicken wings',
  },
  description: {
    type: String,
    required: true,
    default: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
  },
  tag: {
    type: String,
    required: true,
    default: 'Hot Recipe',
  },
  time: {
    type: String,
    required: true,
    default: '30 Minutes',
  },
  category: {
    type: String,
    required: true,
    default: 'Chicken',
  },
  imageUrl: {
    type: String,
    required: true,
    default: '',
  },
})
</script>
