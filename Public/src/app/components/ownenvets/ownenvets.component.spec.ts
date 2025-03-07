import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnenvetsComponent } from './ownenvets.component';

describe('OwnenvetsComponent', () => {
  let component: OwnenvetsComponent;
  let fixture: ComponentFixture<OwnenvetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OwnenvetsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OwnenvetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
