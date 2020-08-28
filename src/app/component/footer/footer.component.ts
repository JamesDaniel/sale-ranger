import { Component, OnInit, Inject, HostListener } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  footerPosition: string = 'relative';


  constructor(@Inject(DOCUMENT) private document: Document) { }

  ngOnInit(): void {
    
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    if (this.isScrollBar()) {
      this.footerPosition = 'relative';
    } else {
      this.footerPosition = 'fixed';
    }
  }

  isScrollBar() {
    return this.document.children.item(0).scrollHeight > this.document.children.item(0).clientHeight;
  }

  ngAfterContentInit(): void {
    this.onResize(null);
  }

}
