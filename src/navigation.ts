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
    { text: 'Declaração de Acessibilidade', href: getPermalink('/acessibilidade') }
  ],
  socialLinks: [
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: 'https://www.instagram.com/henriquenoal/' },
    { ariaLabel: 'YouTube', icon: 'tabler:brand-youtube', href: 'https://www.youtube.com/@henriquenoal?app=desktop&sub_confirmation=1' },
    { ariaLabel: 'Podcast', icon: 'tabler:brand-spotify', href: 'https://open.spotify.com/show/0mMUYMzbb5RPRvCbGg6Ywf?nd=1&dlsi=a734e8f5dd4d4e56' },
  ],
  footNote: `&copy Todos direitos reservados.`,
};
