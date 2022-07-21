// eventBus.js
export default class EventBus{
  events:any
  constructor(){
    this.events = {};
  }
  emit(eventName:string, data:any) {
    if (this.events[eventName]) {
      this.events[eventName].forEach(function(fn:any) {
        fn(data);
      });
    }
  }
  on(eventName:string, fn:Function) {
    this.events[eventName] = this.events[eventName] || [];
    this.events[eventName].push(fn);
  }

  off(eventName:string, fn:Function) {
    if (this.events[eventName]) {
      for (var i = 0; i < this.events[eventName].length; i++) {
        if (this.events[eventName][i] === fn) {
          this.events[eventName].splice(i, 1);
          break;
        }
      };
    }
  }
}