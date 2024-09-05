import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EscolhaCortePage } from './escolha-corte.page';

describe('EscolhaCortePage', () => {
  let component: EscolhaCortePage;
  let fixture: ComponentFixture<EscolhaCortePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EscolhaCortePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
