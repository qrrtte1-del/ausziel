import { type ClassValue, clsx } from 'clsx';

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

export function encodeWhatsAppMessage(message: string): string {
  return encodeURIComponent(message);
}

export function generateWhatsAppLink(
  phoneNumber: string,
  message: string
): string {
  const encoded = encodeWhatsAppMessage(message);
  return `https://wa.me/${phoneNumber}?text=${encoded}`;
}

export function scrollToSection(sectionId: string) {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

export function isValidEmail(email: string): boolean {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

export function isValidPhoneOrTelegram(input: string): boolean {
  // Match phone numbers (digits, +, -, spaces) or Telegram handles (@username)
  const phoneRegex = /^[\d+\-\s()]+$/;
  const telegramRegex = /^@?[a-zA-Z0-9_]{5,32}$/;
  return phoneRegex.test(input) || telegramRegex.test(input);
}
