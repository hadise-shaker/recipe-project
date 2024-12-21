import axios from 'axios'
import { API_CONFIG, BANNER_RECIOE_ID } from '../config/api.config'

const api = axios.create({
  baseURL: API_CONFIG.BASE_URL,
  params: {
    apiKey: API_CONFIG.SPOONACULAR_API_KEY,
  },
})

export const recipeApi = {
  async getRandomRecipe() {
    try {
      const response = await api.get('/random', {
        params: { number: 1 },
      })
      return response.data.recipes[0]
    } catch (error) {
      if (axios.isAxiosError(error) && error.response?.status === 401) {
        console.error(
          'Invalid or missing API key. Please check your .env configuration.',
        )
      }
      throw error
    }
  },

  async complexSearch(category: string, number: number) {
    try {
      const response = await api.get('/complexSearch', {
        params: {
          query: category || null,
          number: number || 6,
          addRecipeInformation: true,
        },
      })
      return response.data.results
    } catch (error) {
      if (axios.isAxiosError(error) && error.response?.status === 401) {
        console.error(
          'Invalid or missing API key. Please check your .env configuration.',
        )
      }
      throw error
    }
  },

  async getRecipeDetails(id: number) {
    try {
      const response = await api.get(`/${id}/information`)
      return response.data
    } catch (error) {
      if (axios.isAxiosError(error) && error.response?.status === 401) {
        console.error(
          'Invalid or missing API key. Please check your .env configuration.',
        )
      }
      throw error
    }
  },
  async getBannerDetail() {
    try {
      const response = await api.get(
        `/${BANNER_RECIOE_ID}/information?includeNutrition=false`,
      )
      return response.data
    } catch (error) {
      if (axios.isAxiosError(error) && error.response?.status === 401) {
        console.error(
          'Invalid or missing API key. Please check your .env configuration.',
        )
      }
      throw error
    }
  },
  async fetchBannerRecipeDetail() {
    try {
      const response = await api.get(
        `/${BANNER_RECIOE_ID}/analyzedInstructions`,
      )
      return response.data
    } catch (error) {
      if (axios.isAxiosError(error) && error.response?.status === 401) {
        console.error(
          'Invalid or missing API key. Please check your .env configuration.',
        )
      }
      throw error
    }
  },
}
