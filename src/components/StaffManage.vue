<template>
  <div>
    <v-container>
      <v-layout>
        <v-flex xs12 sm6 offset-sm3>
          <h2>Add New Staff</h2>
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
                v-model="name"
                required>
                </v-text-field>
            </v-flex>
            </v-layout>
            <v-layout row>
              <v-flex xs12 >
                <v-text-field
                name="email"
                label="Enter Email"
                id="email"
                v-model="email"
              ></v-text-field>
            </v-flex>
            </v-layout>
            <v-layout row>
              <v-flex xs12 >
                <v-text-field
                name="phone"
                label="Enter phone number"
                id="phone"
                v-model="phone"
              ></v-text-field>

              <v-text-field
                name="image"
                label="Add image Url"
                id="image"
                v-model="image"
              ></v-text-field>
              <v-btn @click="addStaffs" class="btnInfo">add</v-btn>
            </v-flex>
          </v-layout>
          </form>

          <v-layout row mt-5>
              <v-flex sx12>
                <ul>
                  <li v-for="(staff,index) in staffList" :key="index">Name: {{staff.name}} | Email:{{staff.email}} | Phone:{{staff.phone}}
                    <v-btn small
                      v-bind:to="'/updatestaff/' + index"
                      tag="span">
                        update</v-btn>
                    <v-btn @click="removeStaff(index)" small>Delete</v-btn>
                </li>
                </ul>
              </v-flex>
            </v-layout>
        </v-flex>      
      </v-layout>  
    </v-container>
  </div>
</template>

<script>
export default {
  data(){
    return {
      name:'',
      email:'',
      phone:'',
      image:''
    }
  },
   computed:{
    staffList(){
      return this.$store.state.staffList
    }
   },
   methods:{
      addStaffs(){
        console.log(this.name);
        const staffData={
          name: this.name,
          email: this.email,
          phone:this.phone,
          image:this.image
        };
        this.$store.dispatch('addStaffs',staffData);
      },

      removeStaff(index){
         this.$store.dispatch('removeStaff',index);
      },

      updateStaff(index){
        this.$store.dispatch('updateStaff',index);
      }
      
   }

}
</script>

<style>
ul{

  list-style-type:none;
}


</style>