import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExplorersComponent } from './explorers.component';

describe('ExplorersComponent', () => {
  let component: ExplorersComponent;
  let fixture: ComponentFixture<ExplorersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExplorersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExplorersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
