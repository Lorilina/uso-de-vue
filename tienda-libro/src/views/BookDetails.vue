<template>
    <div>
      <h1>Detalles del Libro</h1>
      <div v-if="book">
        <h2>{{ book.title }}</h2>
        <img :src="book.image" :alt="book.title" class="img-fluid">
        <p>{{ book.description }}</p>
        <router-link :to="`/catalog/${book.id}/reviews`" class="btn btn-secondary">Ver Reseñas</router-link>
      </div>
      <router-view></router-view>
    </div>
  </template>
  
  <script>
  export default {
    name: "BookDetails",
    data() {
      return {
        books: [
          { id: 1, title: 'Kafka en la orilla', description: 'Una novela de Haruki Murakami.', image: 'https://static-1.ivoox.com/audios/7/3/6/3/7381525153637_LG.jpg' },
          { id: 2, title: 'La vida secreta de los gatos', description: 'Una novela de Haruki Murakami.', image: 'https://images.cdn1.buscalibre.com/fit-in/360x360/cd/50/cd5014ef8d4b76939aae425d8bab1abe.jpg' },
          { id: 3, title: 'Impedimenta, soy un gato.', description: 'Una novela de Natsume Soseki.', image: 'https://images.cdn2.buscalibre.com/fit-in/360x360/61/b9/61b9c156ea9525f1931333032daca3d3.jpg' },
          // Añade más libros aquí
        ],
        book: null
      }
    },
    created() {
      const bookId = this.$route.params.id;
      this.book = this.books.find(book => book.id === parseInt(bookId));
    }
  }
  </script>
  