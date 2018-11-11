import createHistory from "history/createBrowserHistory";
const history = createHistory();

export default {
  ...history,
  location: {
    ...history.location,
    param: history.location.pathname.replace("/", "")
  }
};
