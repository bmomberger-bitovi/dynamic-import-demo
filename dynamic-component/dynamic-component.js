import Component from 'can-component';
import DefineMap from 'can-define/map/';
import view from './dynamic-component.stache';

export const ViewModel = DefineMap.extend({
  message: {
    value: 'This is the dynamic-component component'
  }
});

export default Component.extend({
  tag: 'dynamic-component',
  ViewModel,
  view
});
