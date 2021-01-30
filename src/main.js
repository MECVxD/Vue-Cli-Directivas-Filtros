import Vue from 'vue'
import App from './App.vue'

Vue.directive('decorar', {
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
})

Vue.filter('suspensivos', function(texto){
  return texto.substring(0, 10)+'...'
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
