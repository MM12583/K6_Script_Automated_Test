import { check } from "k6";

export async function runStep(caseName, stepName, fn) {
  const label = `${caseName} / ${stepName}`; 
  try {
    await fn();

    check(true, {
      [label]: () => true,
    });

  } catch (err) {
    check(false, {
      [label]: () => true,
    });

    throw err;
  }
}