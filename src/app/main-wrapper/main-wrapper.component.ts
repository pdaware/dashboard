import { Component, HostListener, OnInit } from '@angular/core';
import { LeftSidebarComponent } from './left-sidebar/left-sidebar.component';
import { RightSidebarComponent } from './right-sidebar/right-sidebar.component';
import { Router, RouterModule } from '@angular/router';
import { NgIf } from '@angular/common';
import { CustomLoaderComponent } from './custom-loader/custom-loader.component';
import { CommonServiceService } from '../../../utlity/services/common-service.service';

@Component({
  selector: 'app-main-wrapper',
  imports: [LeftSidebarComponent, RightSidebarComponent, RouterModule, NgIf, CustomLoaderComponent],
  templateUrl: './main-wrapper.component.html',
  styleUrl: './main-wrapper.component.scss'
})
export class MainWrapperComponent implements OnInit {

  // isLoading: boolean = false;

  @HostListener('window:resize', ['$event'])
  public innerWidth: any;
  isMobile = false;


  constructor(
    public route: Router,
    public cs: CommonServiceService
  ) {

  }
  ngOnInit(): void {

    this.innerWidth = window.innerWidth;
    if (this.innerWidth < 819) {
      this.isMobile = true;
    }
  }



}
