import { chats, personas } from "~~/db/schema"
import { unauthorized } from "~/utils/nuxt"

export default defineEventHandler(async (event) => {
  const orm = event.context.orm
  const user = event.context.user

  if (!user)
    throw unauthorized()

  const values = await orm.query.chats.findMany({
    where: (chats, { eq }) => eq(chats.userId, user.id),
    with: {
      contact: {
        columns: {
          name: true,
        },
      },
      persona: {
        columns: {
          username: true,
          name: true,
        },
      },
    },

  })

  return values
})