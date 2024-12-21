<template>
  <div
    class="w-[400px] cursor-pointer bg-gray-50 rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105 hover:bg-blue-50"
    @click="goToDetail"
  >
    <img
      :src="image"
      alt="Recipe Image"
      class="w-full h-[17rem] object-cover rounded-3xl"
    />

    <div class="p-4 bg-main">
      <h3 class="text-lg font-bold text-gray-800 mb-2 truncate">
        {{ title }}
      </h3>

      <div class="flex space-x-6 text-sm text-gray-600 mt-10">
        <span class="flex items-center">
          <i class="mdi mdi-timer mr-1 !text-black text-xl"></i>
          {{ readyInMinutes }} Minutes
        </span>
        <span v-if="dishType" class="flex items-center">
          <i class="mdi mdi-silverware-fork-knife mr-1 !text-black text-xl"></i>
          {{ dishType }}
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const props = defineProps({
  id: { type: Number, required: true },
  title: { type: String, required: true },
  image: { type: String, required: true },
  readyInMinutes: { type: Number, required: true },
  dishType: { type: String, required: false },
})

const router = useRouter()

const goToDetail = () => {
  router.push(`/recipe/${props.id}`)
}
</script>
