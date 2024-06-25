import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolbarSideNavComponent } from './toolbar-side-nav.component';

describe('ToolbarSideNavComponent', () => {
  let component: ToolbarSideNavComponent;
  let fixture: ComponentFixture<ToolbarSideNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToolbarSideNavComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToolbarSideNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
