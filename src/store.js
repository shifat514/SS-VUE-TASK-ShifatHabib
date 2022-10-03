import Vue from "vue"
import Vuex from "vuex"
Vue.use(Vuex)

const store = new Vuex.Store({
    state:{
        staffList:[{name:'Joya Khan',
                   email:'joya565@gmail.com',
                   phone:'01521436358',
                   image:'https://us.123rf.com/450wm/pandavector/pandavector1901/pandavector190105594/126045801-isolated-object-of-avatar-and-dummy-icon-collection-of-avatar-and-image-vector-icon-for-stock-.jpg?ver=6'
                  },
                  {name:'Reba Rahman',
                  email:'Reba22@gmail.com',
                  phone:'01542523452',
                  image:'https://i.pinimg.com/originals/ba/d4/5a/bad45a40fa6e153ef8d1599ba875102c.png'
                 
                },
                  {name:'Mannan A Omi',
                  email:'Omi12@gmail.com',
                  phone:'01543423443',
                  image:'https://thumbs.dreamstime.com/b/vector-illustration-avatar-dummy-logo-collection-image-icon-stock-isolated-object-set-symbol-web-137160339.jpg'
                  },
                  {name:'Sadaf Bin Habib',
                  email:'sadaf12@gmail.com',
                  phone:'015434234432',
                  image:'https://www.dgvaishnavcollege.edu.in/dgvaishnav-c/uploads/2021/01/dummy-profile-pic.jpg'
                  }],
   

    adminList:[{   name:'Shifat Habib',
                   email:'shifat514@gmail.com',
                   phone:'01521436358',
                   image:'https://i.pinimg.com/736x/64/81/22/6481225432795d8cdf48f0f85800cf66.jpg'
                  },
                  {name:'Moshiur Shadhin',
                  email:'shadhin22@gmail.com',
                  phone:'01542523452',
                  image:'https://www.kindpng.com/picc/m/24-248729_stockvader-predicted-adig-user-profile-image-png-transparent.png'
                  },
                  {name:'Asif Mohammad',
                  email:'asif12@gmail.com',
                  phone:'01543423448',
                  image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_hYkbPJqI-VSDeSmelPL9ubOlhxv3ItmBXmsq7U-Nc_y4rZ4BtsX0vjEOeZEAQ2a1aDM&usqp=CAU'
                  }]
    },
    getters:{
        totalStaff(state){
            return state.staffList.length
        },
        totalAdmin(state){
            return state.adminList.length
        },
    },
    mutations:{
        ADD_STAFF(state,payload){
            state.staffList.push(payload)
        },
        REMOVE_STAFF(state,payload)
        {
            state.staffList.splice(payload,1);
        }
    },
    actions:{
        addStaffs(context,payload){

            const newStaff={
                name: payload.name,
                email: payload.email,
                phone:payload.phone
            }
            context.commit("ADD_STAFF",newStaff)
        },
        removeStaff(context,payload){
           context.commit("REMOVE_STAFF",payload);
        }
    },
    
    
})

export default store