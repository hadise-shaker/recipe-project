import { ref } from 'vue'
import axios from 'axios'

export function useRecipe(apiKey) {
  const recipe = ref({})
  const error = ref(null)
  const loading = ref(true)

  const getBannerDetail = async () => {
    try {
      const response = await axios.get(
        `https://api.spoonacular.com/recipes/646870/information?includeNutrition=false&apiKey=${apiKey}`,
      )
      recipe.value = response.data
    } catch (err) {
      error.value = 'Failed to fetch recipes.'
    } finally {
      loading.value = false
    }
  }

  const fetchBannerRecipeDetail = async () => {
    try {
      const response = await axios.get(
        `https://api.spoonacular.com/recipes/646870/analyzedInstructions?apiKey=${apiKey}`,
      )
      if (response.data) {
        return response.data
      } else {
        error.value = 'No recipes found for the given query.'
      }
    } catch (err) {
      error.value = 'Failed to fetch recipe details.'
    }
  }

  return { recipe, error, loading, getBannerDetail, fetchBannerRecipeDetail }
}
