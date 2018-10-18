import store from "./store";
const { dispatch } = store;

export const GET_JOBS = () => {
  dispatch({ type: "GET_JOBS_REQUEST" });

  return window
    .fetch("https://api.github.com/repos/frontendbr/vagas/issues")
    .then(_ => _.json())
    .then(jobs => {
      // API limit usage returns `.message` property in a 200 request.
      if (jobs.message) {
        dispatch({ type: "GET_JOBS_FAILURE" });
        return;
      }

      dispatch({ type: "GET_JOBS_SUCCESS", jobs });
    });
};

export const SHOW_JOB_MODAL = card => {
  const body = card.body;
  const headers = { "Content-Type": "text/plain" };
  const req = { method: "POST", body, headers };

  return fetch("https://api.github.com/markdown/raw", req)
    .then(_ => _.text())
    .then(_ => {
      dispatch({ type: "SHOW_JOB_MODAL", card: { ...card, bodyRendered: _ } });
    });
};

export const HIDE_JOB_MODAL = () => {
  dispatch({ type: "HIDE_JOB_MODAL" });
};
