import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerNavegacionComponent } from './banner-navegacion.component';

describe('BannerNavegacionComponent', () => {
  let component: BannerNavegacionComponent;
  let fixture: ComponentFixture<BannerNavegacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BannerNavegacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerNavegacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
