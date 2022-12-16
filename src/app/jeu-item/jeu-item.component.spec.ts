import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JeuItemComponent } from './jeu-item.component';

describe('JeuItemComponent', () => {
  let component: JeuItemComponent;
  let fixture: ComponentFixture<JeuItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JeuItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JeuItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
