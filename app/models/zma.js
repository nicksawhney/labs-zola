import DS from 'ember-data';
import { computed } from 'ember-decorators/object'; // eslint-disable-line
import bbox from 'npm:@turf/bbox';

export default DS.Model.extend({
  geometry: DS.attr(),
  ulurpno: DS.attr('string'),
  project_na: DS.attr('string'),
  effective: DS.attr('string'),
  status: DS.attr('string'),
  lucats: DS.attr('string'),

  @computed('geometry')
  bounds(geometry) {
    return bbox(geometry);
  },
});
