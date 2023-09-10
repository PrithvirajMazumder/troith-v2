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
      companies: {
        Row: {
          address: string | null
          city: string | null
          created_at: string
          email: string | null
          gstin: string | null
          id: string
          motto: string | null
          name: string | null
          phone: number | null
          pin: number | null
          state: string | null
          user_id: string | null
        }
        Insert: {
          address?: string | null
          city?: string | null
          created_at?: string
          email?: string | null
          gstin?: string | null
          id?: string
          motto?: string | null
          name?: string | null
          phone?: number | null
          pin?: number | null
          state?: string | null
          user_id?: string | null
        }
        Update: {
          address?: string | null
          city?: string | null
          created_at?: string
          email?: string | null
          gstin?: string | null
          id?: string
          motto?: string | null
          name?: string | null
          phone?: number | null
          pin?: number | null
          state?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "companies_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      invoice_items: {
        Row: {
          created_at: string
          invoice_id: string
          invoice_price: number | null
          invoice_quantity: number | null
          invoice_tax: string | null
          item_id: string
          user_id: string | null
        }
        Insert: {
          created_at?: string
          invoice_id: string
          invoice_price?: number | null
          invoice_quantity?: number | null
          invoice_tax?: string | null
          item_id: string
          user_id?: string | null
        }
        Update: {
          created_at?: string
          invoice_id?: string
          invoice_price?: number | null
          invoice_quantity?: number | null
          invoice_tax?: string | null
          item_id?: string
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "invoice_items_invoice_id_fkey"
            columns: ["invoice_id"]
            referencedRelation: "invoices"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "invoice_items_invoice_tax_fkey"
            columns: ["invoice_tax"]
            referencedRelation: "taxations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "invoice_items_item_id_fkey"
            columns: ["item_id"]
            referencedRelation: "items"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "invoice_items_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      invoices: {
        Row: {
          company_id: string | null
          created_at: string
          id: string
          no: string | null
          party_id: string | null
          tax: string | null
          user_id: string | null
          vehicle_no: string | null
        }
        Insert: {
          company_id?: string | null
          created_at?: string
          id?: string
          no?: string | null
          party_id?: string | null
          tax?: string | null
          user_id?: string | null
          vehicle_no?: string | null
        }
        Update: {
          company_id?: string | null
          created_at?: string
          id?: string
          no?: string | null
          party_id?: string | null
          tax?: string | null
          user_id?: string | null
          vehicle_no?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "invoices_company_id_fkey"
            columns: ["company_id"]
            referencedRelation: "companies"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "invoices_party_id_fkey"
            columns: ["party_id"]
            referencedRelation: "parties"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "invoices_tax_fkey"
            columns: ["tax"]
            referencedRelation: "taxations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "invoices_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      items: {
        Row: {
          created_at: string
          hsn: number | null
          id: string
          name: string | null
          price: number | null
          quantity: number | null
          tax: string | null
          user_id: string | null
        }
        Insert: {
          created_at?: string
          hsn?: number | null
          id?: string
          name?: string | null
          price?: number | null
          quantity?: number | null
          tax?: string | null
          user_id?: string | null
        }
        Update: {
          created_at?: string
          hsn?: number | null
          id?: string
          name?: string | null
          price?: number | null
          quantity?: number | null
          tax?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "items_tax_fkey"
            columns: ["tax"]
            referencedRelation: "taxations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "items_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      parties: {
        Row: {
          address: string | null
          city: string | null
          created_at: string
          email: string | null
          gstin: string | null
          id: string
          name: string | null
          phone: number | null
          pin: number | null
          suggested_tax: string | null
          user_id: string | null
        }
        Insert: {
          address?: string | null
          city?: string | null
          created_at?: string
          email?: string | null
          gstin?: string | null
          id?: string
          name?: string | null
          phone?: number | null
          pin?: number | null
          suggested_tax?: string | null
          user_id?: string | null
        }
        Update: {
          address?: string | null
          city?: string | null
          created_at?: string
          email?: string | null
          gstin?: string | null
          id?: string
          name?: string | null
          phone?: number | null
          pin?: number | null
          suggested_tax?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "parties_suggested_tax_fkey"
            columns: ["suggested_tax"]
            referencedRelation: "taxations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "parties_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      party_items: {
        Row: {
          created_at: string
          id: number
          item_id: string | null
          party_id: string | null
        }
        Insert: {
          created_at?: string
          id?: number
          item_id?: string | null
          party_id?: string | null
        }
        Update: {
          created_at?: string
          id?: number
          item_id?: string | null
          party_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "party_items_item_id_fkey"
            columns: ["item_id"]
            referencedRelation: "items"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "party_items_party_id_fkey"
            columns: ["party_id"]
            referencedRelation: "parties"
            referencedColumns: ["id"]
          }
        ]
      }
      taxations: {
        Row: {
          cgst: number
          id: string
          igst: number | null
          sgst: number | null
          user_id: string | null
        }
        Insert: {
          cgst: number
          id?: string
          igst?: number | null
          sgst?: number | null
          user_id?: string | null
        }
        Update: {
          cgst?: number
          id?: string
          igst?: number | null
          sgst?: number | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "taxations_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
