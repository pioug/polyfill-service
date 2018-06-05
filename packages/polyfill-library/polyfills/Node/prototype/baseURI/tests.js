it('equals location.href when <base> is not used', function() {
  var div = document.createElement('div');
  proclaim.equal(div.baseURI, location.href);
})
