import { Component, ElementRef, HostListener, input, signal, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.scss'],
  imports: [RouterLink],
})
export class MainHeaderComponent {
  private elementRef = inject(ElementRef);

  activePage = input({ name: '', instagram: '', logo: '' });
  menuOpen = signal(false);

  toggleMenu() {
    this.menuOpen.update((v) => !v);
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    if (this.menuOpen() && !this.elementRef.nativeElement.contains(event.target)) {
      this.menuOpen.set(false);
    }
  }
}
