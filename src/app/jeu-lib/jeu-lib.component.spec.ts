import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JeuLibComponent } from './jeu-lib.component';

describe('JeuLibComponent', () => {
  let component: JeuLibComponent;
  let fixture: ComponentFixture<JeuLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JeuLibComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JeuLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
