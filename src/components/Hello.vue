<template>
  <div class="hello">
    <button v-on:click="logout">Logout</button>
        <div>
      <nav>
        <div class="container">
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
          <div v-for="item in anArray" :key= 'item.timestamp'>            
              <div class="chat-message">
                <p>{{item.message}} </p>
                <p>{{item.timestamp | dateFilter}}</p>
                <p>{{item.userId}}</p>
              </div>
            </div>
          </div>
        </div>
        <form @submit.prevent="addComment">
        <div class="chat-form">
          <!-- <textarea v-model="newComment" placeholder="Type and click send to chat"></textarea> -->
          <textarea v-model="newComment" placeholder="Type and click send to chat"></textarea>
          <button>Send</button>
        </div>
        </form>
      </div>

    </div>
 
</template>

<script>
import Vue from 'vue'
import Vuefire from 'vuefire'
// import dateFilter from '../utils/filter.js'
import firebase, { chatRef } from '../main.js'
import moment from 'moment'
Vue.use(Vuefire)

export default {
  name: 'hello',
  data: function () {
    return {
      comment: '',
      newComment: '',
      loading: true
    }
  },
  firebase: function () {
    return {
    // can bind to either a direct Firebase reference or a query
      anArray: chatRef,
      // optionally provide the cancelCallback
      cancelCallback: function () {
      },
      // this is called once the data has been retrieved from firebase
      readyCallback: function () {
      }
    }
  },
  filters: {
    dateFilter (date) {
      if (date) {
        return moment.unix(date).format(' dddd, MMMM Do YYYY, h:mm:ss a')
      }
    }
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
    }
    // getUserName () {
    //   return firebase.auth().currentUser.displayName
    // },
    // getPhotoURL () {
    //   return firebase.auth().currentUser.photoURL
    // }
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
