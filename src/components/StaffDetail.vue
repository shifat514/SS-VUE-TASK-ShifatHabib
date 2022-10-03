<template>
  <v-container>
    <v-layout col wrap ma-3 justify-content-center align-self-center >
        <v-flex xs5 sm6 col>
            <v-card>
              <v-layout>
                <v-flex pa-5>
                  <v-img xs1 max-width="300px" :src="staff.image"></v-img>
                </v-flex>
                
                <v-flex class="text-left">
                  <v-card-title  ></v-card-title>
                  <h3 class="white--text">Name: {{staff.name}}</h3>
                  <v-card-text class="text-left">
                    <h3 class="white--text">Email: {{staff.email}}</h3>
                  <h3 class="white--text">Phone Number{{staff.phone}}</h3>
                  </v-card-text>
                 
                </v-flex>
                
              </v-layout>
                

                 <v-card-text>
            
            <v-btn elevation="4"  class="btnInfo" route to="/allstaffs" large mb-4>Go Back</v-btn>
                 </v-card-text>
                 
            </v-card>
        </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
    props:['index'],
    methods:{
        removeStaff(index){
        this.$store.dispatch('removeStaff',index);
      }
    },
    computed:{
    staff(){
        return this.$store.state.staffList[this.index];
    }
}
}
</script>

<style>
.btnInfo{
  background-color: rgb(234, 235, 249) !important;
    }
  .btnInfo:hover{
  background-color: rgb(35, 40, 92) !important;
  color:white;
  }
</style>