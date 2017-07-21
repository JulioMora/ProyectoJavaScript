import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutosUsadosComponent } from './autos-usados.component';

describe('AutosUsadosComponent', () => {
  let component: AutosUsadosComponent;
  let fixture: ComponentFixture<AutosUsadosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutosUsadosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutosUsadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
