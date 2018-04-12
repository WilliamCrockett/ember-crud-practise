import Route from '@ember/routing/route'

export default Route.extend({
  model () {
    return this.get('store').findAll('example')
  },
  actions: {
    addExample (newExample) {
      const example = this.get('store').createRecord('example', newExample).save()
    },
    deleteExample (example) {
      console.log(example)
      example.destroyRecord()
    }
  }
})
