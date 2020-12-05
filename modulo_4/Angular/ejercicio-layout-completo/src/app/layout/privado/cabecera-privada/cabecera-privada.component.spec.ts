import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CabeceraPrivadaComponent } from './cabecera-privada.component';

describe('CabeceraPrivadaComponent', () => {
  let component: CabeceraPrivadaComponent;
  let fixture: ComponentFixture<CabeceraPrivadaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CabeceraPrivadaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CabeceraPrivadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
