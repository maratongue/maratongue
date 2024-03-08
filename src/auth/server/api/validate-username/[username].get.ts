import { eq } from 'drizzle-orm'
import { z } from 'zod'
import { usernameSchema, users } from '~/src/base/server/db/schema'
import { getValidated } from '~/src/base/utils/h3'

export default eventHandler(async (event) => {
  const orm = event.context.orm

  const { username } = await getValidated(event, 'params', z.object({ username: z.string() }))

  if (!usernameSchema.safeParse(username).success) {
    return { valid: false }
  }

  const usernameTaken =
    (
      await orm
        .select()
        .from(users)
        .where(eq(users.username, username))
    ).at(0) !== undefined

  return {
    valid: !usernameTaken,
  }
})
