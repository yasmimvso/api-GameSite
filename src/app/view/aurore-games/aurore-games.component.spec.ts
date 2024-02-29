import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuroreGamesComponent } from './aurore-games.component';

describe('AuroreGamesComponent', () => {
  let component: AuroreGamesComponent;
  let fixture: ComponentFixture<AuroreGamesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AuroreGamesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AuroreGamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
