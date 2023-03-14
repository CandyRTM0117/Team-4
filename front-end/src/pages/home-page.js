import "../styles/home-page.css";

export const Homepage = () => {
  return (
    <div className="home-container">
      <div className="header">
        <div className="inside-header">
          <div className="piece">🦕</div>
          <div className="piece">Types of Dinosaur</div>
          <div className="piece">Dinosaurs(A-Z)</div>
          <div className="piece">When did dinosaurs live?</div>
          <div className="piece">How did dinosaurs die?</div>
        </div>
      </div>

      <div className="page1">
        <div className="Welcome">Start exploring dinosaurs</div>
        <div className="example">
          <img alt="Tyra-img" className="Tyra-img"></img>
          <div className="Tyrannosaurus">Tyrannosaurus</div>
          <div className="Tyra-about">
            Тираннозавр махчин амьтан байсан. Цэрдийн галавын үед амьдарч, Хойд
            Америкт амьдарч байжээ. Түүний олдворыг Utah, Coahuila (Mexico),
            Montana зэрэг газраас олжээ.
          </div>
        </div>
        <div className="example">
          <img alt="Tarbo-img" className="Tarbo-img"></img>
          <div className="Tyrannosaurus">Tarbosaurus bataar</div>
          <div className="Tarbo-about">
            Тарбозавр махчин амьтан байв. Цэрдийн галавын үед амьдарч, Ази тивд
            амьдарч байжээ. Түүний олдворыг Hubei (China), Баянхонгор
            (Mongolia), Ömnögovi (Mongolia) зэрэг газраас олжээ.
          </div>
        </div>
        <div className="example">
          <img alt="Spino-img" className="Spino-img"></img>
          <div className="Spinosaurus">Spinosaurus</div>
          <div className="Spino-about">
            Спинозавр махчин амьтан байсан. Цэрдийн галавын үед амьдарч, Африкт
            амьдарч байжээ. Түүний олдворыг Tataouine (Tunisia), Adrar
            (Algeria), Béchar (Algeria) зэрэг газраас олжээ.
          </div>
        </div>
        <div className="example">
          <img alt="Trice-img" className="Trice-img"></img>
          <div className="Triceratops">Triceratops</div>
          <div className="Trice-about">
            Triceratops өвсөн тэжээлтэн байсан. Цэрдийн галавын үед амьдарч,
            Хойд Америкт амьдарч байжээ. Түүний олдворуудыг Хойд Дакота,
            Вайоминг, Саскачеван (Канад) зэрэг газраас олжээ.
          </div>
        </div>
        <div className="example">
          <img alt="Velo-img" className="Velo-img"></img>
          <div className="Velociraptor">Velociraptor</div>
          <div className="Velo-about">
            Velociraptor махчин амьтан байсан. Цэрдийн галавын үед амьдарч, Ази
            тивд амьдарч байжээ. Түүний олдворыг Alberta (Canada), Inner
            Mongolia (China), Batken Region (Kyrgyzstan) зэрэг газраас олжээ.
          </div>
        </div>
        <div className="example">
          <img alt="Stego-img" className="Stego-img"></img>
          <div className="Stegosaurus">Stegosaurus</div>
          <div className="Stego-about">
            Stegosaurus бол өвсөн тэжээлтэн байсан. Тэрээр Юрийн галавын үед
            амьдарч, Европ, Хойд Америкт амьдарч байжээ. Түүний олдворыг Utah,
            Xinjiang (China), South Dakota зэрэг газраас олжээ.
          </div>
        </div>
      </div>
    </div>
  );
};
