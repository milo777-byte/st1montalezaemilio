import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimaryComponentComponent } from './primary-component.component';

describe('PrimaryComponentComponent', () => {
  let component: PrimaryComponentComponent;
  let fixture: ComponentFixture<PrimaryComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrimaryComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrimaryComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
