import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Sos from "../Sos";

test("when sauces are added and removed", async () => {
  const user = userEvent.setup();
  render(<Sos />);

  //let's select the necessary elements
  const sosSepet = screen.getByRole("heading", { name: /Soslar ücreti:/i });
  const mmSos = await screen.findByRole("checkbox", { name: "M&Ms" });
  const fudgeSos = await screen.findByRole("checkbox", { name: "Hot fudge" });
  const butterSos = await screen.findByRole("checkbox", { name: "Peanut butter cups" });

  //adds mm sauces 
  await user.click(mmSos)
  //adds butter sauces 
  await user.click(butterSos)
  
  expect(sosSepet).toHaveTextContent('4')
  
  //Subtracts butter of sauces 
  await user.click(butterSos)
  expect(sosSepet).toHaveTextContent('2')
  //Subtracts mmsos of sauces 
  await user.click(mmSos)
  expect(sosSepet).toHaveTextContent('0')
  
  //adds and subtracts
  await user.dblClick(mmSos)
  expect(sosSepet).toHaveTextContent('0')
});
