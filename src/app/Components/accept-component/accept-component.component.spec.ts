import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcceptComponentComponent } from './accept-component.component';

describe('AcceptComponentComponent', () => {
  let component: AcceptComponentComponent;
  let fixture: ComponentFixture<AcceptComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AcceptComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcceptComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
