import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CnoticiasComponent } from './cnoticias.component';

describe('CnoticiasComponent', () => {
  let component: CnoticiasComponent;
  let fixture: ComponentFixture<CnoticiasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CnoticiasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CnoticiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
