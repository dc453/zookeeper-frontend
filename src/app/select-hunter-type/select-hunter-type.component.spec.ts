import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatListModule } from '@angular/material/list';
import { of } from 'rxjs';

import { SelectHunterTypeComponent } from './select-hunter-type.component';
import { HunterService } from '../hunter.service';

describe('SelectHunterTypeComponent', () => {
  let component: SelectHunterTypeComponent;
  let fixture: ComponentFixture<SelectHunterTypeComponent>;
  let testHunters: { id: string, name: string }[];

  beforeEach(async () => {
    testHunters = [
      { "id": "testHunter1", name: "Test Hunter 1" },
      { "id": "testHunter1", name: "Test Hunter 2" },
      { "id": "testHunter1", name: "Test Hunter 3" }
    ];

    const hunterService = jasmine.createSpyObj('HunterService', ['getHunters']);
    const getHuntersSpy = hunterService.getHunters.and.returnValue(of(testHunters));

    await TestBed.configureTestingModule({
      declarations: [ SelectHunterTypeComponent ],
      imports: [ MatListModule ],
      providers: [ { provide: HunterService, useValue: hunterService } ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectHunterTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch available hunter types', () => {
    expect(component.hunterOptions).toEqual(testHunters);
  });
});
