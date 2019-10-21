import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MdetallesComponent } from './mdetalles.component';

describe('MdetallesComponent', () => {
  let component: MdetallesComponent;
  let fixture: ComponentFixture<MdetallesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MdetallesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MdetallesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
