import { Injectable } from '@angular/core';
import { Jsonp, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';

@Injectable()
export class AboutService {
  private _author: Object = {
    name: 'default name',
    email: 'devlee@outlook.com'
  };
  constructor(private jsonp: Jsonp) {

  }

  get author(): Object {
    return Object.assign({}, this._author);
  }

  set author(prop) {
    throw new Error('不能直接设置author属性');
  }

  get(prop?: any): any {
    const author = this.author;
    return author[prop] || author;
  }

  set(prop: string, value: any): any {
    return this._author[prop] = value;
  }

  getAuthorName(): Observable<string> {
    return this.jsonp.get('http://localhost:3000/api/author/name?callback=JSONP_CALLBACK')
                     .map((res: Response) => {
                       return res.json() || {};
                     })
                     .catch((err: any) => {
                       console.error(err);
                       return Observable.throw(err.message);
                     });
  }
}
