import Vue from 'vue'
import TestService from '@/services/TestService'
import { FETCH_POSTS, POSTS_RESET_STATE } from './actions.type'
import { RESET_STATE, SET_POSTS, SET_LOADING } from './mutations.type'

const initialState = {
  loading: false,
  posts: []
}

export const state = { ...initialState }

export const actions = {
  async [FETCH_POSTS] (context, prevPosts) {
    if (prevPosts !== undefined) {
      return context.commit(SET_POSTS, prevPosts)
    }

    context.commit(SET_LOADING, true)

    const { data: posts } = await TestService.fetchPosts()
    const { data: comments } = await TestService.fetchComments()
    const { data: users } = await TestService.fetchUsers()

    posts.map(post => {
      post.comments = comments.filter(comment => comment.postId === post.id)
      post.user = users.find(user => user.id === post.userId)
    })

    context.commit(SET_POSTS, posts)
    context.commit(SET_LOADING, false)

    return posts
  },
  [POSTS_RESET_STATE] ({ commit }) {
    commit(RESET_STATE)
  }
}

export const mutations = {
  [SET_LOADING] (state, loading) {
    state.loading = loading
  },
  [SET_POSTS] (state, posts) {
    state.posts = posts
  },
  [RESET_STATE] () {
    for (const key in state) {
      Vue.set(state, key, initialState[key])
    }
  }
}

const getters = {
  loading (state) {
    return state.loading
  },
  posts (state) {
    return state.posts
  }
}

export default {
  state,
  actions,
  mutations,
  getters
}
