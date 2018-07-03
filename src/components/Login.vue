<template>
  <div class="login">
    <h3>Sign In</h3>
    <input type="text" placeholder="Email"></input>
    <input type="password" placeholder="Password"></input>
    <button>Connection</button>
    <p>You don't have an account? You can create one</p>
  </div>
</template>

<script>
export default {
  name: 'login',
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
  p {
    margin-top: 40px;
    font-size: 13px;
  }
  p a {
    test-decoration: underline;
    cursor: pointer;
  }
</style>
