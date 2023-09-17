export interface IPrimaryButton {
  text: string,
  className?: string
}

export interface IFeature {
  image: string,
  body: string,
  title: string
}

export interface IArticle {
  image: string,
  body: string,
  author: string,
  title: string
}

export interface IIcon {
  width: number,
  height: number,
  d: string,
  color?: '#31d35c' | '#fff'
}

export interface IMobileNav {
  toggleMenu?: () => void
}