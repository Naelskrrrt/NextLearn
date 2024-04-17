"use client";

import { useFormState } from "react-dom";
import { saveEmployee } from "@/lib/action";
const CreateEmployePage = () => {
  const [state, formAction] = useFormState(saveEmployee, null);
  return (
    <div className="max-w-md mx-auto mt-5">
      <h1 className="text-2xl text-center mb-5 capitalize">Add new Employee</h1>
      <div>
        <form action={formAction}>
          <div className="mb-5">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-900"
            >
              Full Name :
            </label>
            <input
              name="name"
              id="name"
              type="text"
              placeholder="Your FullName"
              className="input input-bordered w-full max-w-xs"
            />
            <div id="name-error" aria-atomic="true" aria-live="polite">
              <p className="mt-2 text-sm  text-red-500">{state?.Error?.name}</p>
            </div>
          </div>
          <div className="mb-5">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-900"
            >
              Email :
            </label>
            <input
              name="email"
              id="email"
              type="text"
              placeholder="Your Email"
              className="input input-bordered w-full max-w-xs"
            />
            <div id="name-error" aria-atomic="true" aria-live="polite">
              <p className="mt-2 text-sm  text-red-500 flex flex-col">
                {state?.Error?.email}
              </p>
            </div>
          </div>
          <div className="mb-5">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-900"
            >
              Phone Number :
            </label>
            <input
              name="phone"
              id="phone"
              type="text"
              placeholder="Your Phone number"
              className="input input-bordered w-full max-w-xs"
            />
            <div id="name-error" aria-atomic="true" aria-live="polite">
              <p className="mt-2 text-sm  text-red-500 flex flex-col">
                {state?.Error?.phone}
              </p>
            </div>
          </div>
          <button className="btn btn-neutral">Save</button>
        </form>
      </div>
    </div>
  );
};

export default CreateEmployePage;
