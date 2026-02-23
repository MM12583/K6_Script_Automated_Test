import { safeClick, safeCheck } from "../utils/ui.js";

export default async function draftToFlowApprovedAndReturn(page) {

  await safeClick(
    page,
    page.locator("li:nth-of-type(5) li:nth-of-type(2) > .flex-row-start")
  );

  await safeClick(
    page,
    page.getByRole("cell", { name: "Frank_TEST_整份退回", exact: true })
  );

  await safeClick(page, page.locator("div:nth-of-type(3) .edit"));

  await safeClick(page, page.locator(".btn-primary"));

  await safeClick(
    page,
    page.locator("li:nth-of-type(2) > .align-items-center")
  );

  await safeClick(
    page,
    page.locator("tr:nth-of-type(1) > td:nth-of-type(2) .ellipsis-text")
  );

  await safeClick(page, page.locator("div:nth-of-type(3) .edit"));

  await safeClick(page, page.locator(".text-nowrap").first());
  
  await safeClick(
    page,
    page.locator("li:nth-of-type(3) > .align-middle")
  );

  await safeCheck(
    page,
    page.getByRole("radio", { name: "同意", exact: true })
  );

  await safeClick(
    page,
    page.locator(".justify-content-between > .btn")
  );

  await safeClick(page, page.locator(".btn-danger"));

  await safeClick(
    page,
    page.getByRole("button", { name: "確認", exact: true })
  );
}