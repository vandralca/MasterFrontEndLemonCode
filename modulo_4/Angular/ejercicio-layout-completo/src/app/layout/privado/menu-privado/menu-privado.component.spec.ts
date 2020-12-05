import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuPrivadoComponent } from './menu-privado.component';

describe('MenuPrivadoComponent', () => {
  let component: MenuPrivadoComponent;
  let fixture: ComponentFixture<MenuPrivadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuPrivadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuPrivadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
