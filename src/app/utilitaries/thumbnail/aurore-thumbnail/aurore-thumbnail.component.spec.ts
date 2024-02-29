import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuroreThumbnailComponent } from './aurore-thumbnail.component';

describe('AuroreThumbnailComponent', () => {
  let component: AuroreThumbnailComponent;
  let fixture: ComponentFixture<AuroreThumbnailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AuroreThumbnailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AuroreThumbnailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
