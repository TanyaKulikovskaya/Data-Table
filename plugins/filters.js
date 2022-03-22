import Vue from 'vue'

Vue.filter('formatDate', (value) => {
  const date = new Date(value)
  return date.toISOString().slice(2, 10).split('-').reverse().join('.')
})