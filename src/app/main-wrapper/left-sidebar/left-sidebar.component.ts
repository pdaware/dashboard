import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-left-sidebar',
  imports: [NgFor, NgIf, NgClass, RouterLinkActive, RouterLink],
  templateUrl: './left-sidebar.component.html',
  styleUrl: './left-sidebar.component.scss'
})
export class LeftSidebarComponent {
  linksData: any[] = [
    {
      name: 'Dashboard',
      route: '/dashboard/home'
    },
    {
      name: 'Classes',
      route: '/dashboard/classes'
    },
    {
      name: 'Resources',
      route: '/dashboard/resources'
    },
    {
      name: 'Learning plan',
      route: '/dashboard/learning-plan'
    },
    {
      name: 'Chat',
      route: '/dashboard/chat',
      notfication_count: 4,
    },
    {
      name: 'Settings',
      route: '/dashboard/settings'
    },
  ]

}
