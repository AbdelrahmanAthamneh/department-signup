import { Form, useActionData } from "react-router-dom";

export default function SignupPage() {
  return (
    <main className="main-container">
      <Form method="post">
        <p style={{ display: "flex", flexDirection: "column" }}>
          <label htmlFor="firstName">First Name</label>
          <input name="firstName" type="text" id="firstName" required />
        </p>
        <p style={{ display: "flex", flexDirection: "column" }}>
          <label htmlFor="lastName">Last Name</label>
          <input name="lastName" type="text" id="lastName" required />
        </p>
        <p>
          <button type="submit">Submit</button>
          <button type="reset">Reset</button>
        </p>
      </Form>
    </main>
  );
}

export async function action({ request }) {
  const formData = await request.formData();

  const data = {
    firstName: formData.get("firstName"),
    lastName: formData.get("lastName"),
  };

  const response = await fetch("http://localhost:3000/api", {
    method: "POST",
    headers: {
      "Content-Type": "Application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error("failed");
  }

  const responseData = await response.json()

  console.log(responseData)
  return null;
}
