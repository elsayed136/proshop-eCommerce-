import bcrypt from 'bcryptjs'

const salt = bcrypt.genSaltSync(10)

const users = [
  {
    name: 'Admin',
    email: 'admin@mail.com',
    password: bcrypt.hashSync('123456', salt),
    isAdmin: true,
  },
  {
    name: 'User',
    email: 'user@mail.com',
    password: bcrypt.hashSync('123456', salt),
  },
]

export default users
