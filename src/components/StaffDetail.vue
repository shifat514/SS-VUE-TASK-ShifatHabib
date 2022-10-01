<template>
  <v-container>
    <v-layout row wrap ma-3 justify-content-center align-self-center >
        <v-flex xs6 >
            <v-card>
                <v-card-title>
                    <h3 class="primary--text">{{staff.name}}</h3>
                </v-card-title>
                <v-img width="300px" class="ma-2"
                          :src="staff.image"
                        >
                        </v-img>
                 <v-card-text>
            <div class="info--text">{{staff.email}}</div>
            <div >{{staff.phone}}</div>
            </v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="rgb(35, 40, 92)" class="white--text">Update</v-btn>
                <v-btn color="rgb(35, 40, 92)" class="white--text">Delete</v-btn>
            </v-card-actions>
            </v-card>
        </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
    props:['index'],
    computed:{
    staff(){
        return this.$store.state.staffList[this.index];
    }
}
}
</script>

<style>

</style>