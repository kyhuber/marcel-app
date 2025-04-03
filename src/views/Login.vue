<template>
    <div class="login-container">
      <div class="login-card">
        <h2>Marcel Nutrition Tracker</h2>
        <button @click="signInWithGoogle" class="google-signin">
          Sign in with Google
        </button>
        
        <p v-if="error" class="error-message">{{ error }}</p>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import { useRouter } from 'vue-router'
  import { 
    getAuth, 
    signInWithPopup, 
    GoogleAuthProvider 
  } from 'firebase/auth'
  
  // Setup reactive variables
  const error = ref(null)
  const router = useRouter()
  
  const signInWithGoogle = async () => {
    const auth = getAuth()
    const provider = new GoogleAuthProvider()
    
    try {
      const result = await signInWithPopup(auth, provider)
      
      error.value = null
      router.push('/dashboard')
    } catch (err) {
      console.error('Login error', err)
      
      error.value = err.message || 'An error occurred during login'
    }
  }
  </script>
  
  <style scoped>
  .login-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #f0f2f5;
  }
  
  .login-card {
    background-color: white;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    padding: 30px;
    text-align: center;
    width: 300px;
  }
  
  .google-signin {
    background-color: #4285F4;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
    margin-top: 20px;
    transition: background-color 0.3s ease;
  }
  
  .google-signin:hover {
    background-color: #357ae8;
  }
  
  .error-message {
    color: red;
    margin-top: 15px;
    font-size: 14px;
  }
  </style>