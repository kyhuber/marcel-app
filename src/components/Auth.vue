<template>
    <div class="auth">
      <button @click="signInWithGoogle">Sign In with Google</button>
    </div>
  </template>
  
  <script>
  import firebase from 'firebase/app'
  
  export default {
    methods: {
      async signInWithGoogle() {
        const provider = new firebase.auth.GoogleAuthProvider()
        try {
          await firebase.auth().signInWithPopup(provider)
          this.$router.push('/dashboard')
        } catch (error) {
          console.error('Authentication error', error)
        }
      }
    }
  }
  </script>