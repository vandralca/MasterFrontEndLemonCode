import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CabeceraPublicaComponent } from './cabecera-publica.component';

describe('CabeceraPublicaComponent', () => {
  let component: CabeceraPublicaComponent;
  let fixture: ComponentFixture<CabeceraPublicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CabeceraPublicaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CabeceraPublicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
