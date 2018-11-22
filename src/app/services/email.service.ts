import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { map } from 'rxjs/operators';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';


@Injectable()
export class EmailService {
  public emailList = new BehaviorSubject<any>('');
  constructor(private _http:HttpClient) {
    this.getPostList();
  }

  getEmailList(): Array<Object> {
    // return [
    //   {
    //     id: 1,
    //     subject: "Lorem ipsum is a dummy text",
    //     content:
    //       "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old",
    //     userimage: "./assets/images/avatar/1.png",
    //     read: false
    //   },
    //   {
    //     id: 2,
    //     subject: "Lorem ipsum is a dummy text",
    //     content:
    //       "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old",
    //     userimage: "./assets/images/avatar/2.png",
    //     read: true
    //   },
    //   {
    //     id: 3,
    //     subject: "Lorem ipsum is a dummy text",
    //     content:
    //       "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old",
    //     userimage: "./assets/images/avatar/3.png",
    //     read: true
    //   }
    // ];

    return [
      {
        id: 1,
        subject: "Alexander Pierce",
        content:"Graphic Design",
        userimage: "./assets/images/avatar/1.png",
        read: false
      },
      {
        id: 2,
        subject: "Norman",
        content:"Frontend Developer",
        userimage: "./assets/images/avatar/2.png",
        read: true
      },
      {
        id: 3,
        subject: "John",
        content:"Technical Analyst",
        userimage: "./assets/images/avatar/3.png",
        read: true
      }
    ];
  }

  getPosts(){
    return this._http.get('https://jsonplaceholder.typicode.com/posts');
  }

  getPostList(){
    this.emailList.next([
      {
        id: 1,
        subject: "Lorem ipsum is a dummy text",
        content:
          "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old",
        userimage: "./assets/images/avatar/1.png"
      },
      {
        id: 2,
        subject: "Lorem ipsum is a dummy text",
        content:
          "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old",
        userimage: "./assets/images/avatar/2.png"
      },
      {
        id: 3,
        subject: "Lorem ipsum is a dummy text",
        content:
          "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old",
        userimage: "./assets/images/avatar/3.png"
      }
    ])
  }
}
