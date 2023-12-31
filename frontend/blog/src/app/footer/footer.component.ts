import { Component } from '@angular/core';
import {
  faGithub,
  faLinkedin,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent {
  faGithub = faGithub;
  faTwitter = faTwitter;
  faLinkedin = faLinkedin;
}
