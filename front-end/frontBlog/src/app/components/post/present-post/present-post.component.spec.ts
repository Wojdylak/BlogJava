import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentPostComponent } from './present-post.component';

describe('PresentPostComponent', () => {
  let component: PresentPostComponent;
  let fixture: ComponentFixture<PresentPostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PresentPostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PresentPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
