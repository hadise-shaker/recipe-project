<script setup>
import Header from '../components/layout/Header.vue'
import Banner from '../components/layout/Banner.vue'
import CategoriesSection from '../components/CategoriesSection.vue'
import RecipeCardList from '../components/RecipeCardList.vue'
import { onMounted, ref } from 'vue'
import { recipeApi } from '../utils/api'

const recipe = ref({})

const showRecipeDetail = async () => {
  try {
    const detailedRecipe = await recipeApi.fetchBannerRecipeDetail()
    if (detailedRecipe) {
      console.log('Detailed Recipe ID:', detailedRecipe)
    }
  } catch (err) {
    console.error('Error fetching recipe details:', err)
  }
}

onMounted(async () => {
  recipe.value = await recipeApi.getBannerDetail()
})
</script>

<template>
  <main>
    <Header />
    <div class="max-w-[1280px] m-auto">
      <Banner :recipe="recipe" @showRecipeDetail="showRecipeDetail" />
      <CategoriesSection class="mt-24"></CategoriesSection>
      <RecipeCardList></RecipeCardList>
    </div>
  </main>
</template>
