import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibroeditorialComponent } from './libroeditorial.component';

describe('LibroeditorialComponent', () => {
  let component: LibroeditorialComponent;
  let fixture: ComponentFixture<LibroeditorialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LibroeditorialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LibroeditorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
