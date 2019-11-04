import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Edit.PostComponent } from './edit.post.component';

describe('Edit.PostComponent', () => {
  let component: Edit.PostComponent;
  let fixture: ComponentFixture<Edit.PostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Edit.PostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Edit.PostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
