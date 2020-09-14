import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PutTodoComponent } from './put-todo.component';

describe('PutTodoComponent', () => {
  let component: PutTodoComponent;
  let fixture: ComponentFixture<PutTodoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PutTodoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PutTodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
