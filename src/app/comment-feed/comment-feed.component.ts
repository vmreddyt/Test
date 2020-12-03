import { Component, OnInit } from "@angular/core";
import { FormGroup,FormControl } from '@angular/forms';
import { debounceTime, switchMap, distinctUntilChanged, distinctUntilKeyChanged, shareReplay } from "rxjs/operators";

import { CommentService } from "./../../services/comment.service";

@Component({
  selector: "app-comment-feed",
  templateUrl: "./comment-feed.component.html",
  styleUrls: ["./comment-feed.component.css"]
})
export class CommentFeedComponent implements OnInit {
  comments: Comment[];
  errorMessage = "";
  myForm: FormGroup;

  constructor(private commentService: CommentService) {}

  ngOnInit() {  
    this.formBlock();
    this.getCommetsList();

  /*
  * Search a Comment related
  */
    this.myForm.get('searchCommentData').valueChanges.pipe(
      debounceTime(500),
      distinctUntilChanged(),
      // retry(3)
      // retryWhen()
      switchMap((data) => this.commentService.searchComment(data)),
      shareReplay()
      ).subscribe((result) =>  {
        this.comments = [];
        this.comments = result;
      });

      // this._appService
      // .getData(500)
      // .pipe(
      //   retryWhen(genericRetryStrategy()),
      //   catchError(error => of(error))
      // )
      // .subscribe(console.log);
  }

  
//   const getData = (param) => {
//   return of(`retrieved new data with param ${param}`).pipe(
//     delay(1000)
//   )
// }

// // using a regular map
// from([1,2,3,4]).pipe(
//   map(param => getData(param))
// ).subscribe(val => val.subscribe(data => console.log(data)));

// // using map and mergeAll
// from([1,2,3,4]).pipe(
//   map(param => getData(param)),
//   mergeAll()
// ).subscribe(val => console.log(val));
  
 // You might also have heard about flatMap. FlatMap is an alias of mergeMap and behaves in the same way. Don’t get confused there!

// // using mergeMap
// from([1,2,3,4]).pipe(
//   mergeMap(param => getData(param))
// ).subscribe(val => console.log(val));

  /*
  * Intiale form
  */
  formBlock() {
    this.myForm = new FormGroup({
      searchCommentData: new FormControl(''),
      addCommentData: new FormControl(''),
    });
  }

  resetCommentFeed() {
    this.commentService.resetComments().subscribe( result => {
      this.getCommetsList();
    })
  }

  /*
  * Get Comments List
  */
  getCommetsList() {
    this.myForm.reset();
    this.commentService.getCommetsList().subscribe( result => {
      this.comments = [];
      this.comments = result;
    });
  }

  /*
  * Post a Comment or Add a comment
  */
  addComment() {
     let obj = {
      id: this.comments[this.comments.length - 1]['id'] + 1,
      text: this.myForm.get('addCommentData').value
    }
    this.commentService.addComment(obj).subscribe( result => {
      this.getCommetsList();
    });
  }

  /*
  * Delete a Comment
  */
  deleteComment(id) {
    this.commentService.deleteComment(id).subscribe( result => {
      this.getCommetsList();
    });
  }
}
