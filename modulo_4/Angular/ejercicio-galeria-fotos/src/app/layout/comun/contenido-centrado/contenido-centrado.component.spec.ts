import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenidoCentradoComponent } from './contenido-centrado.component';

describe('ContenidoCentradoComponent', () => {
  let component: ContenidoCentradoComponent;
  let fixture: ComponentFixture<ContenidoCentradoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContenidoCentradoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContenidoCentradoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
