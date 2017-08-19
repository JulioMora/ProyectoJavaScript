import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarAutoNuevoComponent } from './editar-auto-nuevo.component';

describe('EditarAutoNuevoComponent', () => {
  let component: EditarAutoNuevoComponent;
  let fixture: ComponentFixture<EditarAutoNuevoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarAutoNuevoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarAutoNuevoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
