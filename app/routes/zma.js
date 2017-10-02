import Ember from 'ember';
import trackPage from '../mixins/track-page';

const { service } = Ember.inject;

export default Ember.Route.extend({
  mainMap: service(),

  model(params) {
    return this.store.findRecord('zma', params.ulurpno);
  },

  afterModel(model) {
    this.set('mainMap.selected', model);
  },

  actions: {
    didTransition() {
      this.set('mainMap.shouldFitBounds', true);
    },
  },
}, trackPage);
