//import axios from 'axios';
import {FA} from '../../firebase'

const state = {
  user: null 
};

const getters = {
  user (state) {
    return state.user
  }
    
};

const actions = {
  signUserUp ({commit}, payload) {
    commit('setLoading', true)
    commit('clearError')
    FA().createUserWithEmailAndPassword(payload.email, payload.password)
      .then(
        user => {
          commit('setLoading', false)
          const newUser = {
            id: user.uid,
            name: user.displayName,
            email: user.email,
            photoUrl: user.photoURL
          }
          commit('setUser', newUser)
        }
      )
      .catch(
        error => {
          commit('setLoading', false)
          commit('setError', error)
          console.log(error)
        }
      )
  },
  signUserIn ({commit}, payload) {
    commit('setLoading', true)
    commit('clearError')
    FA().signInWithEmailAndPassword(payload.email, payload.password)
      .then(
        user => {
          commit('setLoading', false)
          const newUser = {
            id: user.uid,
            name: user.displayName,
            email: user.email,
            photoUrl: user.photoURL
          }
          commit('setUser', newUser)
        }
      )
      .catch(
        error => {
          commit('setLoading', false)
          commit('setError', error)
          console.log(error)
        }
      )
  },
  signUserInGoogle ({commit}) {
    commit('setLoading', true)
    commit('clearError')
    FA().signInWithPopup(new FA.GoogleAuthProvider())
      .then(
        user => {
          commit('setLoading', false)
          const newUser = {
            id: user.uid,
            name: user.displayName,
            email: user.email,
            photoUrl: user.photoURL
          }
          commit('setUser', newUser)
        }
      )
      .catch(
        error => {
          commit('setLoading', false)
          commit('setError', error)
          console.log(error)
        }
      )
  },
  signUserInFacebook ({commit}) {
    commit('setLoading', true)
    commit('clearError')
    FA().signInWithPopup(new FA.FacebookAuthProvider())
      .then(
        user => {
          commit('setLoading', false)
          const newUser = {
            id: user.uid,
            name: user.displayName,
            email: user.email,
            photoUrl: user.photoURL
          }
          commit('setUser', newUser)
        }
      )
      .catch(
        error => {
          commit('setLoading', false)
          commit('setError', error)
          console.log(error)
        }
      )
  },
  signUserInGithub ({commit}) {
    commit('setLoading', true)
    commit('clearError')
    FA().signInWithPopup(new FA.GithubAuthProvider())
      .then(
        user => {
          commit('setLoading', false)
          const newUser = {
            id: user.uid,
            name: user.displayName,
            email: user.email,
            photoUrl: user.photoURL
          }
          commit('setUser', newUser)
        }
      )
      .catch(
        error => {
          commit('setLoading', false)
          commit('setError', error)
          console.log(error)
        }
      )
  },
  signUserInTwitter ({commit}) {
    commit('setLoading', true)
    commit('clearError')
    FA().signInWithPopup(new FA.TwitterAuthProvider())
      .then(
        user => {
          commit('setLoading', false)
          const newUser = {
            id: user.uid,
            name: user.displayName,
            email: user.email,
            photoUrl: user.photoURL
          }
          commit('setUser', newUser)
        }
      )
      .catch(
        error => {
          commit('setLoading', false)
          commit('setError', error)
          console.log(error)
        }
      )
  },
  autoSignIn ({commit}, payload) {
    commit('setUser', {
      id: payload.uid,
      name: payload.displayName,
      email: payload.email,
      photoUrl: payload.photoURL
    })
  },
  resetPasswordWithEmail ({ commit }, payload) {
    const { email } = payload
    commit('setLoading', true)
    FA().sendPasswordResetEmail(email)
    .then(
      () => {
        commit('setLoading', false)
        console.log('Email Sent')
      }
    )
    .catch(
      error => {
        commit('setLoading', false)
        commit('setError', error)
        console.log(error)
      }
    )
  },
  logout({commit}){
    FA().signOut()
    commit('setUser', null)
  }

 
 
};

const mutations = {
  setUser (state, payload) {
    state.user = payload
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};