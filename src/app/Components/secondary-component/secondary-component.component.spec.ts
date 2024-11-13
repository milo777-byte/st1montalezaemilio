import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondaryComponentComponent } from './secondary-component.component';

describe('SecondaryComponentComponent', () => {
  let component: SecondaryComponentComponent;
  let fixture: ComponentFixture<SecondaryComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SecondaryComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecondaryComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
