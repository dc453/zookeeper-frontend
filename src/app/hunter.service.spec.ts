import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { HunterService } from './hunter.service';

describe('HunterService', () => {
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController
  let service: HunterService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(HunterService);
  });

  afterEach(() => {
    // check for pending requests
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return all hunter types', () => {
    const expectedHunters = [
      { "id": "chosen" },
      { "id": "crook" },
      { "id": "divine" }
    ];

    const hunters = service.getHunters()
      .subscribe((data) => {
        expect(data).toEqual(expectedHunters);
      });

    const req = httpTestingController.expectOne('/assets/hunters.json');
    req.flush(expectedHunters);
  });
});
