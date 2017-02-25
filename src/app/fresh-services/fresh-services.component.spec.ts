/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FreshServicesComponent } from './fresh-services.component';

describe('FreshServicesComponent', () => {
  let component: FreshServicesComponent;
  let fixture: ComponentFixture<FreshServicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FreshServicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FreshServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
