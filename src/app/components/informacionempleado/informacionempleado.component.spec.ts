import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformacionempleadoComponent } from './informacionempleado.component';

describe('InformacionempleadoComponent', () => {
  let component: InformacionempleadoComponent;
  let fixture: ComponentFixture<InformacionempleadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformacionempleadoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InformacionempleadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
