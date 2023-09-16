export interface IPrimaryButton {
  text: string
}

export interface IFeature {
  image: string,
  text: string,
  body: string
}

export interface IArticle {
  image: string,
  text: string,
  body: string,
  author: string
}

export interface IIcon {
  width: number,
  height: number,
  d: string,
  color?: '#31d35c' | '#fff'
}