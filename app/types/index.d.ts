// User Types
export interface User {
  id: string
  username: string
  email: string
  phone?: string
  //role: 'influencer' | 'brand' | 'admin'
  status: 'pending' | 'approved' | 'rejected'
  created_at: string
  updated_at: string
  influencer: InfluencerProfile
}

export interface InfluencerProfile extends User {
  first_name: string
  last_name: string
  avatar?: string
  bio?: string
  locations?: string[]
  categories?: string[]
  platforms: SocialAccount[]
  rate_cards: RateCardItem[]
  kyc_review: KycReview | null
  verification_status: 'pending' | 'approved' | 'rejected'
  verification_documents: VerificationDocument[]
  wallet_balance: number
}

export interface KycReview {
  id: number
  reason?: string
  status?: string
  submitted_at?: string
  reviewed_at?: string
  reviewed_by?: string
  reviewed_by_name?: string;
  created_at: string;
  updated_at: string;
}

export interface SocialAccount {
  id: string
  platform: 'instagram' | 'facebook' | 'tiktok' | 'youtube' | 'twitter'
  username: string
  followers: number
  engagementRate: number
  url: string
  isVerified: boolean
}

export interface RateCardItem {
  id: string
  platform: string
  contentType: string
  price: number
  currency: string
}

export interface VerificationDocument {
  id: string
  type: 'id_card' | 'bank_book' | 'passport'
  url: string
  status: 'pending' | 'approved' | 'rejected'
  uploadedAt: string
}

// Campaign Types
export interface Campaign {
  id: string
  title: string
  description: string
  brandName: string
  brandLogo?: string
  category: string
  budget: {
    min: number
    max: number
    currency: string
  }
  requirements: {
    minFollowers: number
    platforms: string[]
    contentType: string[]
  }
  status: 'open' | 'closed' | 'draft'
  startDate: string
  endDate: string
  influencersNeeded: number
  influencersJoined: number
  image?: string
  createdAt: string
}

// Task Types
export interface Task {
  id: string
  campaignId: string
  campaignTitle: string
  influencerId: string
  title: string
  description: string
  status: 'pending' | 'in_progress' | 'submitted' | 'revision' | 'approved' | 'done' | 'rejected'
  dueDate: string
  submittedAt?: string
  approvedAt?: string
  postUrl?: string
  paymentAmount: number
  paymentStatus: 'pending' | 'processing' | 'paid'
  comments: TaskComment[]
  attachments: string[]
}

export interface TaskComment {
  id: string
  taskId: string
  userId: string
  userName: string
  userAvatar?: string
  content: string
  createdAt: string
}

// Wallet Types
export interface Transaction {
  id: string
  userId: string
  type: 'income' | 'withdrawal' | 'refund'
  amount: number
  currency: string
  status: 'pending' | 'completed' | 'failed'
  description: string
  campaignId?: string
  campaignTitle?: string
  createdAt: string
  completedAt?: string
}

// Notification Types
export interface Notification {
  id: string
  userId: string
  type: 'campaign_invite' | 'task_assigned' | 'task_approved' | 'payment_received' | 'verification_update' | 'system'
  title: string
  message: string
  isRead: boolean
  link?: string
  createdAt: string
}

// Blog Types
export interface BlogPost {
  id: string
  title: string
  excerpt: string
  content: string
  category: string
  author: {
    name: string
    avatar?: string
  }
  image: string
  publishedAt: string
  readTime: number
}

// FAQ Types
export interface FAQItem {
  id: string
  question: string
  answer: string
  category: string
}

// Language Type
export type Language = 'th' | 'en'

// Auth Types
export interface LoginCredentials {
  username: string
  password: string
}

export interface RegisterData {
  username: string
  email: string
  password: string
  confirmPassword: string
  firstName: string
  lastName: string
  isConsentToTerms: boolean
  isConsentMarketing?: boolean
}

export interface AuthState {
  user: User | null
  isAuthenticated: boolean
  isLoading: boolean
}
