import { browser } from "k6/browser";
import { runCase as case_loginClick } from "./testCases/case_login_click.js";
import { runCase as case_draftToFlowApprovedAndReturn } from "./testCases/case_draftToFlowApprovedAndReturn.js";
import { runCase as case_clickAndToFlowApprovedAndReturn } from "./testCases/case_clickAndToFlowApprovedAndReturn.js";
import { runCase as case_testParam } from "./testCases/case_testParam.js";

export const options = {
  scenarios: {
    default: {
      executor: "shared-iterations",
      options: {
        browser: {
          type: "chromium",
          locale: "zh-TW",
          ignoreHTTPSErrors: true,
          headless: false
        }
      },
    },
  },
};

export default async function () {
  const page = await browser.newPage();

  switch (__ENV.CASE) {
    case "loginClick":
      await case_loginClick(page);
      break;
    
    case "draftToFlowApprovedAndReturn":
      await case_draftToFlowApprovedAndReturn(page);
      break;

    case "loginClickAndDraftToFlowApprovedAndReturn":
      await case_clickAndToFlowApprovedAndReturn(page);
      break;

    case "testParam":
      await case_testParam(page);
      break;

    default:
      throw new Error("Unknown CASE");
  }
}
