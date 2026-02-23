import loginFlow from "../flows/loginFlow.js";
import testParam from "../tasks/testParam.js";
import { runStep } from "../utils/runStep.js";

export async function runCase(page) {

  const CASE = "testParam";

  await runStep(CASE, "loginFlow", () =>
    loginFlow(page)
  );

  await runStep(CASE, "testParam", () =>
    testParam(page)
  );
  
}
