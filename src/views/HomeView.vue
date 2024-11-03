<script setup>
import Header from '../components/layout/Header.vue'
import Banner from '../components/layout/Banner.vue'
import { ref, onMounted, computed } from 'vue'
import axios from 'axios'
const apiKey = '267a2656ba8448a3875d552ac67076ac'
const recipe = ref({})
const error = ref(null)
const loading = ref(true)

// Function to fetch recipes from Spoonacular API
const getRandomRecipe = async () => {
  try {
    let hasImage = false // Flag to check if the recipe has an image
    while (!hasImage) {
      // Loop until we find a recipe with an image
      const response = await axios.get(
        `https://api.spoonacular.com/recipes/random?apiKey=${apiKey}&number=1`,
      )
      recipe.value = response.data.recipes[0]
      hasImage = !!recipe.value.image
    }
  } catch (err) {
    error.value = 'Failed to fetch recipes.'
  } finally {
    loading.value = false
  }
}

const shortDescription = computed(() => {
  if (recipe.value && recipe.value.summary) {
    const fullDescription = recipe.value.summary
    return fullDescription.length > 100
      ? fullDescription.slice(0, 100) + '...'
      : fullDescription
  }
  return ''
})

// Call fetchRecipes when the component is mounted

onMounted(() => {
  getRandomRecipe()
})
</script>

<template>
  <main>
    <Header />
    <Banner
      :title="recipe?.title"
      :description="shortDescription"
      :tag="'Hot Recipe'"
      :time="`${recipe?.readyInMinutes} Minutes`"
      :category="recipe.dishTypes ? recipe.dishTypes[0] : 'Unknown'"
      :imageUrl="recipe?.image"
    />
  </main>
</template>
