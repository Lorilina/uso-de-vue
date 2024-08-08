<template>
    <div>
      <h1>Reseñas del Libro</h1>
      <ul>
        <li v-for="review in reviews" :key="review.id">{{ review.text }}</li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    name: "BookReviews",
    data() {
      return {
        reviews: [
          { id: 1, text: 'miau miaumiau' },
          { id: 2, text: 'miaumiaumiau' },
          
        ]
      }
    }
  }
  </script>
  