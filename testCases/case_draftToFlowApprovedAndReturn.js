import loginFlow from "../flows/loginFlow.js";
import draftToFlowApprovedAndReturn from "../tasks/draftToFlowApprovedAndReturn.js"
import { runStep } from "../utils/runStep.js";

export async function runCase(page) {

  const CASE = "draftToFlowApprovedAndReturn";

  await runStep(CASE, "loginFlow", () =>
    loginFlow(page)
  );

  await runStep(CASE, "draftToFlowApprovedAndReturn", () =>
    draftToFlowApprovedAndReturn(page)
  );
}