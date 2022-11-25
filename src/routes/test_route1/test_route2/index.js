function Get(req, res, url, payload) {
  res.json({ Text: 'Root Get' })
}

function Options(req, res) {
  res.json({ Text: 'Root Options' })
}

function Post(req, res, payload) {
  res.json({ contentType: req.headers['content-type'], payload })
}

export { Get, Options, Post }
