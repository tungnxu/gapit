
export interface ContentBase {
  rendered: string
}

export interface Province {
  value: number
  text: string
  districts: District[]
}

export interface District {
  value: number
  text: string
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
  expiredDate: string
  Token?: string
  RefreshToken?: string
  student?: Student
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

export interface StudentRegistrationInfo {
  student_name: string
  student_date_of_birth: Date
  student_province_id: number
  student_district_id: number
  student_address: string
  parent_name: string
  parent_phone: string
  parent_email: string
  school_name: string
  school_province_id: number
  school_district_id: number
  school_address: string
  school_class: number
  school_email: string
}


export interface StudentInfo {
  Id: number;
  user_id: number;
  student_name: string;
  province_id: number;
  district_id: number;
  address: string;
  parent: string;
  phone: string;
  school_name: string;
  school_province_id: number;
  school_district_id: number;
  school_address: string;
  class?: any;
  email?: any;
  UpdateDate: Date;
  CreateDate: Date;
  Status: boolean;
}

export interface Exam {
  id: number;
  user_id: number;
  name_exam: string;
  description: string;
  create_date: Date;
  url: string;
  point?: any;
}

export interface Student {
  student_info: StudentInfo;
  exams: Exam[];
}

export interface ResultExam {
  id: number;
  user_id: number;
  name_exam: string;
  description: string;
  create_date: Date;
  rank: number;
  point: number;
  image: string;
}


export interface MaterialWP {
  id: number
  date: Date
  date_gmt: Date
  modified: Date
  modified_gmt: Date
  slug: string
  status: string
  type: string
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

  data: any
  likeCount: number
}

export interface MaterialListItemWP {
  id: number
  title: ContentBase
  slug: string
  categories: CategoryWP[]
  thumbnailUrl: string
  likeCount: number
  data: any
}

export interface PaintingListItemWP {
  id: number
  title: ContentBase
  data: any
  slug: string
  thumbnailUrl: string
}

export interface PaintingWP {
  id: number
  slug: string
  status: string
  title: ContentBase
  content: ContentBase
  meta: any[]
  categories: number[]
  tags: any[]

  data: PaintingData
  nextId: number
  previousId: number
}

export interface PaintingData {
  age: string;
  full_name: string;
  avatar: string;
  painting: string;
  school_name: string;
  favorite_food: string;
}

export interface VotePainting {
  id: number;
  title:string;
  imageUrl: string;
  like: number;
}


export interface VoteItem {
  Name: string;
  StudentName: string;
  NumberOfLikes: number;
  NumberOfShare: number;
  Image: string;
  CreatedAt: Date;
  ExamId: string;
  isLiked: boolean;
  District: string;
  Province: string;
  Description: string;
}

export interface VoteResponse {
  examId: string;
  NumberOfLikes: number;
  NumberOfShare: number;
}

export interface QueryVote {
  total: number;
  data: VoteItem[];
}
