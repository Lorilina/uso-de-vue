<template>
    <div class="galeria-contenedor">
      <div class="galeria_ima-chica">
        <img
          v-for="(url, index) in imageUrls"
          :key="index"
          :src="url"
          alt="Miniatura"
          @click="mostrarImagenCompleta(url)"
        />
      </div>
      <div
        class="galeria_ima-normal"
        v-if="imagenSeleccionada"
        @click="cerrarImagen"
      >
        <img :src="imagenSeleccionada" alt="Imagen completa" />
        <button id="btn-cerrar" @click.stop="cerrarImagen">Cerrar</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        imageUrls: [
          "https://fakeimg.pl/600x400",
          "https://fakeimg.pl/600x400",
          "https://fakeimg.pl/600x400",
          "https://fakeimg.pl/600x400",
          "https://fakeimg.pl/600x400",
          "https://fakeimg.pl/600x400"
        ],
        imagenSeleccionada: null
      };
    },
    methods: {
      mostrarImagenCompleta(url) {
        this.imagenSeleccionada = url;
      },
      cerrarImagen() {
        this.imagenSeleccionada = null;
      }
    }
  };
  </script>
  
  <style>
  body {
    font-family: Arial, Helvetica, sans-serif;
    text-align: center;
  }
  
  main {
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #f1ffa1;
  }
  
  .galeria-contenedor {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .galeria_ima-chica {
    display: flex;
    gap: 10px;
    margin-top: 20px;
  }
  
  .galeria_ima-chica img {
    width: 100px;
    height: 100px;
    cursor: pointer;
  }
  
  .galeria_ima-normal {
    display: flex;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    justify-content: center;
    align-items: center;
    z-index: 1000;
  }
  
  .galeria_ima-normal img {
    max-width: 90%;
    max-height: 80vh;
  }
  
  #btn-cerrar {
    margin-top: 10px;
    padding: 10px 20px;
    cursor: pointer;
    position: absolute;
    top: 20px;
    right: 20px;
    background-color: #fff;
    border: none;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }
  </style>
  