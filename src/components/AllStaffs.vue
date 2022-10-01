<template>
    
    <v-container> 
        <div>
            <v-btn  @click="findStaff=true;" plain>View All Staffs</v-btn>
            <v-btn @click="findStaff=false;" plain>View All Admins</v-btn>
        </div>
        <v-tabs>
          <v-tabs-slider color="rgb(35, 40, 92) mb-1"></v-tabs-slider>
          <v-tab href="#tableView">Table View</v-tab>
  
          <v-tab-item value="tableView">
          <v-layout row>
          <v-flex xs12>
            <v-simple-table class="mx-xs-4  mx-sm-6 mx-md-8 mx-lg-10 mx-xl-12">
              <template v-slot:default>
                <thead>
                  <tr >
                    <th class="text-left">Name</th>
                    <th class="text-left">Email</th>
                    <th class="text-left">Phone Number</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style="cursor:pointer"
                    v-for="(staff,index) in employees"
                    :key="index"
                    @click="goToStaff(index)"
                  >
                  <td>
                    <v-img
                            height="30px"
                            width="30px"
                            v-bind:src="staff.image"
                          >
                    </v-img>
                  </td>
                    <td >{{ staff.name }}</td>
                    <td>{{ staff.email }}</td>
                    <td >{{ staff.phone }}</td>
                    <td> <v-btn @click="goToStaff(index)" small>View Details</v-btn></td>
                  </tr>
                </tbody>
              </template>
            </v-simple-table>
          </v-flex>
          </v-layout>
          </v-tab-item>
  
          <v-tab href="#cardView"> Card view </v-tab>
          <v-tab-item value="cardView">
            <v-layout row wrap 
            v-for="(staff,index) in employees" 
            :key="index"
            class="ma-2">
              <v-flex  xs12 sm10 md8 offset-md-2>
                  <v-card color="rgb(35, 40, 92)">
                    <v-container>
                      <v-layout row wrap>
                        <v-flex xs5 sm4 md3>
                          <v-img  class="ma-2"
                            :src="staff.image"
                          >
                          </v-img>
                        </v-flex>
                        <v-flex xs6 sm7>
                          <v-card-title>
                            <div>
                              <h4 class="white--text">{{staff.name}}</h4>
                              <div class="white--text mb-0"><p>{{staff.email}}</p></div>
                              <div class="white--text mb-0"><p>{{staff.phone}}</p></div>
                            </div>
                          </v-card-title>
                          <v-card-text></v-card-text>
                          <v-card-actions>
                            <v-btn
                            v-bind:to="'/staffdetail/' + index"
                          >
                            See Details
                            <v-icon> mdi-chevron-right</v-icon>
                          </v-btn>
                          </v-card-actions>
                        </v-flex>
                      </v-layout>
                    </v-container>
                  </v-card>
              </v-flex>
            </v-layout>
          </v-tab-item>
        </v-tabs>
    </v-container>
  </template>
  
  <script>
  export default {
    data(){
       return{ 
        findStaff:false
     }
    },
    computed: {
    employees(){
        if(this.findStaff==true){
            return this.$store.state.staffList;
        }
        else{
            return this.$store.state.adminList;
        }
    },
    },
    methods:{
      goToStaff(index){
        this.$router.push('/staffdetail/'+index);
      },
     
      
    },


  
  }
  </script>
  
  <style>
   .descriptiontruncate{
     max-width: 15vw;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    
   }
  </style>