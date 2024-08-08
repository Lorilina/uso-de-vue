<template>
  <!--portafolio 1 y 2 están aquí-->
    <div id="application">
      <section class="tareas">
        <input v-model="newTask.title" type="text" id="taskTitle" placeholder="Tarea">
        <input v-model.number="newTask.time" type="number" id="taskTime" placeholder="Horas" min="1" step="1">
        <button @click="addTask" class="addTask button">
          <img class="icon" src="../assets/mas.png" alt="Agregar tarea">
        </button>
      </section>
  
      <section v-if="tasks.length > 0" class="section_tareas">
        <div class="listaTareas">
          <ul>
            <li v-for="(task, index) in tasks" :key="index">
              {{ task.title }} -> {{ task.time }} horas
              <button @click="deleteTask(index)" class="deleteTask button">
                <img class="icon" src="../assets/borrar.png" alt="Borrar tarea">
              </button>
            </li>
          </ul>
        </div>
  
        <section class="tiempo">
          <h2>Tiempo total: {{ totalTime }} horas</h2>
        </section>
      </section>
  
      <section v-else class="no_tareas">
        <h2>No hay tareas por el momento</h2>
      </section>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        tasks: [],
        newTask: {
          title: "",
          time: 0
        }
      }
    },
  
    methods: {
      addTask() {
        const { title, time } = this.newTask;
  
        if (title.trim() !== "" && !isNaN(time) && time > 0) {
          this.tasks.push({ ...this.newTask });
          this.newTask.title = "";
          this.newTask.time = 0;
          localStorage.setItem("tasks", JSON.stringify(this.tasks));
        } else {
          alert("La tarea y el tiempo deben tener un valor correcto");
        }
      },
  
      deleteTask(index) {
        this.tasks.splice(index, 1);
        localStorage.setItem("tasks", JSON.stringify(this.tasks));
      }
    },
  
    computed: {
      totalTime() {
        return this.tasks.reduce((total, task) => total + task.time, 0);
      }
    },
  
    created() {
      const tasks = localStorage.getItem("tasks");
      if (tasks) {
        this.tasks = JSON.parse(tasks) || [];
      }
    }
  }
  </script>
  
  <style>
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap');
  
  #application {
    align-items: center;
    display: flex;
    flex-direction: row;
    font-family: 'Inter', sans-serif;
    justify-content: space-evenly;
  }
  
  #application .tareas {
    align-self: start;
    display: grid;
    grid-template-areas: "title time" "button button";
    justify-items: center;
    margin-block-start: 20px;
    width: 50%;
  }
  
  #application .tareas input {
    border: none;
    border-bottom: 1px solid #ccc;
    font-family: 'Inter', sans-serif;
    font-size: 18px;
    outline: none;
    padding: 5px;
    width: 90%;
  }
  
  #application .tareas #taskTitle {
    grid-area: title;
  }
  
  #application .tareas #taskTime {
    grid-area: time;
  }
  
  #application .tareas .addTask {
    grid-area: button;
    margin-block-start: 20px;
  }
  
  #application .section_tareas {
    align-items: center;
    display: flex;
    flex-direction: row;
    width: 50%;
  }
  
  #application .section_tareas .listaTareas ul {
    list-style: none;
    padding: 0;
    pointer-events: none;
  }
  
  #application .section_tareas .listaTareas ul .deleteTask {
    pointer-events: auto;
  }
  
  #application .section_tareas .listaTareas ul li {
    align-items: center;
    border-radius: 10px;
    border: 1px solid black;
    display: flex;
    justify-content: space-between;
    margin-block: 15px;
    padding: 5px;
    transition: 0.5s;
    width: 400px;
  }
  
  #application .section_tareas .listaTareas ul li:hover {
    background-color: crimson;
    color: white;
    opacity: 0.9;
  }
  
  #application .icon {
    width: 25px;
  }
  
  #application .tiempo {
    align-self: start;
    margin-left: 25px;
    width: 50%;
  }
  
  #application .tiempo h2 {
    text-align: end;
  }
  
  #application .button {
    align-items: center;
    background: none;
    border: none;
    display: flex;
    justify-content: center;
    outline: none;
  }
  
  #application .button:hover {
    cursor: pointer;
  }
  
  @media screen and (max-width: 1920px) {
    #application {
      flex-direction: column;
    }
  
    #application .tareas {
      align-self: center;
      width: 100%;
    }
  
    #application .section_tareas {
      justify-content: center;
    }
  }
  
  @media screen and (max-width: 600px) {
    #application .section_tareas {
      flex-direction: column-reverse;
    }
  
    #application .section_tareas .listaTareas ul li {
      width: max-content;
    }
  
    #application .section_tareas .tiempo {
      margin: 0;
      width: 100%;
    }
  
    #application .section_tareas .tiempo h2 {
      text-align: center;
    }
  }
  
  @media screen and (max-width: 400px) {
    #application .tareas {
      display: flex;
      flex-direction: column;
    }
  }
  </style>
  