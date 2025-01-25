import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GogleVarifcationPage } from './gogle-varifcation.page';

describe('GogleVarifcationPage', () => {
  let component: GogleVarifcationPage;
  let fixture: ComponentFixture<GogleVarifcationPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(GogleVarifcationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
