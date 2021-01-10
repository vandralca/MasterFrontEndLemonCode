import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotoneraGaleriaComponent } from './botonera-galeria.component';

describe('BotoneraGaleriaComponent', () => {
  let component: BotoneraGaleriaComponent;
  let fixture: ComponentFixture<BotoneraGaleriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BotoneraGaleriaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BotoneraGaleriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
