"use server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { prisma } from "./prisma";
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
    await prisma.employee.create({
      data: {
        name: validatedFields.data.name,
        email: validatedFields.data.email,
        phone: validatedFields.data.phone,
      },
    });
    console.log("Success");
  } catch (error) {
    return { message: "Failed to create new Employee" };
  }

  revalidatePath("/employee");
  redirect("/employee");
};

export const getEmployeeList = async (query: string) => {
  try {
    const employees = await prisma.employee.findMany({
      select: {
        id: true,
        name: true,
        email: true,
        phone: true,
        createdAt: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });
    return employees;
  } catch (error) {
    throw new Error("Failed to fetch employees data");
  }
};
