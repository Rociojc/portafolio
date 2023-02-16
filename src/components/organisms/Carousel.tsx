import { useEffect, useState } from "react";
import { proyectos } from "../../data/Proyecto";
import { BotonCarousel, BotonesContainer, CardsContainer } from "../../styles/organisms/CarouselStyle";
import { Card } from "../molecules/Card";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

export const Carousel = () => {
  const [ card, setCard ] = useState(1);
  const [ mobile, setMobile ] = useState(true);

  useEffect(() => {
    const responsive = () => window.innerWidth < 768 ? (setCard(1), setMobile(true)) : (setCard(0), setMobile(false));
    responsive();
    window.addEventListener("resize", ()=>responsive())
  }, [])

  const prev = () => {
    setCard(card => (card === 0 ? proyectos.length - 1 : card - 1))
  }

  const next = () => {
    setCard((card) => (card === proyectos.length - 1 ? 0 : card + 1));
  };

  return (
    <CardsContainer>
      <div
        style={{
          display: "inline-flex",
          gap: "50px",
          transform: `translateX(-${card * 20}%)`,
          transition: "all 0.5s ease-out",
        }}
      >
        {proyectos.map((proyecto) => {
          return (
            <Card
              key={proyecto.name}
              titulo={proyecto.name}
              imagenPortada={proyecto.image}
              tech={proyecto.tech}
            />
          );
        })}
      </div>
      {
        mobile && 
        <BotonesContainer>
        <BotonCarousel onClick={prev} color="lightSteelBlue">
          <ChevronLeftIcon />
        </BotonCarousel>
        <BotonCarousel onClick={next} color="lightSteelBlue">
          <ChevronRightIcon />
        </BotonCarousel>
      </BotonesContainer>
      }
    </CardsContainer>
  );
}
