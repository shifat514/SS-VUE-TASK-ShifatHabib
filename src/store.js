import Vue from "vue"
import Vuex from "vuex"
Vue.use(Vuex)

const store = new Vuex.Store({
    state:{
        staffList:[{name:'shifat',
                   email:'shifat514@gmail.com',
                   phone:'01521436358'
                  },
                  {name:'Shadhin',
                  email:'shadhin22@gmail.com',
                  phone:'015425234520'
                  },
                  {name:'Omi',
                  email:'Omi12@gmail.com',
                  phone:'015434234432'
                  }]
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
    getters:{
        loadStaff(state){
            return(staffId)=>{
                return state.staffList.find(staff=>staffId=== staff.id)
            }
        }
    }
    
})

export default store