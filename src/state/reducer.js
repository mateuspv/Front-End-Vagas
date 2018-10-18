export default (state, action) => {
  switch (action.type) {
    case 'GET_JOBS_REQUEST':
      return { ...state, isLoading: true }

    case 'GET_JOBS_SUCCESS':
      return { ...state, jobs: [...action.jobs], isLoading: false }

    case 'JOBS_FILTER':
      return { ...state, query: action.query, isLoading: false }

    case 'SHOW_JOB_MODAL':
      return { ...state, modal: { isVisible: true, card: action.card } }

    case 'HIDE_JOB_MODAL':
      return {
        ...state, modal: { isVisible: false, card: {} }
      }

    default:
      return state;
  }
}
