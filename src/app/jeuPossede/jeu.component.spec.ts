import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JeuComponent2 } from './jeuPossede.component';

describe('JeuComponent2', () => {
  let component: JeuComponent2;
  let fixture: ComponentFixture<JeuComponent2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JeuComponent2 ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JeuComponent2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
