import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuPublicoComponent } from './menu-publico.component';

describe('MenuPublicoComponent', () => {
  let component: MenuPublicoComponent;
  let fixture: ComponentFixture<MenuPublicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuPublicoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuPublicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
