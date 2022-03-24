import { PrismaClient } from '@prisma/client'

export default function handler(req, res) {
  const prisma = new PrismaClient()

  const { token, shared, email } = req.body

  async function main() {
    const updatedUser = await prisma.user.update({
      where: { token },
      data: { shared, email },
    })

    return updatedUser
  }

  main()
    .then((updatedUser) => {
      console.log({updatedUser})
      res.status(200).json(updatedUser)
    })
    .catch(e => {
      throw e
      // TODO: return 400 for unique constraint failure
    })
    .finally( async () => {
      await prisma.$disconnect()
    })
}
