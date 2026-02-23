import loginFlow from "../flows/loginFlow.js";
import clickSomeThing from "../tasks/clickSomeThing.js";
import { runStep } from "../utils/runStep.js";

export async function runCase(page) {

  const CASE = "loginClick";

  await runStep(CASE, "loginFlow", () =>
    loginFlow(page)
  );

  await runStep(CASE, "clickSomeThing", () =>
    clickSomeThing(page)
  );
  
}
