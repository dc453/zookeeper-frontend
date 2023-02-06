import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectHunterTypeComponent } from './select-hunter-type.component';

describe('SelectHunterTypeComponent', () => {
  let component: SelectHunterTypeComponent;
  let fixture: ComponentFixture<SelectHunterTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectHunterTypeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectHunterTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
