export const fetchJobs = () =>
  window.fetch('https://api.github.com/repos/frontendbr/vagas/issues')
    .then(_ => _.json())
