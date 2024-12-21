<template>
  <section class="text-center mb-[100px] w-full p-4">
    <div class="flex justify-between items-center mb-10">
      <span class="text-left text-2xl font-bold">Categories</span>
      <button
        class="bg-main hover:bg-mainHover hover-transition rounded-lg p-3.5 font-semibold text-sm"
      >
        View All Categories
      </button>
    </div>
    <div class="flex gap-5 flex-wrap justify-evenly">
      <router-link
        v-for="category in categories"
        :key="category.id"
        class="flex flex-col items-center cursor-pointer rounded-3xl transition-transform duration-300 transform hover:scale-110 px-8 py-2 pb-7"
        :style="{ background: category.background }"
        :to="{
          name: 'category',
          params: { name: category.name.toLowerCase() },
        }"
      >
        <img
          class="w-20 h-20 object-contain rounded-lg"
          :src="category.image"
          :alt="category.name"
        />
        <p class="mt-10 text-sm font-bold">{{ category.name }}</p>
      </router-link>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { Category } from '../types/recipe'
const categories: Category[] = [
  {
    id: 1,
    name: 'Breakfast',
    image: '/src/assets/img/categories/breakfast.png',
    value: '/breakfast',
    background: 'linear-gradient(180deg, #ffffff, #eef4df)',
  },
  {
    id: 2,
    name: 'Vegan',
    image: '/src/assets/img/categories/vegan.png',
    value: '/vegan',
    background: 'linear-gradient(180deg, #ffffff, #c6efb1)',
  },
  {
    id: 3,
    name: 'Meat',
    image: '/src/assets/img/categories/meat.png',
    value: '/meat',
    background: 'linear-gradient(180deg, #ffffff, #ffd3d0)',
  },
  {
    id: 4,
    name: 'Dessert',
    image: '/src/assets/img/categories/dessert.png',
    value: '/dessert',
    background: 'linear-gradient(180deg, #ffffff, #fde7bb)',
  },
  {
    id: 5,
    name: 'Lunch',
    image: '/src/assets/img/categories/lunch.png',
    value: '/lunch',
    background: 'linear-gradient(180deg, #ffffff, #ffe0c1)',
  },
  {
    id: 6,
    name: 'Chocolate',
    image: '/src/assets/img/categories/chocolate.png',
    value: '/chocolate',
    background: 'linear-gradient(180deg, #ffffff, #ececec)',
  },
]

const goToCategory = () => {
  console.log(`Navigating to: `)
  // If Vue Router is used, uncomment this line:
  // router.push(page);
}
</script>

<style scoped>
.categories-section {
  text-align: center;
  margin-bottom: 50px;
}
.categories {
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
}
.category {
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  transition: transform 0.3s;
}
.category img {
  width: 80px;
  height: 80px;
  object-fit: contain;
  border-radius: 10px;
}
.category p {
  margin-top: 10px;
  font-size: 14px;
  font-weight: bold;
}
.category:hover {
  transform: scale(1.1);
}
</style>
