<template>
  <div class="welcome container">
    <div class="card">
      <div class="card-content center-align">
        <h2 class="teal-text">Login</h2>
        <form class="center-align" @submit.prevent="attemptLogin">
          <div class="inputs">
            <div class="switch">
              <label for="role">Please select role</label><br>
              <label>
                Developer
                <input type="checkbox" v-model="role">
                <span class="lever"></span>
                Admin
              </label>
            </div>
            
            <label for="username">
              Enter your username
            </label>
            <input type="text" name="username" v-model="username">
            <label for="password">
              Enter your password
            </label>
            <input type="password" name="password" v-model="password">
            <p v-if="feedback" class="red-text">{{ feedback }}</p>
          </div>
          <button class="btn teal">Login</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Login',
  data () {
    return {
      role: false,
      username: null,
      password: null,
      feedback: null,
    }
  },
  methods: {
    attemptLogin () {
      var devLogin = (this.username==this.$parent.mockAccountDev.username && this.password==this.$parent.mockAccountDev.password)
      var adminLogin = (this.username==this.$parent.mockAccountAdmin.username && this.password==this.$parent.mockAccountAdmin.password)      
      if ( (devLogin && !this.role) || (adminLogin && this.role) ) {
        var userObj = {
          username: this.username,
          password: this.password
        }
        localStorage.setItem('authObj', JSON.stringify(userObj))
        // var x = JSON.parse(localStorage.getItem('authObj'))
        // console.log(x.username);
        this.$router.push({ name: 'Dashboard', params: {role: this.role} })
      }
      else if (! this.username && !this.password) {
        this.feedback = 'Enter name & password to login'
      } 
      else if (!this.username) {
        this.feedback = 'Enter name to login'
      } 
      else if (!this.password) {
        this.feedback = 'Enter password to login'
      } 
      else {
        this.feedback = 'Authentication failure'
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.welcome{
  max-width: 400px;
  margin-top: 100px;
}
.welcome h2{
  font-size: 3em;
}
.welcome button{
  margin: 20px auto;
}
.inputs{
  max-width: 200px;
  margin: 40px auto;
}
.inputs input{
  max-height: 20px;
}
.switch{
  margin-bottom: 20px;
}
</style>
