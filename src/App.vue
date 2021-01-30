<template>
  <div class="container">
    <div class="jumbotron">
      <span>
        {{mensaje|suspensivos|mayusculas}}
      </span>
      <hr>
       <span>
        {{ temperatura | aFahrenheit }}
      </span>
      <!--<span v-decorar.negrilla.italico="{familia: 'helvetica', color: 'red'}">Aprende Vue.js Fácilmetne</span>
      <hr>
      <span v-decorar-local:grande.negrilla.italico="{familia: 'helvetica', color: 'red'}">Aprende Vue.js Fácilmetne</span>
      /-->
    </div>
  </div>
    
</template>

<script>
/*export default {
    directives:{
        'decorar-local':{
              bind(el, binding){
            el.style.fontFamily=binding.value.familia
            el.style.color=binding.value.color
            if(binding.arg == 'grande'){
              el.style.fontSize='50px'
            }
            if(binding.arg == 'pequeno'){
              el.style.fontSize='10px'
            }
            if(binding.modifiers['negrilla']){
              el.style.fontWeight='bold'
            }
            if(binding.modifiers['italico']){
              el.style.fontStyle='italic'
            } 
        
          }
    },
  }
}*/

export default {
    data(){
      return {
        mensaje: 'Aprende vue.js fácilmente',
        temperatura: 20
      }
    },
    filters:{
      mayusculas( mensaje ){
        return mensaje.toUpperCase()
      },
      aFahrenheit(temperatura){
        return (9/5* temperatura)+32+'F'
      }
    }
}
</script>

<style>
</style>
