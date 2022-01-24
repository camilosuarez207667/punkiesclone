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
        "G.P. fue fudanda en Medellín en 1984 por Jaime Lopez (bajo, voz) y Óscar Roldán (baterista); En 1988 Mauricio Gómez toma la primera guitarra, tiempo después Guillermo Arroyave un incansable colaborador y Diego Rodríguez (segunda guitarra) se unen en el año 2001.",
      title: "GP",
      image: "/gp-band.jpg",
      alt: "GP foto grupo 1984",
      url: "/",
      topPadding: false,
      goBack: true,
      moreLink: "/bandas/gp",
    },
    {
      description:
        "Esta historia corre alrededor de la comunidad en la que Juan Camilo Restrepo en diciembre de 2005 solicita la creación de una nueva banda para decir lo que a bien nos diera la gana; la propuesta recibida por Jaime López no se hace esperar y se proponen arrancar.",
      title: "Punkies y Cerebro",
      image: "/pyc.jpg",
      alt: "Punkies y cerebro foto grupo 2021",
      url: "/",
      topPadding: true,
      goBack: false,
      moreLink: "/bandas/pyc",
    },
    {
      description:
        "Jaime López conocido como Jimmy Jazz, el cantautor y profesor lleva más de 34 años expresando sus criticas y vivencias a través del punk. Jimmy encuentra en la literatura y el punk forma expresarse con mayor facilidad. Expresar desde un punto crítico las vivencias cotidianas de un país donde los escenarios de violencia, desigualdad social, abusos políticos, religiosos y militar se exhiben día a día.",
      title: "Jimmy Jazz",
      image: "/jimmy-jazz.jpg",
      alt: "Foto perfil Jimmy jazz - gran cherokee",
      url: "/",
      topPadding: true,
      goBack: false,
      moreLink: "/bandas/jimmy-jazz",
    },
  ],
};
