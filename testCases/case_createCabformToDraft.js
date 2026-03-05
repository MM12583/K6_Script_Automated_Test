import loginFlow from "../flows/loginFlow.js";
import createCabformToDraft from "../tasks/createCabformToDraft.js";
import { runStep } from "../utils/runStep.js";

export async function runCase(page) {

  const CASE = "createCabformToDraft";

  await runStep(CASE, "loginFlow", () =>
    loginFlow(page)
  );

  await runStep(CASE, "createCabformToDraft", () =>
    createCabformToDraft(page)
  );
  
}
