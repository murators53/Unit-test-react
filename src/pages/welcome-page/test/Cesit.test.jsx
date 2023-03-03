import Cesit from "../Cesit";
import {
  findAllByRole,
  render,
  screen,
  getByRole,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
/* 
Komut [All] selector
!get // domda var ise
!query // domda yok ise
!find // async // element domda yok ise
*/

test("API den gelen ger cesit verisini ekrana basar", async () => {
  render(<Cesit />);
  //cesit name alt tagina sahip butun resimleri getirsin
  const images = await screen.findAllByRole("img", { name: "cesit" }); //findAllByRole de await kull. zorunlu
  expect(images).toHaveLength(4); //uzunlugu
});

test("Sepete çeşit ekleme işlemi", async () => {
  const user = userEvent.setup();
  render(<Cesit />);

  //butonlari secelim
  const [mintBtn, vanillaBtn, chocoBtn, caramelBtn] =
    await screen.findAllByRole("button", { name: /ekle/i });

  await user.dblClick(vanillaBtn);

  //sepeti secme islemi
  const sepet2 = screen.getByTestId("ucret"); //?ikinci methods
  const sepet = screen.getByText(/Çeşitler Ücreti:/i);
  expect(sepet2).toHaveTextContent("6");
});

test("Sepetteki urunu sifirlama islemi", async () => {
  render(<Cesit />);
  const user = userEvent.setup();

  //select reset and add buttons
  const addBtn = await screen.findAllByRole("button", { name: "Ekle" });
  const delBtn = await screen.findAllByRole("button", { name: /sıfırla/i });
  const sepet = screen.getByText(/Çeşitler Ücreti:/i);

  //add action
  await user.click(addBtn[0]); //1.buton uzerinden test yapiyoruz
  await user.dblClick(addBtn[1]); //2.buton uzerinden test yapiyoruz

  expect(sepet).toHaveTextContent("9");

  //delete action
  await user.click(delBtn[0]);
  //remainder price text content?
  expect(sepet).toHaveTextContent("6");

  await user.dblClick(addBtn[0]);
  expect(sepet).toHaveTextContent("12");

  //reset action
  await user.click(delBtn[0]);
  expect(sepet).toHaveTextContent("6");
});
