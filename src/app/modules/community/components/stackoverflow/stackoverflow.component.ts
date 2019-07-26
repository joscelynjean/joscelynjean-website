import { CommunityService } from '../../services/community.service';
import { StackOverflowPost } from '../../models/stack-overflow-post';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stackoverflow',
  templateUrl: './stackoverflow.component.html',
  styleUrls: ['./stackoverflow.component.scss']
})
export class StackoverflowComponent implements OnInit {

  stackOverflowPosts: StackOverflowPost[] = [];

  constructor(private communityService: CommunityService) { }

  ngOnInit() {
    this.communityService.getStackOverflowPosts().subscribe(posts => {
      this.stackOverflowPosts = posts;
    });
  }

}
