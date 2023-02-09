import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';

import { CreateCharacterComponent } from './create-character.component';

describe('CreateCharacterComponent', () => {
  let component: CreateCharacterComponent;
  let fixture: ComponentFixture<CreateCharacterComponent>;

  @Component({selector: 'app-select-hunter-type', template: ''})
  class SelectHunterTypeComponentStub {}

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateCharacterComponent, SelectHunterTypeComponentStub ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateCharacterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
