import { Component, OnInit } from '@angular/core';
import { WindowRefService } from '../../service/window-ref/window-ref.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(private winRef: WindowRefService) { }

  ngOnInit(): void {
  }

  ngAfterContentInit(): void {
    // this.winRef.nativeWindow.alert('hello');
  }

}
