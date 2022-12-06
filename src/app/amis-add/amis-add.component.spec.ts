import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmisAddComponent } from './amis-add.component';

describe('AmisAddComponent', () => {
  let component: AmisAddComponent;
  let fixture: ComponentFixture<AmisAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmisAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AmisAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
