import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationsListContainer } from './notifications-list.container';

describe('NotificationsListContainer', () => {
  let component: NotificationsListContainer;
  let fixture: ComponentFixture<NotificationsListContainer>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotificationsListContainer ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotificationsListContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
