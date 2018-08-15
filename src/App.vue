<template>
  <div id="app">
  <div class="container">
    
    <div class="card text-center">
      <div class="card-header">
        <ul class="nav nav-pills card-header-pills">
          
          <li class="nav-item">

              <router-link to="/HelloWorld" class="nav-link">
              Hello World Vue
              </router-link>

          </li>
          <li class="nav-item">
            <router-link to="/Calculator" class="nav-link">Calculator</router-link>
          </li>
        </ul>
      </div>
    
      <div class="card-body">
        <router-view></router-view>
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
