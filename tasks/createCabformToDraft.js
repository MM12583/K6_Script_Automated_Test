import { safeClick, safeCheck, waitPageStable } from "../utils/ui.js";

const cfg = JSON.parse(open("./taskConfig/createCabformToDraft.json"));

export default async function createCabformToDraft(page) {
  // 點擊側邊欄                             外                內
  const sidebarItem = page.locator("li:nth-of-type(5) li:nth-of-type(2) > .flex-row-start");
  await safeClick(page, sidebarItem);

  const addBtn = page.getByRole("button", { name: "新增簽核單", exact: true });
  await safeClick(page, addBtn);
  await waitPageStable(page);

  // -- 新增專案 start --
  await safeClick(page, page.locator(".justify-content-between > .align-items-center"));
  
  // // 標題
  await page.locator(".form-group > div > .form-control").fill(cfg.projectName);
  
  // 選專案負責科
  const projectManagerOrgArrow = page
    .locator(".form-group", { hasText: "專案負責科" })
    .locator(".fa-caret-down");
  await safeClick(page, projectManagerOrgArrow);
  
  const projectManagerOrgOption = page.locator("li").getByText(cfg.projectManagerOrg, { exact: true });
  await safeClick(page, projectManagerOrgOption);
  await waitPageStable(page);
  
  // 選專案負責人
  const projectManagerArrow = page
    .locator(".form-group", { hasText: "專案負責人" })
    .locator(".fa-caret-down");
  await safeClick(page, projectManagerArrow);
  
  const projectManagerOption = page.locator("li").getByText(cfg.projectManager, { exact: true });
  await safeClick(page, projectManagerOption);
  await waitPageStable(page);

  await safeClick(page, page.getByRole("button", { name: "確認", exact: true }));
   // -- end --

  // -- 建立簽核單 start --
  // 選專案
  const projecNameArrow = page
    .locator(".form-group", { hasText: "專案名稱" })
    .locator(".fa-caret-down");
  await safeClick(page, projecNameArrow);
  
  const projectNameOption = page.locator("li").getByText(cfg.projectName, { exact: true });
  await safeClick(page, projectNameOption);
  await waitPageStable(page);
  // 申請服務項目
  const flowNameArrow = page
    .locator(".form-group", { hasText: "申請服務項目" })
    .locator(".fa-caret-down");
  await safeClick(page, flowNameArrow);
  
  const flowNameOption = page.locator("li").getByText(cfg.flowName, { exact: true });
  await safeClick(page, flowNameOption);
  await waitPageStable(page);

  // 確定按鈕
  const modalFooter = page.locator(".modal-footer");
  // const confirmBtn = modalFooter.locator("button, a").filter({ hasText: /確[認定]/ }).first();
  const createCabFormBtn = modalFooter.locator("button, a").filter({ hasText: /建立簽核單/ }).first();

  // 編輯負責科
  // const editResponsibleDeptBtn = page.getByRole("button", { name: "編輯負責科", exact: false });
  // await safeClick(page, editResponsibleDeptBtn);
  // await waitPageStable(page);
  // const modalBody = page.locator(".modal-body");
  // const targetRadio = modalBody.getByRole('radio', { name: cfg.projectManagerOrg });
  // await safeClick(page, targetRadio.first());
  // await safeClick(page, confirmBtn);

  // 編輯負責人
  // const editResponsibleManBtn = page.getByRole("button", { name: "編輯負責人", exact: false });
  // await safeClick(page, editResponsibleManBtn);
  // await waitPageStable(page);
  // await safeClick(page, page.locator(".modal-content").getByText(cfg.projectManagerOrg, { exact: true }));
  // const projectRespManagerNameOption = modalBody.getByRole("radio", { name: cfg.projectRespManager });
  // await safeClick(page, projectRespManagerNameOption);
  // await safeClick(page, confirmBtn);

  await safeClick(page, createCabFormBtn);

  // 點擊暫存
  const tempSaveBtn = page.getByText('暫存草稿', { exact: true });
  await safeClick(page, tempSaveBtn);

  // 返回上一頁
  await safeClick(page, page.locator(".page-back > a"));
  await waitPageStable(page);
}