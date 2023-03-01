import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

/* test.skip("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
}); */

test.skip("ekrana link etiketi basilir", () => {
  //callback(baska fonk. calistiriyor)
  render(<App />); //VDOM ile control edilecek componnet
  const link = screen.getByText(/learn react/i); //insensetive harflare duyarli
  expect(link).toBeInTheDocument(); //matcher (eşleştirici)
});

// TDD (TEST DRIVEN DEVELOPMENT) //once test sonra proje

// BDD ( BEHAVIOR DRIVER DEVEPOMENT) //once proje sonra test

//bir buton olsun ona basinca rengi ve icindeki yazi degissin(kirmizi > maviye dondur | mavi > kirmizi dondur)
test("buton dogru renge ve yaziya sahip", () => {
  render(<App />); //vdom
  const colorBtn = screen.getByRole("button", { name: "Change to blue" }); //selector(secici

  //ilk rengi kirmizidir
  expect(colorBtn).toHaveStyle({ backgroundColor: "red" }); //matcher

  //butona tiklama
  fireEvent.click(colorBtn);

  //butonun rengi mavi olur mu?
  expect(colorBtn).toHaveStyle({ backgroundColor: "blue" });

  //have correct text?
  expect(colorBtn).toHaveTextContent("Change to red");
});
