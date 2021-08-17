import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailResulComponent } from './detail-resul.component';

describe('DetailResulComponent', () => {
  let component: DetailResulComponent;
  let fixture: ComponentFixture<DetailResulComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailResulComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailResulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
