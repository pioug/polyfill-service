Object.defineProperty(Node.prototype, 'baseURI', {
  get: function() {
    console.log('test')
    var base = (this.ownerDocument || this).querySelector('base');
    return (base || window.location).href;
  },
  configurable: true,
  enumerable: true
});
