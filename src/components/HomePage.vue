<template>
 
 <v-container my-16 py-16>
  <v-row align="center" justify="center">
    <v-flex xs4>
    <v-card
    class="mx-auto"
    max-width="500"
  >
    <v-list-item three-line>
      <v-list-item-content class="text-color">
        <div class="text-overline mb-4">
          Total  Employees
        </div>
        <v-list-item-title class="text-h1 mb-1">
          {{$store.getters.totalStaff+$store.getters.totalAdmin}}
        </v-list-item-title>
        <!-- <v-list-item-subtitle>Employees</v-list-item-subtitle> -->
      </v-list-item-content>
    </v-list-item>
  </v-card>
</v-flex>
    <v-flex xs4>
    <v-card
    class="mx-auto"
    max-width="500"
  >
    <v-list-item three-line>
      <v-list-item-content class="text-color">
        <div class="text-overline mb-4">
          Total Staffs
        </div>
        <v-list-item-title class="text-h1 mb-1">
          {{$store.getters.totalStaff}}
        </v-list-item-title>
      </v-list-item-content>
    </v-list-item>
  </v-card>
</v-flex>

<v-flex xs4>
    <v-card
    class="mx-auto"
    max-width="500"
  >
    <v-list-item >
      <v-list-item-content class="text-color">
        <div class="text-overline mb-4">
          Total Admins
        </div>
        <v-list-item-title class="text-h1 mb-1">
          {{$store.getters.totalAdmin}}
        </v-list-item-title>
      </v-list-item-content>

    
    </v-list-item>
  </v-card>
</v-flex>
</v-row>

 </v-container>
 
 
</template>

<script>
export default {
}
</script>

<style>

.text-color{
  color: white !important;
}
.v-card{
  border-radius:7px !important;
  background-color: #23285C !important;
}
</style>