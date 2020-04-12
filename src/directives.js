import Vue from "vue";

// Hook Functions

//Make Bold Custom Directive ( v-bold ) 

// Vue.directive('bold',{
//   bind: function(el) {
//   el.style.fontWeight='bold';
//  }
// });

// Make Dynamyc Font size Custom Directive  ( v-format ="40" )
  // 

  Vue.directive( "format",{
    bind: function(el, binding){
     el.style.fontSize = binding.value + "px";
     console.log(`Directive Name => $(binding.name)`);
     console.log(`Directive Value => $(binding.value)`);
 
     // Bold Modifier ( v-format.bold ="40" )
     if(binding.modifiers.bold){  
       el.style.fontWeight ="Bold";
     }
 
     // Orange  Modifier  (v-format.orange ="60")
     if(binding.modifiers.orange){  
       el.style.color ="orange";
     }
 
    }
 });
 