<template>
  <div class="sign-up">
    <p>Let's create a new account !</p>
    <input type="text" placeholder="Email"></input>
    <input type="password" placeholder="Password"></input>
    <button>Sign Up</button>
    <span>or go back to login</span>
  </div>
</template>

<script>
export default {
  name: 'signup',
  data () {
  },
  methods: {}
}
</script>
<style>
  .login{
    color:red;
    margin-top: 40px;
  }
  input{
    margin: 10px 0;
    width: 20%;
    padding: 15px;
  }
  button{
    margin-top: 20px;
    width: 10%;
    cursor: pointer;
  }
  span {
    display: block;
    margin-top: 20px;
    font-size:11px;
  }
 
</style>
