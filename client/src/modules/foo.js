import {inject} from 'aurelia-framework';
import {Router} from 'aurelia-router';
import {Foo} from '../resources/data/foo-object'
@inject(Router, Foo)
export class Foos {
  constructor(router, foos) {
    this.router = router;
    this.foos = foos;
    this.message = 'Foo';
    this.showFooEditForm = false;
  }

  newFoo() {
    this.foo = {
      foo: "",
      woo: ""
    }
    this.showFooEditForm = true;
  }
  async save(){
    if(this.foo && this.foo.foo && this.foo.woo)
        await this.foos.saveFoo(this.foo);
        }  
}