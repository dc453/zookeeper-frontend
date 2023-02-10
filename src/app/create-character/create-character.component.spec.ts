import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, convertToParamMap } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';
import { of } from 'rxjs';

import { CreateCharacterComponent } from './create-character.component';
import { HunterService } from '../hunter.service';
import { Hunter } from '../hunter';

describe('CreateCharacterComponent', () => {
  let component: CreateCharacterComponent;
  let fixture: ComponentFixture<CreateCharacterComponent>;
  let testHunters: Hunter[];

  beforeEach(async () => {
    testHunters = [
      { "id": "testHunter1", name: "Test Hunter 1" }
    ];

    const activatedRouteSpy = {
      snapshot: {
        paramMap: convertToParamMap({ hunterType: "testHunter1" })
      }
    };
    const hunterService = jasmine.createSpyObj('HunterService', ['getHunter']);
    const getHuntersSpy = hunterService.getHunter.withArgs('testHunter1').and.returnValue(of(testHunters[0]));

    await TestBed.configureTestingModule({
      declarations: [ CreateCharacterComponent ],
      imports: [
        ReactiveFormsModule,
        MatRadioModule
      ],
      providers: [
        { provide: HunterService, useValue: hunterService },
        { provide: ActivatedRoute, useValue: activatedRouteSpy }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateCharacterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display chosen hunter type', () => {
    const title = fixture.nativeElement.querySelector('h2');
    expect(title.textContent).toContain('Create Test Hunter 1');
  });
});
