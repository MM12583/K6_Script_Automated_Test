import { browser } from "k6/browser";
import { runCase as case_loginClick } from "./testCases/case_login_click.js";
import { runCase as case_draftToFlowApprovedAndReturn } from "./testCases/case_draftToFlowApprovedAndReturn.js";
import { runCase as case_clickAndToFlowApprovedAndReturn } from "./testCases/case_clickAndToFlowApprovedAndReturn.js";
import { runCase as case_testParam } from "./testCases/case_testParam.js";
import { runCase as case_createCabformToDraft } from "./testCases/case_createCabformToDraft.js";

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

  const context = await browser.newContext({
    ignoreHTTPSErrors: true, 
  });
  
  const page = await context.newPage();

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
    
    case "createCabformToDraft":
      await case_createCabformToDraft(page);
      break;

    default:
      throw new Error("Unknown CASE");
  }
}
