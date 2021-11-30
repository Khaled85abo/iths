import { initActions, initState } from "./model";
import controll from "./controll";
import view from "./view";

/**
 *
 * Entry Point
 *
 */
//#region
function main() {
  initState();
  initActions();
}

main();

//#endregion
