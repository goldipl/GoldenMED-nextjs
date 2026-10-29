export const siteInfo = {
  name: "GoldenMED",
  street: "al. Zwycięstwa 24/44",
  city: "02-245 Warszawa",
  phone: "+48 22 123 45 67",
  phoneHref: "tel:+48221234567",
  email: "kontakt@goldenmed.pl",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=al.+Zwyci%C4%99stwa+24+Warszawa",
  mapsEmbedUrl:
    "https://www.google.com/maps?q=al.+Zwyci%C4%99stwa+24+Warszawa&output=embed",
  openingHours: [
    { days: "poniedziałek – piątek", hours: "9:00 – 20:00" },
    { days: "sobota", hours: "9:00 – 15:00" },
    { days: "niedziela", hours: "nieczynne" },
  ],
  socials: {
    instagram: "https://www.instagram.com/",
    facebook: "https://www.facebook.com/",
  },
};

export interface NavItem {
  label: string;
  href: string;
}

export const mainNav: NavItem[] = [
  { label: "Strona główna", href: "/" },
  { label: "Oferta", href: "/oferta" },
  { label: "Nasza kadra", href: "/nasza-kadra" },
  { label: "Cennik", href: "/cennik" },
  { label: "Aktualności", href: "/aktualnosci" },
  { label: "Kontakt", href: "/kontakt" },
];
