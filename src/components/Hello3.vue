<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li><a href="https://vuejs.org" target="_blank" rel="noopener">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank" rel="noopener">Forum</a></li>
      <li><a href="http://chat.vuejs.org/" target="_blank" rel="noopener">Vue Community Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank" rel="noopener">Twitter</a></li>
      <li><a href="http://vuejs-templates.github.io/webpack/" target="_blank" rel="noopener">Docs for This Template</a></li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li><a href="http://router.vuejs.org/" target="_blank" rel="noopener">vue-router</a></li>
      <li><a href="http://vuex.vuejs.org/" target="_blank" rel="noopener">vuex</a></li>
      <li><a href="http://vue-loader.vuejs.org/" target="_blank" rel="noopener">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener">awesome-vue</a></li>
    </ul>
    <button v-on:click="logout">Logout</button>
   <form id="form" v-on:submit.prevent="addMsg">
            <input type="text" v-model="newMsg.from" placeholder="Nome">
            <br> <br>
            <textarea v-model="newMsg.text" placeholder="Mensagem"></textarea>
            <br>
            <input type="submit" value="Enviar mensagem">
        </form>
        <hr>
        <ul is="transition-group">
            <li v-for="msg in msgs" :key="msg['.key']">
                <span>{{ msg.from }} - {{ msg.text }}</span>
            </li>
        </ul>
    </div>
 
</template>

<script>
import Vue from 'vue'
import firebase from 'firebase'
import Vuefire from 'vuefire'
// import moment from 'moment'
import { msgsRef } from '../main.js'
Vue.use(Vuefire)

export default {
  name: 'hello',
  data: {
    newMsg: {
      from: '',
      text: ''
    }
  },
  firebase: {
    msgs: msgsRef
  },

  computed: {
    validation: function () {
      return {
        from: !!this.newMsg.from.trim(),
        text: !!this.newMsg.text.trim()
      }
    },
    isValid: function () {
      var validation = this.validation
      return Object.keys(validation).every(function (key) {
        return validation[key]
      })
    }
  },
  methods: {
    logout: function () {
      firebase.auth().signOut().then(() => {
        this.$router.replace('login')
      })
    },
    addMsg: function () {
      if (this.isValid) {
        msgsRef.push(this.newMsg)
        this.newMsg.text = ''
      }
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
