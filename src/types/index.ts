export interface ContactFormData {
  name: string
  email: string
  phone?: string
  company?: string
  service: string
  message: string
}

export interface CareerApplicationData {
  full_name: string
  email: string
  phone: string
  position: string
  experience: string
  linkedin?: string
  portfolio?: string
  cover_letter: string
  resume_url?: string
}

export interface Service {
  id: string
  title: string
  description: string
  icon: string
  features: string[]
}

export interface Project {
  id: string
  title: string
  description: string
  tech: string[]
  category: string
  image?: string
}

export interface JobOpening {
  id: string
  title: string
  department: string
  type: string
  location: string
  description: string
  requirements: string[]
}
