import { getPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Sobre',
      href: getPermalink('/#about'),
    },
    {
      text: 'A Consultoria',
      href: getPermalink('/#consultancy'),
    },
    {
      text: 'O Processo',
      href: getPermalink('/#processing'),
    },
    {
      text: 'Depoimentos',
      href: getPermalink('/#testimonials'),
    },
    {
      text: 'Perguntas Frequentes',
      href: getPermalink('/#faq'),
    },
  ],
  actions: [{ text: 'Entrar em contato', href: 'https://github.com/onwidget/astrowind', target: '_blank' }],
};

export const footerData = {
  secondaryLinks: [
    { text: 'Acessibilidade', href: getPermalink('/acessibilidade') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/onwidget/astrowind' },
  ],
  footNote: `
    <img class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 rtl:mr-0 rtl:ml-1.5 float-left rtl:float-right rounded-sm" src="https://onwidget.com/favicon/favicon-32x32.png" alt="onWidget logo" loading="lazy"></img>
    Feito por <a class="text-blue-600 underline dark:text-muted" href="https://brunopulis.com/"> Pulis Studio.</a> · Alguns direitos reservados.
  `,
};
