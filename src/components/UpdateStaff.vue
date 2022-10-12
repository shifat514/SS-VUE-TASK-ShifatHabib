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
              <v-layout col>
                <v-flex xs12 >
                  <v-text-field
                  name="name"
                  label="Enter Name"
                  id="name"
                 :value="staffList.name"
                 v-on:keyup.stop="updateName($event.target.value)"
                  >    
                </v-text-field>
              </v-flex>
              <v-layout>

                <v-btn @click="addName()" class="btnInfo">update Name</v-btn>
              </v-layout>
              </v-layout>
              <v-layout col>
                <v-flex xs12 >
                  <v-text-field
                  name="email"
                  label="Enter Email"
                  id="email"
                
                  :value="staffList.email"
                 v-on:keyup.stop="updateEmail($event.target.value)"
                >
                
            </v-text-field>
              </v-flex>
              <v-layout>

              <v-btn @click="addEmail()" class="btnInfo"> update Email </v-btn>
              </v-layout>
              </v-layout>
              <v-layout col>
                <v-flex xs12 >
                  <v-text-field
                  name="phone"
                  label="Enter phone number"
                  id="phone"
                  :value="staffList.phone"
                 v-on:keyup.stop="updatePhone($event.target.value)"
                ></v-text-field>
              </v-flex>
                <v-layout>
                  <v-btn @click="addPhone()" class="btnInfo">update Number</v-btn>
                </v-layout>
             
                </v-layout> 

                <v-layout>
                  <v-flex xs12>
                <v-text-field
                  name="image"
                  label="Enter image"
                  id="image"
                  v-model="staffList.image"
                ></v-text-field>
                
                <v-btn class="btnInfo" router to="/allstaffs/">Go Back</v-btn>
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
    data(){
    return {
      name:'',
      email:'',
      phone:'',
      image:''
    }
  },
      methods:{

        updateName(name){
          this.name=name;
        },
        addName()
        {
          const regexName = new RegExp('^[A-Za-z]+(\\s*[A-Za-z]+)*$');
          const nameTesting=regexName.test(this.name);
          if(nameTesting==true){
            this.$store.state.staffList[this.index].name=this.name;
            alert('Name is Updated!!');
            console.log(this.$store.state.staffList[this.index].name);
         }
          else{
          alert('Name cannot be invalid or empty!');
         }
         
        },

        updateEmail(email){
          this.email=email;
        },
        addEmail()
        {
          const regexEmail = new RegExp('[a-z0-9]+@[a-z]+\\.[a-z]{2,3}');
        const emailTesting=regexEmail.test(this.email);
          if(emailTesting==true){
            this.$store.state.staffList[this.index].email=this.email;
            alert('Email is Updated!!');
         }
          else{
          alert('Email cannot be invalid or empty!');
         }
         
        },

        updatePhone(phone){
          this.phone=phone;
        },
        addPhone()
        {
          const regexNumber=new RegExp('(^(\\+8801|8801|01))[1|3-9]{1}(\\d){8}$');
          const numberTesting=regexNumber.test(this.phone);
          if(numberTesting==true){
            this.$store.state.staffList[this.index].phone=this.phone;
            alert('Phone Number is Updated!!');
         }
          else{
          alert('Phone number cannot be invalid or empty!');
         }
        },

      //   verifyStaff(){
          
      //   const isName=this.name;
      //   console.log(isName);
      
      //   const isNumber=this.$store.state.staffList[this.index].phone;
      //   const isImage=this.$store.state.staffList[this.index].image;
        
       

      //   const regexName = new RegExp('^[A-Za-z]+(\\s*[A-Za-z]+)*$');
      //   const nameTesting=regexName.test(isName);

      //   const regexNumber=new RegExp('(^(\\+8801|8801|01))[1|3-9]{1}(\\d){8}$');
      //   const numberTesting=regexNumber.test(isNumber);
      
      // if(nameTesting==true )
      // {
      //   if(emailTesting==true)
      //   {
      //     if(numberTesting==true)
      //     {
      //       if(isImage !== null && isImage !== '') 
      //       {
      //         alert('Staff is Updated!!');
      //         this.$router.push('/allstaffs/');
      //       }
      //       else
      //       {
      //         alert('Add image Url!!');
      //       }
         
      //     }
      //     else{
      //       alert('Phone Number is either invalid or empty! Add Bangladeshi Phone Number.');
      //     }
          
      //   }
      //   else{
      //     alert('Email is either invalid or empty!');
      //   }
       
      // }
      // else{
      //   alert('Name is either invalid or empty!');
      // }

    // },
      
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