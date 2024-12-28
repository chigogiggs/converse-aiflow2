export interface Message {
  id: string;
  text: string;
  isOutgoing: boolean;
  timestamp: string;
  isTranslating?: boolean;
  originalText?: string;
  isPinned?: boolean;
  isEdited?: boolean;
  senderId?: string;
  translations?: Record<string, string>;
}

export interface DatabaseMessage {
  id: string;
  sender_id: string;
  recipient_id: string;
  content: string;
  translated_content: string | null;
  source_language: string;
  target_language: string;
  created_at: string;
  updated_at: string;
  read: boolean | null;
  translations: Record<string, string> | null;
}