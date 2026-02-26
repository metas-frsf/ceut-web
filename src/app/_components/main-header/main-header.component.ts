import { Component, input } from '@angular/core';

import { NgbTooltip, NgbDropdown, NgbDropdownToggle, NgbDropdownMenu } from '@ng-bootstrap/ng-bootstrap';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.scss'],
  imports: [NgbTooltip, RouterLink, NgbDropdown, NgbDropdownToggle, NgbDropdownMenu],
})
export class MainHeaderComponent {
  activePage = input({ name: '', messenger: '', instagram: '', logo: '' });
}
