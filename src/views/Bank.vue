<template>
  <div class="Bank">

    <h1>Bank account</h1>

    <input v-model.number="accountNr">
    <button v-on:click="getBalance()">Get balance</button>
    {{balance}}

    <h3>Create new account</h3>
    <input v-model.number="newAccountNr">
    <button v-on:click="createAccount()">Create account</button>
    {{newAccount}}

    <h3>Deposit money</h3>
    <input v-model.number="accountNr1">
    <input v-model.number="deposit">
    <button v-on:click="depositMoney()">Deposit money</button>
    {{balance1}}

    <h3>Withdraw money</h3>
    <input v-model.number="accountNr2">
    <input v-model.number="withdraw">
    <button v-on:click="withdrawMoney()">Withdraw money</button>
    {{balance2}}

    <h3>Withdraw money</h3>
    <input v-model.number="accountNr3">
    <input v-model.number="accountNr4">
    <input v-model.number="transfer">
    <button v-on:click="transferMoney()">transfer money</button>
    {{balance3}}

  </div>
</template>
<script>

function getBalance() {
  this.$http.get('api/banksql/getBalance?accountNr=' + this.accountNr)
      .then (response =>{
        console.log(response)
        this.balance = response.data
      })
      .catch(response =>{
        alert("Error")
      })
}

function createAccount(){
this.$http.get('api/banksql/createAccount?accountNr=' + this.newAccountNr + '&balance=0')
  .then(response =>{
    console.log(response)
    this.newAccount = response.data
  })
  .catch(response =>{
    alert ("Error")
  })
}

function depositMoney(){
  this.$http.put('api/banksql/deposit',{
  accountNumber: this.accountNr1,
  balance: this.deposit})
      .then(response =>{
        console.log(response)
        this.balance1 = response.data
      })
      .catch(response =>{
        alert ("Error")
      })
}

function withdrawMoney() {
  this.$http.put('api/banksql/withdraw', {
    accountNumber: this.accountNr2,
    balance: this.withdraw
  })
      .then(response => {
        console.log(response)
        this.balance2 = response.data
      })
      .catch(response => {
        alert("Error")
      })
}

function transferMoney() {
  this.$http.put('api/banksql/transfer', {
    accountNumber: this.accountNr3,
    accountNumber1: this.accountNr4,
    balance: this.transfer
  })
      .then(response => {
        console.log(response)
        this.balance3 = response.data
      })
      .catch(response => {
        alert("Error")
      })
}

export default {
   data: function () {
    return {
      'balance': '',
      'accountNr': '',

      'newAccountNr': '',
      'newAccount': '',

      'accountNr1': '',
      'balance1': '',
      'deposit': '',

      'accountNr2': '',
      'balance2': '',
      'withdraw': '',

      'accountNr3': '',
      'accountNr4': '',
      'balance3': '',
      'transfer': '',


    }
  },
  methods: {
    'getBalance': getBalance,
    'createAccount': createAccount,
    'depositMoney' : depositMoney,
    'withdrawMoney' : withdrawMoney,
    'transferMoney': transferMoney
  }
}
</script>