import router from '../../router/index'
import {auth,usersCollection} from '../../firebase'
const state = {
  userProfile: {}
};

export const getters = {
  getUserProfile(state) {
    return state.userProfile;
  },
  isAuthenticated(state) {
    return !!state.userProfile;
  }
};

export const mutations = {
  setUserProfile(state, val) {
    state.userProfile = val;
  }
};

export const actions = {
  async login({ commit, dispatch }, payload) {
    commit('setLoading', true);
    await auth.signInWithEmailAndPassword(payload.email, payload.password)
      .then(firebaseData => {
        dispatch('fetchUserProfile', firebaseData.user);
        commit('setLoading', false);
        commit('setError', null);
      })
      .catch(error => {
        commit('setLoading', false);
        commit('setError', { login: error });
      });
  },
  async logout({ commit }) {
    await auth.signOut()
    commit('setUserProfile', {})
    router.currentRoute.path !== '/auth' && router.push('/auth');
  },
  async signup({ commit }, payload) {
    commit('setLoading', true);
    await auth.createUserWithEmailAndPassword(payload.email, payload.password)
      .then(firebaseData => {
        usersCollection.doc(firebaseData.user.uid).set({
          nickname: payload.nickname,
          name: payload.name,
          email: payload.email,
          enable: true
        })
          .then(() => {
            commit('setLoading', false);
            commit('setInformation', { signUp: { code: 'Success', message: `User created!, use your new credentials` } });
            commit('setError', null);
          })
      })
      .catch(error => {
        commit('setLoading', false);
        commit('setInformation', null);
        commit('setError', { signUp: error });
      });
  },
  async fetchUserProfile({ commit, dispatch }, user) {
    commit('setLoading', true);
    await usersCollection.doc(user.uid).get()
      .then(firebaseData => {
        const userInfo = firebaseData.data();
        commit('setUserProfile', userInfo?.enable ? userInfo : {});
        if (userInfo) {
          !userInfo.enable && dispatch('logout');
          if (router.currentRoute.path === '/auth') {
            userInfo?.enable && router.push('/');
          }
          commit('setLoading', false);
          commit('setError', null);
        }
      })
      .catch(error => {
        commit('setError', error)
        commit('setLoading', false);
      });
  },
  async resetPassword({ commit }, payload) {
    commit('setLoading', true);
    await auth
      .sendPasswordResetEmail(payload.email)
      .then(() => {
        commit('setLoading', false);
        commit('setInformation', { resetPassword: { code: 'Success', message: 'Success!, check your email for the password reset link' } });
        commit('setError', null);
      })
      .catch((error) => {
        commit('setLoading', false);
        commit('setInformation', null);
        commit('setError', { resetPassword: error });
      })
  }
};

export default {
  state,
  getters,
  mutations,
  actions
};
