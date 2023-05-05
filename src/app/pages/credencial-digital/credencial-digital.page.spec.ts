import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CredencialDigitalPage } from './credencial-digital.page';

describe('CredencialDigitalPage', () => {
  let component: CredencialDigitalPage;
  let fixture: ComponentFixture<CredencialDigitalPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CredencialDigitalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
