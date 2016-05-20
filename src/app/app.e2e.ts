describe('App', () => {

  beforeEach(() => {
    browser.get('/');
  });


  it('should have a title', () => {
    let subject = browser.getTitle();
    let result  = 'fe-config-ng2 demo';
    expect(subject).toEqual(result);
  });

});
