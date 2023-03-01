import { fireEvent, getByRole, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Form from "../Form";

test("THe buttons  change when click of checkbox", async () => {
  const user = userEvent.setup(); //promise returns
  render(<Form />);
  //inputun id si ile label htmlFOr birbirine baglandiigndan name girebildik
  const terms = screen.getByRole("checkbox", {
    name: "I have read and accept the terms",
  });
  const button = screen.getByRole('button', { name: /confirm order/i });

  //button inaktif olma duruumu
  //checkbox tikli degil
  expect(terms).not.toBeChecked();

  expect(button).toBeDisabled();

  //accep to  contract
  await user.click(terms);

  //button will now be active
  expect(button).toBeEnabled();

  //button tekrar inaktif olur
  await user.click(terms);
  expect(button).toBeDisabled();
});
