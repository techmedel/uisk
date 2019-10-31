import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MresumenComponent } from './mresumen.component';

describe('MresumenComponent', () => {
  let component: MresumenComponent;
  let fixture: ComponentFixture<MresumenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MresumenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MresumenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
