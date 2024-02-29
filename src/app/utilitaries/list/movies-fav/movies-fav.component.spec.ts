import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesFavComponent } from './movies-fav.component';

describe('MoviesFavComponent', () => {
  let component: MoviesFavComponent;
  let fixture: ComponentFixture<MoviesFavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MoviesFavComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MoviesFavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
