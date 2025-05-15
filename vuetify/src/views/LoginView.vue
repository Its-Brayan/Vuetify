<template>
  <v-container fluid>
    <v-overlay :model-value="isloading" class="align-center justify-center">
         <v-progress-circular indeterminate color="white" v-if="isloading"></v-progress-circular>
      
    </v-overlay>
        <v-row justify="center">
            <v-col cols="4">
    <v-card class="pa-4 mx-auto" >
        <v-card-item>
            <v-card-title class="text-center">Login here</v-card-title>

   
    <v-form @submit.prevent="submit">
      <v-text-field
        v-model="form.email"
        label="Email" variant="solo"
        :rules="[rules.required,rules.email]"
       prepend-inner-icon="mdi-email"></v-text-field>
      <v-text-field v-model="form.password" 
      rules:="[rules.required]" label="password" type="password" variant="solo" prepend-inner-icon="mdi-key"></v-text-field>
      <v-checkbox
            v-model="form.remember"
            color="red"
            label="remember Me"
            
            hide-details
          ></v-checkbox>
      <v-btn type="submit" color="red-darken-1" block class="mt-2">
        
     Submit
    </v-btn>
   
    </v-form>

</v-card-item>
<v-card-action>
    <div class="mx-4">
    <v-btn block to="/register" >Register</v-btn>
    </div>
</v-card-action>
</v-card>
</v-col>
</v-row>
</v-container>
</template>
<script setup>
  import { ref } from 'vue'
  const isloading=ref(false)
 const form =ref({

    email:"",
    password:"",
    remember:false
 });
 function submit(){
   
  if(form.value.email===""){
    return;
  }
  else{
     isloading.value = true;
  }
    setTimeout(() => {
        isloading.value= false;
           alert(JSON.stringify(form.value));
    }, 3000);
 
 }
  const rules = {
    required: value => !!value || 'Required.',
  
    email: value => {
      const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      return pattern.test(value) || 'Invalid e-mail.'
    },
  }

</script>