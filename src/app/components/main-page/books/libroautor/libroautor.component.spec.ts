import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibroautorComponent } from './libroautor.component';

describe('LibroautorComponent', () => {
  let component: LibroautorComponent;
  let fixture: ComponentFixture<LibroautorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LibroautorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LibroautorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
