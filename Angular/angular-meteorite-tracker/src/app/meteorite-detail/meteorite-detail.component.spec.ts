import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeteoriteDetailComponent } from './meteorite-detail.component';

describe('MeteoriteDetailComponent', () => {
  let component: MeteoriteDetailComponent;
  let fixture: ComponentFixture<MeteoriteDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeteoriteDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeteoriteDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
