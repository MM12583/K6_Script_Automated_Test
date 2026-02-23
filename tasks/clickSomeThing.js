export default async function clickSomeThing(page) {


  const menuA = page.locator(
    "li:nth-of-type(5) li:nth-of-type(2) > .flex-row-start"
  );
  await menuA.waitFor({ state: "visible", timeout: 10000 });
  await page.waitForTimeout(2000); 
  await menuA.click();

  const subA2 = page.locator("li:nth-of-type(2) > .align-items-center");
  await subA2.waitFor({ state: "visible", timeout: 10000 });
  await page.waitForTimeout(2000);
  await subA2.click();

  const subA3 = page.locator("li:nth-of-type(3) > .align-items-center");
  await subA3.waitFor({ state: "visible", timeout: 10000 });
  await page.waitForTimeout(2000);
  await subA3.click();

  const menuB = page.locator(
    "li:nth-of-type(5) li:nth-of-type(1) > .flex-row-start"
  );
  await menuB.waitFor({ state: "visible", timeout: 10000 });
  await page.waitForTimeout(2000);
  await menuB.click();

  const menuAAgain = page.locator(
    "li:nth-of-type(5) li:nth-of-type(2) > .flex-row-start"
  );
  await menuAAgain.waitFor({ state: "visible", timeout: 10000 });
  await page.waitForTimeout(2000);
  await menuAAgain.click();

  const subLast = page.locator("li:nth-of-type(4) > .align-items-center");
  await subLast.waitFor({ state: "visible", timeout: 10000 });
  await page.waitForTimeout(2000);
  await subLast.click();
}
