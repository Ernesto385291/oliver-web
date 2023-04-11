import { useKeenSlider } from "keen-slider/react";

import Image from "next/image";

import { AspectRatio } from "@/components/ui/aspect-ratio";

import "keen-slider/keen-slider.min.css";

export const LeftContent = () => {
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
  });

  const carouselItems = [
    {
      image: "/images/pages/auth/step-1.jpg",
      text: "Estás listo para ahorrar tiempo y dinero",
      text2:
        "Podrás organizar tu negocio desde la palma de tu mano, ventas, gastos, deudas por cobrar, empleados, inventario y mucho más.",
    },
    {
      image: "/images/pages/auth/step-2.jpeg",
      text: "Aumenta tus ventas 24 horas al día",
      text2:
        "Crea tu catálogo/tienda en línea  con tus productos y/o servicios y compártela con tus clientes.",
    },
    {
      image: "/images/pages/auth/step-3.jpeg",
      text: "Controla tu inventario en un solo clic",
      text2:
        "Saca el mayor potencial de tus productos y servicios, cuál producto se vende más, controla máximos y mínimos etc",
    },
  ];

  return (
    <aside className="bg-[#EBFAFA] hidden md:col-span-5 flex-1 md:flex justify-center items-center">
      <div ref={sliderRef} className="keen-slider">
        {carouselItems.map((item, index) => (
          <div
            key={index}
            className="keen-slider__slide flex flex-col justify-center items-center text-center space-y-4"
          >
            <div className="w-1/2">
              <AspectRatio ratio={1 / 1}>
                <Image
                  src={item.image}
                  alt={item.text}
                  fill
                  className="rounded-lg object-cover"
                />
              </AspectRatio>
            </div>
            <h1 className="w-4/6 text-[#1B45F6] text-2xl">{item.text}</h1>
            <p className="w-4/6 text-sm text-gray-500">{item.text2}</p>
          </div>
        ))}
      </div>
    </aside>
  );
};
