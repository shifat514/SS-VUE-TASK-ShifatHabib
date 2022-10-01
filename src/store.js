import Vue from "vue"
import Vuex from "vuex"
Vue.use(Vuex)

const store = new Vuex.Store({
    state:{
        staffList:[{name:'Joy',
                   email:'joy@gmail.com',
                   phone:'01521436358',
                   image:'https://www.dewarshi.com/cms/assets1/kcfinder/images/files/dummy-user.png'
                  },
                  {name:'Shadhin',
                  email:'shadhin22@gmail.com',
                  phone:'015425234520',
                  image:'https://us.123rf.com/450wm/pandavector/pandavector1901/pandavector190105594/126045801-isolated-object-of-avatar-and-dummy-icon-collection-of-avatar-and-image-vector-icon-for-stock-.jpg?ver=6'
                  },
                  {name:'Omi',
                  email:'Omi12@gmail.com',
                  phone:'015434234432',
                  image:'https://thumbs.dreamstime.com/b/vector-illustration-avatar-dummy-logo-collection-image-icon-stock-isolated-object-set-symbol-web-137160339.jpg'
                  },
                  {name:'Sadaf',
                  email:'sadaf12@gmail.com',
                  phone:'015434234432',
                  image:'https://www.dgvaishnavcollege.edu.in/dgvaishnav-c/uploads/2021/01/dummy-profile-pic.jpg'
                  }],
   

    adminList:[{   name:'shifat',
                   email:'shifat514@gmail.com',
                   phone:'01521436358',
                   image:'https://www.dewarshi.com/cms/assets1/kcfinder/images/files/dummy-user.png'
                  },
                  {name:'Shadhin',
                  email:'shadhin22@gmail.com',
                  phone:'015425234520',
                  image:'https://www.dewarshi.com/cms/assets1/kcfinder/images/files/dummy-user.png'
                  },
                  {name:'Omi',
                  email:'Omi12@gmail.com',
                  phone:'015434234432',
                  image:'https://www.dewarshi.com/cms/assets1/kcfinder/images/files/dummy-user.png'
                  }]
    },
    getters:{
        totalStaff(state){
            return state.staffList.length
        },
        totalAdmin(state){
            return state.adminList.length
        }
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