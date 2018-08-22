<template>
     
     <div class="Calculadora">
          <div class="container">
               <div class="row">
                    <div class="col-md-12">
                         <h1>Calculadora con VueJS</h1>
                    </div>
               </div>
               <div class="row">
                    <div class="col-md-4">
                         
                    </div>
                    <div class="col-md-4 ">
                         <button type="button" class="btn btn-primary btn-lg btn-block">{{ current || '0' }}</button>
                    </div>
                    <div class="col-md-4">

                    </div>
                    
               </div>
               <div class="row">
                    <div class="col-md-4">
                         
                    </div>
                    <div class="col-md-4 btn-group" role="group">
                         <button type="button" class="btn btn-outline-warning btn-lg col-md-4" @click="clear">C</button>
                         <button type="button" class="btn btn-outline-warning btn-lg col-md-4" @click="sign">+/-</button>
                         <button type="button" class="btn btn-outline-warning btn-lg col-md-4" @click="percent">%</button>
                         <button type="button" class="btn btn-outline-warning btn-lg col-md-4" @click="divide">&#247;</button>
                    </div>
                    
                    <div class="col-md-4">

                    </div>
               </div>
               <div class="row">
                    <div class="col-md-4">
                         
                    </div>
                    <div class="col-md-4 btn-group" role="group">
                         <button type="button" class="btn btn-outline-secondary btn-lg col-md-4" @click="append('7')">7</button>
                         <button type="button" class="btn btn-outline-secondary btn-lg col-md-4" @click="append('8')">8</button>
                         <button type="button" class="btn btn-outline-secondary btn-lg col-md-4" @click="append('9')">9</button>
                         <button type="button" class="btn btn-outline-warning btn-lg col-md-4" @click="times">x</button>
                    </div>
                    
                    <div class="col-md-4">

                    </div>
               </div>
               <div class="row">
                    <div class="col-md-4">
                         
                    </div>
                    <div class="col-md-4 btn-group" role="group">
                         <button type="button" class="btn btn-outline-secondary btn-lg col-md-4" @click="append('4')">4</button>
                         <button type="button" class="btn btn-outline-secondary btn-lg col-md-4" @click="append('5')">5</button>
                         <button type="button" class="btn btn-outline-secondary btn-lg col-md-4" @click="append('6')">6</button>
                         <button type="button" class="btn btn-outline-warning btn-lg col-md-4" @click="minus">-</button>
                    </div>
                    
                    <div class="col-md-4">

                    </div>
               </div>
               <div class="row">
                    
                    <div class="col-md-4 btn-group" role="group">
                         
                    </div>
                    <div class="col-md-4 btn-group" role="group" >
                         <button type="button" class="btn btn-outline-secondary btn-lg col-md-4" @click="append('1')">1</button>
                         <button type="button" class="btn btn-outline-secondary btn-lg col-md-4" @click="append('2')">2</button>
                         <button type="button" class="btn btn-outline-secondary btn-lg col-md-4" @click="append('3')">3</button>
                         <button type="button" class="btn btn-outline-warning btn-lg col-md-4" @click="add">+</button>
                    </div>
                    
                    <div class="col-md-4">

                    </div>
                    
               </div>
               
               <div class="row">
                    
                    <div class="col-md-4 btn-group" role="group">
                         
                    </div>
                    <div class="col-md-4 btn-group" role="group" >
                         <button type="button" class="btn btn-outline-secondary btn-lg col-md-7" @click="append('0')">0</button>
                         <button type="button" class="btn btn-outline-secondary btn-lg col-md-3" @click="dot">.</button>
                         <button type="button" class="btn btn-outline-warning btn-lg col-md-3" @click="equal">=</button>
                    </div>
                    
                    <div class="col-md-4">

                    </div>
                    
               </div>
     </div>
          
     </div>
</template>

<script>
export default {
  name: "Calculadora",
  data() {
    return {
        previus: null,
        current: '',
        operator: null,
        operatorClicked: false
    }
  },
  //Metodos
  methods: {
    clear(){
      this.current = "";
    },
    sign(){
      this.current = this.current.charAt(0) === '-' ? this.current.slice(1) : `-${this.current}`;
    },
    percent(){
      this.current = `${parseFloat(this.current) / 100}`;
      
    },
    append(number){
      
      if(this.operatorClicked){
        this.current = '';
        this.operatorClicked = false;
      }
      this.current = `${this.current}${number}`;
    },
    dot(){
      if(this.current.indexOf('.') === -1){
        this.append('.');
      }
    },
    setPrevious(){
      this.previus = this.current;
      this.operatorClicked = true;
    },
    divide(){
      this.operator = (a,b) => a/b;
      this.setPrevious();
    },
    times(){
      this.operator = (a,b) => {
        return a*b;
      }
      this.setPrevious();
    },
    minus(){
      this.operator = (a,b) => a - b;
      this.setPrevious();
    },
    add(){
      this.operator = (a,b) => a+b;
      this.setPrevious();
    },
    equal(){
      this.current = `${this.operator(
        parseFloat(this.current),
        parseFloat(this.previus)
      )}`;
      this.previus = null;
    }

  }
};
</script>

<style>
.Calculadora border{
  /*Estidos del componente*/
  border: 2px solid black;
}
</style>
