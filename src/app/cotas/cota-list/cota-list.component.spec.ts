import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CotaListComponent } from './cota-list.component';

describe('CotaListComponent', () => {
  let component: CotaListComponent;
  let fixture: ComponentFixture<CotaListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CotaListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CotaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
