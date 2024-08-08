<template>
    <div>
      <h1>Catálogo de Libros</h1>
      <div class="row">
        <div class="col-md-4" v-for="book in books" :key="book.id">
          <div class="card mb-4">
            <img :src="book.image" class="card-img-top" :alt="book.title">
            <div class="card-body">
              <h5 class="card-title">{{ book.title }}</h5>
              <p class="card-text">{{ book.description }}</p>
              <router-link class="btn btn-primary" :to="`/catalog/${book.id}`">Ver Detalles</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "BookCatalog",
    data() {
      return {
        books: [
          { id: 1, title: 'Kafka en la orilla', description: 'Una novela de Haruki Murakami.', image: 'https://static-1.ivoox.com/audios/7/3/6/3/7381525153637_LG.jpg' },
          { id: 2, title: 'La vida secreta de los gatos', description: 'Una novela de Marta Sanz y Ana Juan.', image: 'https://images.cdn1.buscalibre.com/fit-in/360x360/cd/50/cd5014ef8d4b76939aae425d8bab1abe.jpg' },
          { id: 3, title: 'Impedimenta, soy un gato.', description: 'Una novela de Natsume Soseki.', image: 'https://images.cdn2.buscalibre.com/fit-in/360x360/61/b9/61b9c156ea9525f1931333032daca3d3.jpg' },
          
        ]
      }
    }
  }
  </script>
  