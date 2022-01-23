interface DiscoProps {
  bands: {
    description: string;
    title: string;
    image: string;
    url: string;
    alt: string;
    topPadding: boolean;
    goBack?: boolean;
    moreLink: string;
  }[];
}
export const mockData_discoProps: DiscoProps = {
  bands: [
    {
      description:
        "GP nace en Medellín en 1984 gracias a Jaime Lopez y Oscar Roldán, bajista y baterista respectivamente.En 1988 Mauricio Gomez toma las riendas en GP en la primera guitarra.Tiempo después Guillermo Arroyave un incansable colaborador de esta agrupación...",
      title: "GP",
      image: "/gp-band.jpg",
      alt: "GP foto grupo 1984",
      url: "/",
      topPadding: false,
      goBack: true,
      moreLink: "/gp",
    },
    {
      description:
        "El miércoles 23 de julio de 2008 me llamaron de Bogotá preguntándome por las consecuencias de laseparación de GP encuanto a los integrantes restantes y, qué las cosas que se decían y, que el otro grupo que se hace llamar Genoma Punk…",
      title: "Punkies y Cerebro",
      image: "/pyc.jpg",
      alt: "Punkies y cerebro foto grupo 2021",
      url: "/",
      topPadding: true,
      goBack: false,
      moreLink: "/pyc",
    },
    {
      description:
        "Durante más de 30 años lideró G.P., una de las bandas paisas más explosivas que emergió en los crudos ochenta.En ese tiempo nunca se presentó en festivales como Rock al Parque o Altavoz pues lo consideraban un peligro por su lengua viperina…",
      title: "Jimmy Jazz",
      image: "/jimmy-jazz.jpg",
      alt: "Foto perfil Jimmy jazz - gran cherokee",
      url: "/",
      topPadding: true,
      goBack: false,
      moreLink: "/jimmyjazz",
    },
  ],
};
