import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutosNuevosComponent } from './autos-nuevos.component';

describe('AutosNuevosComponent', () => {
  let component: AutosNuevosComponent;
  let fixture: ComponentFixture<AutosNuevosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutosNuevosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutosNuevosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
