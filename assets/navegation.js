export const navlinks = [
  {
    label: "Inicio",
    href: "/"
  },
  {
    label: "Produtos",
    href: "/produtos"
  },
  {
    label: "Analise",
    href: "/analise"
  },
  {
    label: "Sobre",
    href: "/sobre"
  },
  {
    label: "Cadastrar",
    href: "/usuario/cadastro"
  },
]

import { Cog, Envelope, Code } from '@styled-icons/boxicons-regular';
import Profile from '../components/Profile'

export const navButtons = [
  {
    label: "Notificações",
    Icon: Envelope,
    action: () => console.log("Notificações"),
    Component: false,
    custom: false
  },
  {
    label: "Configurações",
    Icon: Cog,
    action: () => console.log("Configurações"),
    Component: false,
    custom: false
  },
  {
    label: "Código",
    Icon: Code,
    action: () => console.log("Código"),
    Component: false,
    custom: false
  },
  /*{
      label: "Profile",
      Icon: false,
      action: false,
      Component: Profile,
      custom: true
  }*/
]