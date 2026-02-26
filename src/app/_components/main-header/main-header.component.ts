import { Component, Input } from '@angular/core';
import { NgIf } from '@angular/common';
import { NgbTooltip, NgbDropdown, NgbDropdownToggle, NgbDropdownMenu } from '@ng-bootstrap/ng-bootstrap';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.scss'],
  imports: [NgIf, NgbTooltip, RouterLink, NgbDropdown, NgbDropdownToggle, NgbDropdownMenu],
})
export class MainHeaderComponent {
  @Input() activePage = { name: '', messenger: '', instagram: '', logo: '' };
}
