<template>
    <div class="user-registration">
      <form @submit.prevent="registrarUsuario">
        <div>
          <label for="name">Nombre:</label>
          <input type="text" v-model="formData.name" id="name" required />
        </div>
        
        <div>
          <label for="email">Correo:</label>
          <input type="email" v-model="formData.email" id="email" required />
        </div>
        
        <div>
          <label for="password">Clave:</label>
          <input type="password" v-model="formData.password" id="password" required minlength="7" />
        </div>
        
        <div>
          <label>Género:</label>
          <select v-model="formData.gender" required>
            <option disabled value="">Seleccione una opción</option>
            <option value="hombre">Hombre</option>
            <option value="mujer">Mujer</option>
            <option value="no-binario">No Binario</option>
          </select>
        </div>
        
        
        
        <button type="submit">Registrar</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    name: "UserRegistration",
    data() {
      return {
        formData: {
          name: "",
          email: "",
          password: "",
          gender: "",
          agree: false,
          newsletter: "no",
        }
      };
    },
    methods: {
      registrarUsuario() {
        //largo mínimo del pass
        if (this.formData.password.length < 7) {
          alert("La clave debe tener al menos 7 caracteres.");
          return;
        }
        
        console.log("Usuario registrado:", this.formData);
  
        //reinicuio
        this.formData = {
          name: "",
          email: "",
          password: "",
          gender: "",
          agree: false,
          newsletter: "no",
        };
      }
    }
  };
  </script>
  
  <style scoped>
  .user-registration {
    max-width: 400px;
    margin: 0 auto;
    padding: 1em;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  
  .user-registration div {
    margin-bottom: 1em;
  }
  
  .user-registration label {
    display: block;
    margin-bottom: 0.5em;
  }
  
  .user-registration input[type="text"],
  .user-registration input[type="email"],
  .user-registration input[type="password"],
  .user-registration select {
    width: 100%;
    padding: 0.5em;
    box-sizing: border-box;
  }
  
  .user-registration input[type="checkbox"],
  .user-registration input[type="radio"] {
    margin-right: 0.5em;
  }
  
  .user-registration button {
    padding: 0.7em;
    color: #fff;
    background-color: #007BFF;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  .user-registration button:hover {
    background-color: #0056b3;
  }
  </style>
  