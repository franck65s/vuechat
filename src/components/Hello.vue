<template>
  <div class="hello">
    <!-- <h1>{{ msg }}</h1>
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
    </ul> -->
    <button v-on:click="logout">Logout</button>
        <div>
      <nav>
        <div class="container">
          <a href=''>
            VUECHAT
          </a>
          <ul class="nav__left">
          </ul>
          <ul class="nav__right">
            <a href='' @click="logOut()">SIGNOUT</a>
          </ul>
        </div>
      </nav>
      <main>
        <img src="../assets/logo.png" alt="Vue.js PWA">
        <router-view></router-view>
      </main>
    </div>
    <div>

      <div class="chatbox">
        <div class="chatlogs"> 
          <div v-for="item in anArray" :key = 'item'>
            <!-- <span class="chat-name">{{item.name}}</span>
            <div class="chat friend">
              <img class="user-photo" v-bind:src="item.photo_url" /> -->
              <div class="chat-message">
                <p>{{item.message}} </p>
                <p>
                  <!-- <span class="chat-time"> {{item.timestamp | formatDate}}</span> -->
                </p>
              </div>
            </div>
          </div>
        </div>
        <form @submit.prevent="addComment">
        <div class="chat-form">
          <textarea v-model="newComment" placeholder="Type and click send to chat"></textarea>
          <button>Send</button>
        </div>
        </form>
      </div>

    </div>
 
</template>

<script>
import Vue from 'vue'
import firebase from 'firebase'
import Vuefire from 'vuefire'
import dateFilter from '../utils/filter.js'
// import moment from 'moment'
import { chatRef } from '../main.js'
import moment from 'moment'
Vue.use(Vuefire)

export default {
  name: 'hello',
  data () {
    return {
      comment: '',
      newComment: '',
      loading: true
    }
  },
  firebase: {
    // can bind to either a direct Firebase reference or a query
    anArray: chatRef,
    // optionally provide the cancelCallback
    cancelCallback: function () {
    },
    // this is called once the data has been retrieved from firebase
    readyCallback: function () {

    }
  },
  filters: {
    dateFilter
  },
  methods: {
    logout: function () {
      firebase.auth().signOut().then(() => {
        this.$router.replace('login')
      })
    },
    addComment () {
      if (this.newComment !== '') {
        this.comment = this.newComment.trim()
        chatRef.push({
          message: this.comment,
          // name: this.getUserName(),
          timestamp: moment().unix(),
          userId: this.getUserId()
          // photo_url: this.getPhotoURL()
        })
        this.newComment = ''
      }
    },
    getUserId () {
      return firebase.auth().currentUser.uid
    },
    getUserName () {
      return firebase.auth().currentUser.displayName
    },
    getPhotoURL () {
      return firebase.auth().currentUser.photoURL
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
