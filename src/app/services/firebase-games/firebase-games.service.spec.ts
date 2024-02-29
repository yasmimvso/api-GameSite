import { TestBed } from '@angular/core/testing';

import { FirebaseGamesService } from './firebase-games.service';

describe('FirebaseGamesService', () => {
  let service: FirebaseGamesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FirebaseGamesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
