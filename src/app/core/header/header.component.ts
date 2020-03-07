import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';

/**
 * The header component. This control the header behavior, which include the menu.
 */
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @ViewChild('menuItems')
  menuItems: ElementRef<HTMLUListElement>;

  // Indicate that the menu is shown.
  showMenu = true;

  // Indicate that it is in a mobile state, based on the width.
  isMobile = false;

  constructor() { }

  ngOnInit() {
    // Determine if in mobile state.
    this.isMobile = this.isSmallWidth(window.innerWidth);
    // If mobile, must hide the menu at the beginning.
    if (this.isMobile) {
      this.showMenu = false;
    }
  }

  /**
   * Determine if the window is considered a small one,
   * based on a breakpoint of 756px.
   * @param width the width to compare with.
   */
  private isSmallWidth(width: number): boolean {
    return width < 756;
  }

  /**
   * When the user click on the menu. When in desktop state,
   * the click should have no effect.
   */
  onMenuClick() {
    this.showMenu = !this.isMobile || !this.showMenu;
  }

  /**
   * Listening on resize event. Must determine if now in mobile state.
   * @param event Resize event
   */
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    const wasMobile = this.isMobile;
    this.isMobile = this.isSmallWidth(event.target.innerWidth);

    if (this.isMobile !== wasMobile) {
      this.showMenu = !this.isMobile;
    }
  }
}
