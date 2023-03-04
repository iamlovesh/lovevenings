import { Component } from '@angular/core';
import { faHeart, faMobileAndroidAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'lv-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  faMobileAndroidAlt = faMobileAndroidAlt;
  faHeart = faHeart;
}
