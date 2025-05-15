<script setup>
import {RouterView} from 'vue-router'
import {ref} from 'vue'
import {useTheme} from 'vuetify'
const notifications= [
 { title:"Message from A",
   icon:"mdi-email",
   color:"blue"

 },
 {
  title:"Message from B",
  icon:"mdi-email",
  color:"green"
 },
 {
  title:"Message from C",
  icon:"mdi-email",
  color:"yellow"
 },
 {
  title:"Message from D",
  icon:"mdi-email",
  color:"red"
 },
 {
  title:"Message from E",
  icon:"mdi-email",
  color:"purple",

 },
 {
  title:"Message from F",
  icon:"mdi-email",
  color:"orange",
 }
 
];
const darktheme =ref(false);
const theme = useTheme();
function changetheme(){
  darktheme.value =! darktheme.value;
  theme.global.name.value = darktheme.value ? "dark" : "light";
}
</script>

<template>
  <v-app>

 <v-toolbar density="compact">
  <v-app-bar-nav-icon>

  </v-app-bar-nav-icon>
  <v-toolbar-title>

    <RouterLink to="/">Vuetify</RouterLink>
  </v-toolbar-title>
  
  <v-spacer></v-spacer>
  <v-btn icon @click="changetheme">
    <v-icon :icon="darktheme  ? 'mdi-weather-sunny' : 'mdi-weather-night'"></v-icon>
  </v-btn>
  <v-menu transition="slide-x-transition">
      <template v-slot:activator="{ props }">
        <v-btn
          color="primary"
          v-bind="props"
        >
         <v-badge content="6" color="red-darken-2"><v-icon icon="mdi-bell" color="blue-darken-4"></v-icon>
    </v-badge>
        
        </v-btn>
    </template>
      <v-list>
        <v-list-item
          v-for="(item, index) in notifications"
          :key="index"
          :value="index"
        >
          <v-list-item-title >
            <v-icon :icon="item.icon" :color="item.color"></v-icon>
            {{ item.title }}
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
 
   
  <v-btn to="/login" size="small"  variant="outlined" text="Login"></v-btn>
 </v-toolbar>
<v-main>
 <v-fade-transition>
<RouterView/>
 </v-fade-transition>
</v-main>
</v-app>


</template>

