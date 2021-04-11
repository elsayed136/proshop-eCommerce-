export const admin = (req, res, next) => {
  // 401 Unauthorized
  // 403 Forbidden
  if (!req.user.isAdmin) {
    res.status(403)
    throw new Error('Access denied.')
  }
  next()
}
