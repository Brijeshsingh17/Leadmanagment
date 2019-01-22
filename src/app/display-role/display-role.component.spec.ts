import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayRoleComponent } from './display-role.component';

describe('DisplayRoleComponent', () => {
  let component: DisplayRoleComponent;
  let fixture: ComponentFixture<DisplayRoleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayRoleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayRoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
