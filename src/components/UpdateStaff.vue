<template>
    <div>
      <v-container>
        <v-layout>
          <v-flex xs12 sm6 offset-sm3>
            <h2>Update Staff</h2>
          </v-flex>
        </v-layout>
        <v-layout row>
          <v-flex xs12 sm6 offset-sm3>
            <form class="mt-6" >
              <v-layout row>
                <v-flex xs12 >
                  <v-text-field
                  name="name"
                  label="Enter Name"
                  id="name"
                  v-model="StaffList.name"
                  required
                  >     
                  </v-text-field>
              </v-flex>
              </v-layout>
              <v-layout row>
                <v-flex xs12 >
                  <v-text-field
                  name="email"
                  label="Enter Email"
                  id="email"
                  v-model="StaffList.email"
                >
            </v-text-field>
              </v-flex>
              </v-layout>
              <v-layout row>
                <v-flex xs12 >
                  <v-text-field
                  name="phone"
                  label="Enter phone number"
                  id="phone"
                  v-model="StaffList.phone"
                ></v-text-field>
                <v-btn @click="addStaffs" class="btnInfo">add</v-btn>
              </v-flex>
            </v-layout>
            </form>
          </v-flex>      
        </v-layout> 
      </v-container>
    </div>
  </template>
  
  <script>
  export default {
    props:['index'],
      computed:{
      StaffList(){
         return this.$store.state.staffList[this.index]
    },
    methods:{
        
    }
   
      },
    
        // addStaffs(){
        //   console.log(this.name);
        //   const staffData={
        //     name: this.name,
        //     email: this.email,
        //     phone:this.phone
        //   };
        //   console.log(staffData.name);
        //   this.$store.dispatch('addStaffs',staffData);
        // },
  
        // removeStaff(index){
        //    this.$store.dispatch('removeStaff',index);
        // }
        
  }
  </script>
  
  <style>
  ul{
  
    list-style-type:none;
  }
  
  
  </style>