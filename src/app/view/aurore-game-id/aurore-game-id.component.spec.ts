import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuroreGameIdComponent } from './aurore-game-id.component';

describe('AuroreGameIdComponent', () => {
  let component: AuroreGameIdComponent;
  let fixture: ComponentFixture<AuroreGameIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AuroreGameIdComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AuroreGameIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
