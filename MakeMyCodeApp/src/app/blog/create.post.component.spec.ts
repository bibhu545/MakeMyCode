import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Create.PostComponent } from './create.post.component';

describe('Create.PostComponent', () => {
  let component: Create.PostComponent;
  let fixture: ComponentFixture<Create.PostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Create.PostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Create.PostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
