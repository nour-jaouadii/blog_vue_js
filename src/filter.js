import Vue from "vue";


// Make Upercase

// Vue.filter("upercase",function(v){
//     return v.toUpperCase();
//    });


// Make Reverse
Vue.filter("reversing",function(v){
    return v
        .split('')
        .reverse()
        .join('');
});

// shorten text 

Vue.filter("shorten", function(value, textLength, suffix){

    return value.substring(0,textLength ) + suffix ;

});