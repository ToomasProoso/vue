<template>

  <div class="Bank login">

    <input v-model="accountNumber" placeholder="Account number"/>
    <input  v-model="password" placeholder="Password">
    <h3 style="background-color: darkorange">Register user</h3>
    <button v-on:click="registerUser()">Register user</button>
    <h3>Login please</h3>
    <button v-on:click="login()">Login</button>

    <h3>Logout</h3>
    <button v-on:click="logout()">logout</button>

    <table>
      <tr v-for="accountNumber in accountNumbers">
        <td>{{accountNumber}}</td>
      </tr>
    </table>
  </div>
</template>
<script>

export default {
   data: function () {
    return {
      'accountNumber': '',
      'accountNumbers': [],
      'username': '',
      'password': '',
      'token': '',


    }
  },
  methods: {
     'registerUser': function () {
       this.$http.put('/api/public/register', {
         username: this.accountNumber, //button activate
         password: this.password
       })
       .then(response =>{
         console.log(response);
         this.password = response.data
       })
     },

    'login': function () {
      this.$http.put('/api/public/login',{
        username: this.accountNumber, //button activate
        password: this.password
      })
      .then((response) =>{
        console.log(response);
        let token = response.data;
        localStorage.setItem('user-token', response.data)
        this.$http.defaults.headers.common['Authorization']="Bearer "+token
      })

    },
    'logout': function (){ //valja logimine
      localStorage.removeItem('user-token')
      location.reload() //refressib lehe
      this.logout = "Logged out"
    }
  }
}
</script>