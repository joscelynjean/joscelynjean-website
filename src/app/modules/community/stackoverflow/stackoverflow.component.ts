import { StackoverflowService } from '../../services/community.service';
import { StackoverflowPost } from '../../models/stack-overflow-post';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stackoverflow',
  templateUrl: './stackoverflow.component.html',
  styleUrls: ['./stackoverflow.component.scss']
})
export class StackoverflowComponent implements OnInit {

  stackoverflowPosts: StackoverflowPost[] = [];

  constructor(private soService: StackoverflowService) { }

  ngOnInit() {
    this.soService.getStackoverflowPosts().subscribe(posts => {
      this.stackoverflowPosts = posts;
    });
  }

}
