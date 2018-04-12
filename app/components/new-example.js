import Component from '@ember/component'

export default Component.extend({
  newExample: {
    text: ''
  },
  actions: {
    addExample (newExample) {
      console.log('in new-example')
      this.sendAction('addExample', this.get('newExample'))
    }
  }
})
