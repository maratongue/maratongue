import { ApiContext } from "#framework/api";
import { Context } from "hono";
import Stripe from "stripe";
import { activePlan, cancelSubscription } from "../services/plan";
import { getPlan } from "../utils/stripe";

export async function handleCheckoutCompleted(
  e: Stripe.CheckoutSessionCompletedEvent,
  c: Context<ApiContext>
) {
  const orm = c.get("orm");

  const session = e.data.object;
  const stripeCustomerId = session.customer as string;
  const userId = session.client_reference_id;
  const plan = getPlan(session);

  if (!userId) {
    throw new Error("userId not found");
  }

  if (!plan) {
    throw new Error("plan not found");
  }

  const isPaymentAsync = session.payment_status !== "paid";

  if(isPaymentAsync) {
    return;
  }

  await activePlan(orm, userId, stripeCustomerId, plan);
}

export async function handleAsyncPaymentSucceeded(
  e: Stripe.CheckoutSessionAsyncPaymentSucceededEvent,
  c: Context<ApiContext>
) {
  const orm = c.get("orm");
  const session = e.data.object;
  const stripeCustomerId = session.customer as string;
  const userId = session.client_reference_id;
  const plan = getPlan(session);

  if (!userId) {
    throw new Error("client_reference_id is null");
  }

  if (!plan) {
    throw new Error("plan not found");
  }

  const isPaid = session.payment_status === "paid";

  if(!isPaid) {
    return;
  }

  await activePlan(orm, userId, stripeCustomerId, plan);
}

export async function handleCustomerSubscriptionDeleted(
  e: Stripe.CustomerSubscriptionDeletedEvent,
  c: Context<ApiContext>
) {
  const orm = c.get("orm");
  const session = e.data.object;
  const stripeCustomerId = session.customer as string;

  if (!stripeCustomerId) {
    throw new Error("stripeCustomerId not found");
  }

  await cancelSubscription(orm, stripeCustomerId);
}