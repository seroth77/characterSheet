import { StageComponent } from 'aurelia-testing';
import { bootstrap } from 'aurelia-bootstrapper';
import { SheetGeneral } from '../../src/sheet-general/sheet-general';
import $ from 'jquery';

describe('General portion of the character sheet', () => {
  let component;

  beforeEach(() => {
    component = StageComponent
      .withResources('sheet-general/sheet-general')
      .inView('<sheet-general></sheet-general>');
  });

  it('should display an element', done => {
    component.create(bootstrap).then(() => {
      const nameElement = document.querySelector('div');
      expect(nameElement).toBeDefined();
      done();
    });
  });

  afterEach(() => {
    component.dispose();
  });
});
