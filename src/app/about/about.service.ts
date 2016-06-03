import { Injectable } from '@angular/core';

@Injectable()
export class AboutService {
  private _author: Object = {
    name: 'devlee',
    email: 'devlee@outlook.com'
  };
  constructor() {

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
}
