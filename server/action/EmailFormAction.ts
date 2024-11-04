"use server"
import { EmailFormSchema } from "@/types/EmailFormSchema";
import { createSafeActionClient } from "next-safe-action";
import { sendEmail } from "./Email";
import { redirect } from "next/navigation";
import { headers } from "next/headers";
import { rateLimit } from "@/lib/rateLimit";

const actionClient = createSafeActionClient();

export const emailFormAction = actionClient.schema(EmailFormSchema).action(async ({ parsedInput: { name, email, message } }) => {
const ip = headers().get("x-forwarded-for") ?? "unknown";
  const isRateLimited = rateLimit(ip);
  if (isRateLimited) {
    // Do your stuff if the user is rate limited
    await sendEmail(name, email, message)
    return {
        success: "Successfully sent email. Thank you!",
      };
  }
  // Do your stuff if the user isn't rate limited
  return { failure: "Something went wrong!" };
 
  
})
