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
                type="email"
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
                <v-btn @click="verifyStaff" class="btnInfo">add staff</v-btn>
            </v-flex>
          </v-layout>
          </form>
          <!-- <v-layout row mt-5>
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
            </v-layout> -->
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

    verifyStaff(){
        const isName=this.name;
        const isEmail=this.email;
        const isNumber=this.phone;
        const isImage=this.image;

        const regexEmail = new RegExp('[a-z0-9]+@[a-z]+\\.[a-z]{2,3}');
        const emailTesting=regexEmail.test(isEmail);

        const regexName = new RegExp('^[A-Za-z]+(\\s*[A-Za-z]+)*$');
        const nameTesting=regexName.test(isName);

        const regexNumber=new RegExp('(^(\\+8801|8801|01))[1|3-9]{1}(\\d){8}$');
        const numberTesting=regexNumber.test(isNumber);
      
      if(nameTesting==true)
      {
        if(emailTesting==true)
        {
          if(numberTesting==true)
          {
            if(isImage !== null && isImage !== '') 
            {
              
              alert('Staff is Added!!');
              this.addstaffs();
            }
            else
            {
              alert('Add image Url!!');
            }
         
          }
          else{
            alert('Phone Number is either invalid or empty! Add Bangladeshi Phone Number.');
          }
          
        }
        else{
          alert('Email is either invalid or empty!');
        }
       
      }
      else{
        alert('Name is either invalid or empty!');
      }

    },
      addstaffs(){
        const staffData={
          name: this.name,
          email: this.email,
          phone:this.phone,
          image:this.image
        };
        this.$store.dispatch('addStaffs',staffData);
        this.$router.push('/allstaffs/');
      },

      removeStaff(index){
         this.$store.dispatch('removeStaff',index);
      },
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