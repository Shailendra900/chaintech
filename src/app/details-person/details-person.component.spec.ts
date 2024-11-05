import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsPersonComponent } from './details-person.component';

describe('DetailsPersonComponent', () => {
  let component: DetailsPersonComponent;
  let fixture: ComponentFixture<DetailsPersonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailsPersonComponent]
    });
    fixture = TestBed.createComponent(DetailsPersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
