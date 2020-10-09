
export interface ContentBase {
  rendered: string
}

export interface BackendError {
  messages?: string[]
  message?: string
  silent?: boolean
  detail?: string
  title?: string
  errors?: any[]
}

export interface QueryResultBase<T> {
  count: number
  items: Array<T>
}

export class User {
  id: string
  username: string
  expiredDate : string
  Token?: string
  RefreshToken?: string
}

export interface PostWP {
  id: number
  date: Date
  date_gmt: Date
  modified: Date
  modified_gmt: Date
  slug: string
  status: string
  type: string
  link: string
  title: ContentBase
  content: ContentBase
  excerpt: ContentBase
  author: number
  featured_media: number
  comment_status: string
  ping_status: string
  sticky: boolean
  template: string
  format: string
  meta: any[]
  categories: number[]
  tags: any[]
}


export interface CategoryWP {
  id: number
  description: string
  name: string
  slug: string
  parent: number
  _parent: CategoryWP[]
}


export interface MainSlide {
  smallTitle: string
  bigTitle: string
  imageUrl: string
  hasLable?: boolean
  link: string
  buttonTitle?: string
}

export interface ResourceListItem {
  title: string
  thumbnailUrl: string
  link: string
  activityType?: string
  rank?: number
  whoTitte?: string
}
