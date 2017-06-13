import Rental from '@cardstack/hub/models/rental';
import Ember from 'ember';
import DS from 'ember-data';
export default Rental.extend({
  realtor: DS.belongsTo('realtor'),

  sleeps: Ember.computed('bedrooms', function() {
    return this.get('bedrooms') * 4;
  })
});
