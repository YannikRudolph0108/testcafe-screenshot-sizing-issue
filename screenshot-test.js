import { ClientFunction } from 'testcafe';
const getClientHeight = ClientFunction(() => window.document.body.scrollHeight);

fixture `Screenshot test`// declare the fixture
  .page `http://127.0.0.1:8080`;  // specify the start page


//then create a test and place your code there
test('My first test', async t => {
  const clientHeight = await getClientHeight();
  await t
    .resizeWindow(1050, 768)
    .takeScreenshot({
      path: '/dummy-screenshot' + new Date().getTime(),
      fullPage: true
    });
});