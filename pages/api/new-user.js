import { PrismaClient } from '@prisma/client'
import randomstring from 'randomstring'

export default function handler(req, res) {

  const prisma = new PrismaClient()
  const token = req.body.token

  async function main() {

    if (token) {
      const existingUser = await prisma.user.findUnique({
        where: {
          token,
        }
      })
  
      if (existingUser) return existingUser
    }

    const newUser = await prisma.user.create({
      data: {
        shared: false,
        email: null,
        token: randomstring.generate(24)
      }
    })

    return newUser
  }

  main()
    .then((user) => {
      res.status(200).json(user)
    })
    .catch(e => {
      throw e
    })
    .finally( async () => {
      await prisma.$disconnect()
    })
}
