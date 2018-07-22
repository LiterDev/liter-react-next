export const actionTypes = {
  TOGGLE_APPDRAWER: "TOGGLE_APPDRAWER",
  INCREMENT: "INCREMENT"
};

export function toggleAppDrawer() {
  return { type: actionTypes.TOGGLE_APPDRAWER };
}

export function increment() {
  return { type: actionTypes.INCREMENT };
}
