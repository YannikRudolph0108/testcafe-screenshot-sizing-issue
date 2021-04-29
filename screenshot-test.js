fixture `Screenshot test suite`
  .page `http://127.0.0.1:8080`;

test('Screenshot test', async t => {
  await t
    .resizeWindow(1050, 768)
    .takeScreenshot({
      path: '/dummy-screenshot' + new Date().getTime(),
      fullPage: true
    });
});