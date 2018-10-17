export const fetchJobs = () =>
  window.fetch('https://api.github.com/repos/frontendbr/vagas/issues')
    .then(_ => _.json())

export const renderMarkdown = (text) => {
  const body = text
  const headers = { "Content-Type": "text/plain" }
  const req = { method: 'POST', body, headers }

  return fetch('https://api.github.com/markdown/raw', req)
    .then(_ => _.text())
}