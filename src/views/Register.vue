<template>
  <div class="home">
<h1>All accounts & amounts</h1>
<!--    {{accounts}}-->
    <table>
      <tr>
        <th>Account Number</th>
        <th>Balance</th>
      </tr>
      <tr v-for="account in accounts">
        <td>{{account.accountNumber}}</td>
        <td>{{ account.balance }}</td>
<!--        <td>{{account}}</td>-->
      </tr>
    </table>
    <h1>Transaction history</h1>
  </div>
</template>

<script>


export default {
  data: function (){
    return{
      accounts: []
    }
  },
  name: 'Register',
  components: {

  },
  methods:{

  },
  mounted(){
    this.$http.get("api/banksql/all")
    .then(response => this.accounts = response.data);
  }
}
</script>