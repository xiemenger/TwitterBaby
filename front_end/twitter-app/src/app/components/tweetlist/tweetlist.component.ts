import { Component, OnInit, Input } from '@angular/core';
import { Tweet } from '../../models/tweet.model';
import { EditCommentsDialogComponent } from '../edit-comments-dialog/edit-comments-dialog.component';
import { MatDialog } from '@angular/material'
import { Subscription } from 'rxjs/Subscription';
import { CommentlistComponent } from '../commentlist/commentlist.component';

@Component({
  selector: 'app-tweetlist',
  templateUrl: './tweetlist.component.html',
  styleUrls: ['./tweetlist.component.css']
})
export class TweetlistComponent implements OnInit {
  @Input() tweetlist: Tweet[];
  @Input() username: string;
  yesShow: boolean;
  constructor(public dialog : MatDialog) { }

  ngOnInit() {
  }

  editCommentDialog(tweet){
    console.log("Open a dialog");
    let dialogRef = this.dialog.open(EditCommentsDialogComponent, {
      width: '400px',
      data: tweet,
    })

    // After close the dialog
    dialogRef.afterClosed().subscribe(result => {
      console.log('Dialog is closed: ${result}');
    })

  }

  // showComments(tweet){
  //   this.yesShow = !this.yesShow;
  //   CommentlistComponent.showTweetComments(tweet);
  //   console.log("show comments in webpage");
  // }
}
