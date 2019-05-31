import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentAccountComponent } from './present-account.component';

describe('PresentAccountComponent', () => {
  let component: PresentAccountComponent;
  let fixture: ComponentFixture<PresentAccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PresentAccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PresentAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
