describe('Example', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  // beforeEach(async () => {
  //   await device.reloadReactNative();
  // });

  it('should have welcome screen', async () => {
    await expect(element(by.text('Welcome, Natanael'))).toBeVisible();
  });

  it('Shoul add new skill', async () => {
    await element(by.id('skill-textinput')).clearText()
    await element(by.id('skill-textinput')).typeText('opaaaaaa');
    await element(by.id('skill-textinput')).tapReturnKey();

    await element(by.id('button-add')).tap();
    await element(by.id('skill-textinput')).clearText()

    await expect(element(by.text('opaaaaaa'))).toBeVisible();
    // await expect(element(by.id('email'))).toNotExist();
  });

  it('Shoul scroll all list', async () => {
    await element(by.id('skill-textinput')).typeText('opaaaaaa');
    await element(by.id('skill-textinput')).tapReturnKey();

    await element(by.id('button-add')).multiTap(12)
    await element(by.id('skill-textinput')).clearText()

    await element(by.id('FlatList')).scrollTo('bottom');
  });
});
