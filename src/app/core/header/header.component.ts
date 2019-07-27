import { Component, OnInit, ViewChild, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @ViewChild('menuItems')
  menuItems: ElementRef<HTMLUListElement>;

  showMenu = true;
  isMobile = false;

  constructor() { }

  ngOnInit() {
    this.isMobile = this.isSmallWidth(window.innerWidth);
    if (this.isMobile) {
      this.showMenu = false;
    }
  }

  private isSmallWidth(width: number): boolean {
    return width < 756;
  }

  onMenuClick() {
    this.showMenu = !this.isMobile || !this.showMenu;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    const wasMobile = this.isMobile;
    this.isMobile = this.isSmallWidth(event.target.innerWidth);

    if (this.isMobile !== wasMobile) {
      this.showMenu = !this.isMobile;
    }
  }
}
