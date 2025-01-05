import { NgClass, NgFor, NgIf, NgStyle, SlicePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CommonServiceService } from '../../../../utlity/services/common-service.service';

@Component({
  selector: 'app-right-sidebar',
  imports: [NgFor, NgStyle, NgClass, SlicePipe, NgIf,],
  templateUrl: './right-sidebar.component.html',
  styleUrl: './right-sidebar.component.scss'
})
export class RightSidebarComponent implements OnInit {

  userDetails: any;
  coursesData: any[] = [];

  constructor(
    private cs: CommonServiceService,
  ) {

  }
  ngOnInit(): void {
    this.userDetails = this.cs.userDetails;
    this.coursesData = this.cs.courseReminders;
  }
}
