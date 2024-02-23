import { int, integer, sqliteTable, text } from 'drizzle-orm/sqlite-core'

export const users = sqliteTable('Users', {
  id: text('id').primaryKey(),
  profile_id: integer('profile_id').notNull(),
  plan: text('plan'),
  payment_gateway_customer_id: text('payment_gateway_customer_id'),
  payment_gateway_session_id: text('payment_gateway_session_id'),
  plan_expires: text('plan_expires'),
  free_trial_used: int('free_trial_used').default(0),
})