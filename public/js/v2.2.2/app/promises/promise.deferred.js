define([],()=>{"use strict";return class DeferredPromise{constructor(){this._promise=new Promise((t,e)=>{this.resolve=t,this.reject=e}),this.then=this._promise.then.bind(this._promise),this.catch=this._promise.catch.bind(this._promise)}set data(t){return t&&(this._data=t),this._data}get data(){return this._data}get[Symbol.toStringTag](){return"Promise"}}});
//# sourceMappingURL=promise.deferred.js.map
