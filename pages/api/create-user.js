import { PrismaClient } from '@prisma/client'
import randomstring from 'randomstring'

export default function handler(req, res) {
  const prisma = new PrismaClient()

  async function main() {
    const user = await prisma.user.create({
      data: {
        shared: false,
        email: null,
        token: randomstring.generate(24)
      }
    })

    return user
  }

  main()
    .then((mainResult) => {
      res.status(200).json(mainResult)
    })
    .catch(e => {
      throw e
    })
    .finally( async () => {
      await prisma.$disconnect()
    })
}
