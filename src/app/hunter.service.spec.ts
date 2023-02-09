import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { HunterService } from './hunter.service';

describe('HunterService', () => {
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController
  let service: HunterService;

  const expectedHunters = [
    { "id": "chosen", name: "The Chosen" },
    { "id": "crook", name: "The Crook" },
    { "id": "divine", name: "The Divine" }
  ];

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

  it('should return all hunter type data', (done: DoneFn) => {
    const hunters = service.getHunters()
      .subscribe((data) => {
        expect(data).toEqual(expectedHunters);
        done();
      });

    const req = httpTestingController.expectOne('/assets/hunters.json');
    req.flush(expectedHunters);
  });

  it('should return requested hunter type data', (done: DoneFn) => {
    const hunter = service.getHunter('chosen')
      .subscribe((data) => {
        expect(data).toEqual(expectedHunters[0]);
        done();
      });

    const req = httpTestingController.expectOne('/assets/hunters.json');
    req.flush(expectedHunters);
  });

  it('should cache requested hunter data', () => {

  });
});
