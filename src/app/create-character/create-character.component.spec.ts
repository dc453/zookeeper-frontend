import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, convertToParamMap } from '@angular/router';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { of } from 'rxjs';

import { CreateCharacterComponent } from './create-character.component';
import { HunterService } from '../hunter.service';
import { Hunter } from '../hunter';

describe('CreateCharacterComponent', () => {
  let component: CreateCharacterComponent;
  let fixture: ComponentFixture<CreateCharacterComponent>;
  let activatedRouteSpy: any;
  let hunterService: any;
  let getHuntersSpy: any;
  let testHunters: Hunter[];

  beforeEach(async () => {
    testHunters = [
      { "id": "testHunter1", name: "Test Hunter 1" }
    ];

    activatedRouteSpy = {
      snapshot: {
        paramMap: convertToParamMap({ hunterType: "testHunter1" })
      }
    };
    hunterService = jasmine.createSpyObj('HunterService', ['getHunter']);
    getHuntersSpy = hunterService.getHunter.withArgs('testHunter1').and.returnValue(of(testHunters[0]));

    await createComponent();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display chosen hunter type', () => {
    const title = fixture.nativeElement.querySelector('h2');
    expect(title.textContent).toContain('Create Test Hunter 1');
  });

  it('should create new character form', () => {
    expect(component.createCharacterForm instanceof FormGroup).toBeTruthy();
  });

  describe('when creating chosen', () => {
    beforeEach(() => {
      const testChosenHunter = [{ 
        "id": "testHunter1",
        name: "Test Hunter 1",
        "fate": {
          "how_you_found_out": ["foo"],
          "heroic": ["heroic1", "heroic2"],
          "doom": ["doom1", "doom2", "doom3"]
        }
      }];

      getHuntersSpy = hunterService.getHunter.withArgs('testHunter1').and.returnValue(of(testChosenHunter[0]));
    });
    
    it('should dynamically create heroic fate checkboxes', () => {
      
    });
  });


  async function createComponent() {
    await TestBed.configureTestingModule({
      declarations: [ CreateCharacterComponent ],
      imports: [
        ReactiveFormsModule,
        BrowserAnimationsModule,
        MatInputModule,
        MatRadioModule,
        MatCheckboxModule,
        MatButtonModule
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
  }

});
