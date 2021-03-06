// @flow

export type Project = {
  name: string,
  slug: string,
  summary: () => React$Element<any>,
  links: Array<ProjectLink>,
  featuredImage: ImageWithMeta,
  images?: Array<ImageWithMeta>,
  tweets?: Array<string>,
  display: bool
}

export type Link = {
  title: string,
  url: string
}

export type ProjectLink = Link & {
  meta?: string
}

export type ImageWithMeta = {
  src: string,
  alt: string,
  description?: string
}

export type LocationProps = {
  match: {
    params: {
      project: string
    }
  }
}
