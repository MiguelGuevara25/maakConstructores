export const COMPANY = {
  name: "Maak Constructores",
  handle: "@maakperu",
  phone: "+51 917 375 664",
  phoneRaw: "51917375664",
  location: "Cercado de Lima, Lima, Perú",
  email: "contacto@maakconstructores.com",
  whatsappMessage:
    "Hola Maak Constructores, deseo solicitar una visita técnica y cotización personal para mi [Hogar/Negocio]",
};

export const WHATSAPP_LINK = `https://wa.me/${COMPANY.phoneRaw}?text=${encodeURIComponent(
  COMPANY.whatsappMessage,
)}`;

export const WHATSAPP_LINK_CUSTOM = (msg: string) =>
  `https://wa.me/${COMPANY.phoneRaw}?text=${encodeURIComponent(msg)}`;
