import { CommunityService } from '../../services/community.service';
import { StackOverflowPost } from '../../models/stack-overflow-post';
import { Component, OnInit } from '@angular/core';

/**
 * Stack overflot component. Used to render cards for each posts.
 */
@Component({
  selector: 'app-stackoverflow',
  templateUrl: './stackoverflow.component.html',
  styleUrls: ['./stackoverflow.component.scss']
})
export class StackoverflowComponent implements OnInit {

  // The posts to show
  stackOverflowPosts: StackOverflowPost[] = [];

  constructor(private communityService: CommunityService) { }

  ngOnInit() {
    this.communityService.getStackOverflowPosts().subscribe(posts => {
      this.stackOverflowPosts = posts;
    });
  }

}
