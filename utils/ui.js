const DEFAULT_TIMEOUT = 6000;
const DEFAULT_DELAY = 1000;


/**
 * 等待元素可見後點擊
 */
export async function safeClick(page, locator) {
  await locator.waitFor({
    state: "visible",
    timeout: DEFAULT_TIMEOUT,
  });

  await page.waitForTimeout(DEFAULT_DELAY);

  await locator.click();
}


/**
 * 等待並填值
 */
export async function safeFill(page, locator, value) {
  await locator.waitFor({
    state: "visible",
    timeout: DEFAULT_TIMEOUT,
  });

  await page.waitForTimeout(DEFAULT_DELAY);

  await locator.fill(value);
}


/**
 * 等待 checkbox / radio
 */
export async function safeCheck(page, locator) {
  await locator.waitFor({
    state: "visible",
    timeout: DEFAULT_TIMEOUT,
  });

  await page.waitForTimeout(DEFAULT_DELAY);

  await locator.check();
}


/**
 * 等待頁面穩定（SPA推薦）
 */
export async function waitPageStable(page) {
  await page.waitForLoadState("networkidle");
  await page.waitForTimeout(DEFAULT_DELAY);
}