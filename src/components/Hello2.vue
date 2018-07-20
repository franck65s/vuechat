<template>
  <div class="hello">
  
    <button v-on:click="logout">Logout</button>
    <p v-for="user of users" :key="user">
    {{user.name}}
  </p>
  <div class="container">
        <div class="card">
            <div class="card-header">
                <h3>Add Item</h3>
            </div>
            <div class="card-body">
                <form v-on:submit.prevent="addItem">
                    <div class="form-group">
                        <label>Item Name:</label>
                        <input type="text" class="form-control" v-model="newItem.name"/>
                    </div>
                    <div class="form-group">
                        <label>Item Price:</label>
                        <input type="text" class="form-control" v-model="newItem.price"/>
                    </div>
                    <div class="form-group">
                        <input type="submit" class="btn btn-primary" value="Add Item"/>
                    </div>
                </form>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import firebase from 'firebase'
import Vuefire from 'vuefire'
// import moment from 'moment'
import { db } from '../main.js'
Vue.use(Vuefire)

// var usersRef = firebase.database().ref('chat')
export default {
  name: 'hello',
  firebase: {
    items: db('items')
  },
  data () {
    return {
      newItem: {
        name: '',
        price: ''
      }
    }
  },
  methods: {
    logout: function () {
      firebase.auth().signOut().then(() => {
        this.$router.replace('login')
      })
    },
    addItem: function () {
      this.$firebaseRefs.items.push({
        name: this.newItem.name,
        price: this.newItem.price
      })
      this.newItem.name = ''
      this.newItem.price = ''
      this.$router.push('/index')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #35495E;
}
</style>
