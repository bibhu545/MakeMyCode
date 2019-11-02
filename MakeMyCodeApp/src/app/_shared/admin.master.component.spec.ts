import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Admin.MasterComponent } from './admin.master.component';

describe('Admin.MasterComponent', () => {
  let component: Admin.MasterComponent;
  let fixture: ComponentFixture<Admin.MasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Admin.MasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Admin.MasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
