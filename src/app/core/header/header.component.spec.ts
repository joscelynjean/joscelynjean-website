import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should detect mobile if window width smaller than 756px', () => {
    const windowSpy = spyOnProperty(window, 'innerWidth').and.returnValue(755);
    component.ngOnInit();

    expect(windowSpy).toHaveBeenCalled();
    expect(window.innerWidth).toBe(755);
    expect(component.isMobile).toBeTruthy();
  });

  it('should toggle menu when clicking on the hamburger icon in mobile mode', () => {

    // Resize to mobile
    component.onResize({ target: { innerWidth: 755 } });
    expect(component.isMobile).toBeTruthy();
    expect(component.showMenu).toBeFalsy();

    // Should show the menu on first click
    component.onMenuClick();
    expect(component.showMenu).toBeTruthy();

    // Should hide the menu on second click
    component.onMenuClick();
    expect(component.showMenu).toBeFalsy();

    // Resize to desktop
    component.onResize({ target: { innerWidth: 756 } });
    expect(component.isMobile).toBeFalsy();
    expect(component.showMenu).toBeTruthy();

    // Click on the menu shouldn't affect visibility
    component.onMenuClick();
    expect(component.showMenu).toBeTruthy();

    // Resize to desktop
    component.onResize({ target: { innerWidth: 757 } });
    expect(component.isMobile).toBeFalsy();
    expect(component.showMenu).toBeTruthy();
  });

});
