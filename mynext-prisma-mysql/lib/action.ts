"use server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";

const EmployeSchema = z.object({
  name: z.string().min(6),
  email: z.string().min(6).email(),
  phone: z.string().min(10),
});

export const saveEmployee = async (prevState: any, formData: FormData) => {
  const validatedFields = EmployeSchema.safeParse(
    Object.fromEntries(formData.entries())
  );

  if (!validatedFields.success) {
    return {
      Error: validatedFields.error.flatten().fieldErrors,
    };
  }

  try {
    console.log("Success");
  } catch (error) {
    return { message: "Failed to create new Employee" };
  }

  revalidatePath("/employee");
  redirect("/employee");
};
