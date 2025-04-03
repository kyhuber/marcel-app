<template>
  <div class="dashboard">
    <div class="nutrition-summary">
      <h1>Marcel Nutrition Tracker</h1>
      
      <div class="daily-stats">
        <div class="stat-card">
          <h3>Calories</h3>
          <p>{{ dailyCalories }} cal</p>
        </div>
        <div class="stat-card">
          <h3>Protein</h3>
          <p>{{ dailyProtein }}g</p>
        </div>
      </div>

      <nutrition-dashboard></nutrition-dashboard>
      <voice-recorder></voice-recorder>
    </div>
  </div>
</template>

<script>
import NutritionDashboard from '@/components/NutritionDashboard.vue'
import VoiceRecorder from '@/components/VoiceRecorder.vue'
import { db, auth } from '@/firebase'

export default {
  name: 'Dashboard',
  components: {
    NutritionDashboard,
    VoiceRecorder
  },
  data() {
    return {
      dailyCalories: 0,
      dailyProtein: 0
    }
  },
  mounted() {
    this.fetchDailyNutrition()
  },
  methods: {
    async fetchDailyNutrition() {
      const today = new Date()
      today.setHours(0, 0, 0, 0)

      try {
        const snapshot = await db.collection('meals')
          .where('userId', '==', auth.currentUser.uid)
          .where('timestamp', '>=', today)
          .get()

        snapshot.forEach(doc => {
          const mealData = doc.data()
          this.dailyCalories += mealData.calories || 0
          this.dailyProtein += mealData.protein || 0
        })
      } catch (error) {
        console.error('Error fetching daily nutrition:', error)
      }
    }
  }
}
</script>

<style scoped>
.dashboard {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
}

.nutrition-summary {
  text-align: center;
}

.daily-stats {
  display: flex;
  justify-content: space-around;
  margin: 20px 0;
}

.stat-card {
  background-color: #f4f4f4;
  border-radius: 8px;
  padding: 15px;
  width: 40%;
}

.stat-card h3 {
  margin-bottom: 10px;
  color: #333;
}

.stat-card p {
  font-size: 1.5em;
  font-weight: bold;
  color: #007bff;
}
</style>