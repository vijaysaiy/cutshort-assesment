export const initialState = {
  fullname: "",
  displayName: "",
  workspaceName: "",
  workspaceUrl: "",
  planType: "self",
};

export function reducer(state, action) {
  switch (action.type) {
    case "FULLNAME":
      return { fullname: action.payload };
    case "DISPLAYNAME":
      return { displayName: action.payload };
    case "WORKSPACENAME":
      return { workspaceName: action.payload };
    case "WORKSPACEURL":
      return { workspaceUrl: action.payload };
    case "PLANTYPE":
      return { planType: action.payload };
    default:
      throw new Error();
  }
}
