import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountrycompComponent } from './countrycomp.component';

describe('CountrycompComponent', () => {
  let component: CountrycompComponent;
  let fixture: ComponentFixture<CountrycompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CountrycompComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CountrycompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
