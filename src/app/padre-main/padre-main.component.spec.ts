import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PadreMainComponent } from './padre-main.component';

describe('PadreMainComponent', () => {
  let component: PadreMainComponent;
  let fixture: ComponentFixture<PadreMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PadreMainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PadreMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
