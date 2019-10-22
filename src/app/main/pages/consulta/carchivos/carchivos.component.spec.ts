import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarchivosComponent } from './carchivos.component';

describe('CarchivosComponent', () => {
  let component: CarchivosComponent;
  let fixture: ComponentFixture<CarchivosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarchivosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarchivosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
