<template>
   <v-app>
    <v-app-bar  app dark>
     <v-icon dark right>mdi-console</v-icon>
     <v-app-bar-title><router-link to="/" tag="span" style="cursor:pointer">StaffManagement</router-link></v-app-bar-title>
      <v-spacer></v-spacer>
      <v-btn plain><router-link to="/addstaff" tag="span">Add Staff</router-link></v-btn>

      <v-btn plain><router-link  to="/allstaffs" tag="span">View All Employees</router-link></v-btn>
    </v-app-bar>
    <v-main>
        <v-container class="mt-1" fluid>
          <router-view></router-view>
        </v-container>
      </v-main>
  </v-app>
</template>

<script>
  export default {
  }
  </script>






<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.v-application--wrap{
  background-color: rgb(234, 235, 249);
}

.v-app-bar{
  background-color: rgb(35, 40, 92) !important;
  color:rgb(0, 255, 166) !important;
}
</style>
