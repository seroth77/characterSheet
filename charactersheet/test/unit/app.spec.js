import { StageComponent } from 'aurelia-testing';
import { bootstrap } from 'aurelia-bootstrapper';
import {App} from '../../src/app';
import $ from 'jquery';

describe('the app', () => {
  let component;

  beforeEach(() => {
    component = StageComponent
      .withResources('app')
      .inView('<app></app>');
  });

  it('has a general custom element', done => {
    component.create(bootstrap).then(() => {
      const nameElement = $('sheet-general');
      expect(nameElement.length > 0).toBe(true);
      done();
    });
  });

  afterEach(() => {
    component.dispose();
  });
});
