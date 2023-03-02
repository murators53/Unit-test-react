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

test("Sepetteki ürününü sıfırlama işlemi", async () => {
  render(<Cesit />);
  const user = userEvent.setup();

  //sifirlama butonlarini secme
  const btns = await screen.findAllByRole("button", { name: "Ekle" });

  //ekleme islemi
  await user.click(btns[0]);
});
