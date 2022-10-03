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
                  v-model="staffList.name"
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
                  v-model="staffList.email"
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
                  v-model="staffList.phone"
                ></v-text-field>

                <v-text-field
                  name="image"
                  label="Enter image"
                  id="image"
                  v-model="staffList.image"
                ></v-text-field>
                <v-btn @click="verifyStaff" class="btnInfo">update</v-btn>
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
      
      methods:{
        verifyStaff(){
          
        const isName=this.$store.state.staffList[this.index].name;
        const isEmail=this.$store.state.staffList[this.index].email;
        const isNumber=this.$store.state.staffList[this.index].phone;
        const isImage=this.$store.state.staffList[this.index].image;
        
        const regexEmail = new RegExp('[a-z0-9]+@[a-z]+\\.[a-z]{2,3}');
        const emailTesting=regexEmail.test(isEmail);

        const regexName = new RegExp('^[A-Za-z]+(\\s*[A-Za-z]+)*$');
        const nameTesting=regexName.test(isName);

        const regexNumber=new RegExp('(^(\\+8801|8801|01))[1|3-9]{1}(\\d){8}$');
        const numberTesting=regexNumber.test(isNumber);
      
      if(nameTesting==true )
      {
        if(emailTesting==true)
        {
          if(numberTesting==true)
          {
            if(isImage !== null && isImage !== '') 
            {
              alert('Staff is Updated!!');
              this.$router.push('/allstaffs/');
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
      
      },
      computed:{
        staffList(){
          return this.$store.state.staffList[this.index];
          },
        
      },
  }
  </script>
  
  <style>
  </style>