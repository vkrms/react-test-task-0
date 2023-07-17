import { PrismaClient } from '@prisma/client'

export default function handler(req, res) {
  const prisma = new PrismaClient()

  const { id, shared, email } = req.body

  // console.log('req.body', req.body)

  async function main() {
    if (!id) throw new Error('id is required')

    return await prisma.user.update({
      where: { id },
      data: { shared, email },
    })
  }

  main()
    .then((updatedUser) => {
      return res.status(200).json(updatedUser)
    })
    .catch(e => {
      console.error(e)
      return res.status(400).json({ message: e.message })
    })
    .finally(async () => {
      await prisma.$disconnect()
    })
}
