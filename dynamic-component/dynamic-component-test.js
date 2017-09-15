import QUnit from 'steal-qunit';
import { ViewModel } from './dynamic-component';

// ViewModel unit tests
QUnit.module('donejs-helloworld/dynamic-component');

QUnit.test('Has message', function(){
  var vm = new ViewModel();
  QUnit.equal(vm.message, 'This is the dynamic-component component');
});
