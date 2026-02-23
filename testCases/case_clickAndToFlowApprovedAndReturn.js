import loginFlow from "../flows/loginFlow.js";
import clickSomeThing from "../tasks/clickSomeThing.js";
import draftToFlowApprovedAndReturn from "../tasks/draftToFlowApprovedAndReturn.js"
import { runStep } from "../utils/runStep.js";

export async function runCase(page) {

  const CASE = "loginClickAndDraftToFlowApprovedAndReturn";

  await runStep(CASE, "loginFlow", () =>
    loginFlow(page)
  );

  await runStep(CASE, "clickSomeThing", () =>
    clickSomeThing(page)
  );

  await runStep(CASE, "draftToFlowApprovedAndReturn", () =>
    draftToFlowApprovedAndReturn(page)
  );

}
