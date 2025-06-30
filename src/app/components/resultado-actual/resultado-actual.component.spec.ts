import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultadoActualComponent } from './resultado-actual.component';

describe('ResultadoActualComponent', () => {
  let component: ResultadoActualComponent;
  let fixture: ComponentFixture<ResultadoActualComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultadoActualComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultadoActualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
