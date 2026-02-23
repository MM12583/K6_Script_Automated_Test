const cfg = JSON.parse(open("../config.json"));

export default async function loginFlow(page) {

  const baseUrl = cfg.baseUrl;
  const user = cfg.msUser;
  const pass = cfg.msPass;

  await page.goto(baseUrl);

  await Promise.all([
    page.waitForNavigation(),
    page.getByRole("button", { name: "登入"}).click(),
  ]);

  await page
    .getByRole("textbox", {
      name: "Email, phone, or Skype"
    })
    .fill(user);

  await page.getByRole("button", { name: "Next", exact: true }).click();

  await page.getByPlaceholder("Password", { exact: true }).fill(pass);

  await Promise.all([
    page.waitForNavigation(), // 有整頁跳轉
    page.getByRole("button", { name: "Sign in", exact: true }).click(),
  ]);

  await Promise.all([
    page.waitForNavigation(),  
    page.getByRole("button", { name: "Yes", exact: true }).click(),
  ]);

  await page.locator("tr:nth-of-type(3) .ellipsis-text").click();

  await page.getByRole("button", { name: "確認", exact: true }).click();

  // 等待 Loading 完
  await page.waitForLoadState("networkidle");
  
}
