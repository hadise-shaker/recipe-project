<template>
  <section class="recipe-list-container">
    <h2 class="text-3xl font-bold text-center mb-4">
      Simple and tasty recipes
    </h2>
    <p class="text-gray-500 text-center mb-8">
      Discover quick and delicious recipes for every occasion!
    </p>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <RecipeCard
        v-for="recipe in recipes"
        :key="recipe.id"
        :id="recipe.id"
        :title="recipe.title"
        :image="
          recipesData.find(data => data.id === recipe.id)?.image || recipe.image
        "
        :readyInMinutes="recipe.readyInMinutes"
        :dishType="recipe.dishTypes?.[0]"
      />
    </div>

    <p v-if="error" class="text-red-500 text-center mt-4">{{ error }}</p>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import RecipeCard from '../components/RecipeCard.vue'
import { recipeApi } from '../utils/api'
import { recipesData } from '../constants/recipeListIds.js'

const recipes = ref([])
const error = ref(null)

const fetchRecipes = async () => {
  try {
    const recipePromises = recipesData.map(recipe =>
      recipeApi.getRecipeDetails(recipe.id),
    )
    const recipeResponses = await Promise.all(recipePromises)
    recipes.value = recipeResponses.map(response => response)
  } catch (err) {
    console.error(err)
    error.value = 'Failed to load recipes.'
  }
}

onMounted(async () => {
  fetchRecipes()
})
</script>

<style scoped>
.recipe-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 16px;
}
</style>
