import axios from 'axios'

export default{
    getUsers(){
        return axios.get('/api/users')
            .then(response => {
              return response.data  
            })
    },
    getDelayedUsers(){
        return axios.get('/api/users?delay=3')
            .then(response => {
              return response.data  
            })
    }
}