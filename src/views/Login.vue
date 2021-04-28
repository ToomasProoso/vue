<template>
  <div class="Login">
    <input v-model="email" placeholder="enter your email"/>

    <button v-on:click="login()">Login</button>
    <h1>Login please</h1>
    <table>
      <tr v-for="email in emails">
        <td>{{email}}</td>
      </tr>
    </table>
  </div>
</template>
<script>

export default {
   data: function () {
    return {
      'email': '',
      'emails': ["a@a.ee", "b@b.com"]
    }
  },
  methods: {
    'login': function () {
      this.emails.push(this.email);
    }
  }
}
</script>