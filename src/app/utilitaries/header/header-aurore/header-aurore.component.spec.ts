import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderAuroreComponent } from './header-aurore.component';

describe('HeaderAuroreComponent', () => {
  let component: HeaderAuroreComponent;
  let fixture: ComponentFixture<HeaderAuroreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderAuroreComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeaderAuroreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
