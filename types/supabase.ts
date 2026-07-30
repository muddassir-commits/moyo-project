export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      users: {
        Row: {
          id: string
          created_at: string
          full_name: string | null
          phone: string | null
          avatar_url: string | null
          role: 'customer' | 'provider' | 'admin'
        }
        Insert: {
          id: string
          created_at?: string
          full_name?: string | null
          phone?: string | null
          avatar_url?: string | null
          role?: 'customer' | 'provider' | 'admin'
        }
        Update: {
          id?: string
          created_at?: string
          full_name?: string | null
          phone?: string | null
          avatar_url?: string | null
          role?: 'customer' | 'provider' | 'admin'
        }
      }
      providers: {
        Row: {
          id: string
          user_id: string
          created_at: string
          status: 'pending' | 'verified' | 'suspended'
          services: string[]
          rating: number
          reviews_count: number
          documents_verified: boolean
        }
        Insert: {
          id?: string
          user_id: string
          created_at?: string
          status?: 'pending' | 'verified' | 'suspended'
          services?: string[]
          rating?: number
          reviews_count?: number
          documents_verified?: boolean
        }
        Update: {
          id?: string
          user_id?: string
          created_at?: string
          status?: 'pending' | 'verified' | 'suspended'
          services?: string[]
          rating?: number
          reviews_count?: number
          documents_verified?: boolean
        }
      }
      service_requests: {
        Row: {
          id: string
          customer_id: string
          service_type: string
          status: 'searching' | 'bidding' | 'accepted' | 'completed' | 'cancelled'
          created_at: string
          scheduled_for: string
          location: Json
          requirements: Json
          budget_min: number | null
          budget_max: number | null
        }
        Insert: {
          id?: string
          customer_id: string
          service_type: string
          status?: 'searching' | 'bidding' | 'accepted' | 'completed' | 'cancelled'
          created_at?: string
          scheduled_for: string
          location: Json
          requirements?: Json
          budget_min?: number | null
          budget_max?: number | null
        }
        Update: {
          id?: string
          customer_id?: string
          service_type?: string
          status?: 'searching' | 'bidding' | 'accepted' | 'completed' | 'cancelled'
          created_at?: string
          scheduled_for?: string
          location?: Json
          requirements?: Json
          budget_min?: number | null
          budget_max?: number | null
        }
      }
      bids: {
        Row: {
          id: string
          request_id: string
          provider_id: string
          amount: number
          message: string | null
          status: 'pending' | 'accepted' | 'rejected'
          created_at: string
        }
        Insert: {
          id?: string
          request_id: string
          provider_id: string
          amount: number
          message?: string | null
          status?: 'pending' | 'accepted' | 'rejected'
          created_at?: string
        }
        Update: {
          id?: string
          request_id?: string
          provider_id?: string
          amount?: number
          message?: string | null
          status?: 'pending' | 'accepted' | 'rejected'
          created_at?: string
        }
      }
    }
  }
}
