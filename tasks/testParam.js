import { safeClick, safeCheck, waitPageStable } from "../utils/ui.js";

export default async function testParam(page) {

  await safeClick(
    page,
    page.locator("li:nth-of-type(5) li:nth-of-type(2) > .flex-row-start")
  );

  await safeClick(
    page,
    page.getByRole("cell", { name: __ENV.SERNO, exact: true })
  );

   await waitPageStable(page);

  const card = page.getByRole('heading', {
    name: __ENV.PROJECT_NAME,
  });

  const cardContainer = card.locator(
    'xpath=ancestor::div[contains(@class,"card-header")]'
  );

  const editBtn = cardContainer.locator('a.edit');

  await safeClick(page, editBtn);
  
  await waitPageStable(page);
}