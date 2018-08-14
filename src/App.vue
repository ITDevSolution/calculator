<template>
  <div id="app">
  <div class="container">
    <div class="card text-center">
      <div class="card-header">
        <ul class="nav nav-pills card-header-pills">
          <li class="nav-item">
            <a class="nav-link active" href="#">Inicio</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Calculator</a>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled" href="#">Disabled</a>
          </li>
        </ul>
      </div>
      <div class="card-body">
        <h3 class="card-title">Aplication Calculator Simple in Vue-CLI</h3>
        <img alt="Vue logo" src="./assets/logo.png">
        <hr>
        <p class="card-text">Desarrollado por ITDEVSOLUTION.NET </p>
      </div>
    </div>
  </div>  

    
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->

  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import Calculator from "./components/Calculator.vue";

export default {
  name: "app",
  components: {
    HelloWorld,
    Calculator
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
