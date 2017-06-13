import Ember from 'ember';
import BaseModel from '@cardstack/models/model';
import DS from 'ember-data';

export default BaseModel.extend({
  title: DS.attr({fieldType: '@cardstack/core-types::string'}),
  owner: DS.attr({fieldType: '@cardstack/core-types::string'}),
  city: DS.attr({fieldType: '@cardstack/core-types::string'}),
  propertyType: DS.attr({fieldType: '@cardstack/core-types::string'}),
  image: DS.attr({fieldType: '@cardstack/core-types::string'}),
  description: DS.attr({fieldType: '@cardstack/core-types::string'}),
  bedrooms: DS.attr({fieldType: '@cardstack/core-types::integer'}),

  sleeps: Ember.computed('bedrooms', function() {
    return this.get('bedrooms') * 4;
  })
});
