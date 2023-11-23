import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper";

const Carrosel = () => {
  const [imagens, setImagens] = useState([]);

  // Carregar as imagens
  async function carregarImagens() {
    const imagensDoComputador = await window.FileDialogs.openFile({
      filters: ["image/jpeg", "image/png"],
    });

    setImagens(imagensDoComputador.map((imagem) => {
      return {
        src: imagem.path,
      };
    }));
  }

  // Chamar a função carregarImagens() no método componentDidMount()
  useEffect(() => {
    carregarImagens();
  }, []);

  return (
    <div className="carrosel">
      <Swiper
        className="carrosel"
        slidesPerView={1}
        spaceBetween={10}
        autoplay={true}
        loop={true}
      >
        {imagens.map((imagem) => (
          <SwiperSlide key={imagem.src}>
            <img src={imagem.src} alt="Imagem" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carrosel;
