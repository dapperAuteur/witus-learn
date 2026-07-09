// Fixed avatar set for kid login (avatar + PIN). No uploads — a closed set keeps the
// picker simple for young kids and means avatarKey never needs validation against
// user-controlled content. Keep this list append-only (don't reuse a retired key) so an
// old avatarKey in the DB never resolves to a different icon than the one the child chose.
export interface KidAvatar {
  key: string;
  emoji: string;
  label: string;
}

export const KID_AVATARS: KidAvatar[] = [
  { key: "fox", emoji: "🦊", label: "Fox" },
  { key: "bear", emoji: "🐻", label: "Bear" },
  { key: "owl", emoji: "🦉", label: "Owl" },
  { key: "turtle", emoji: "🐢", label: "Turtle" },
  { key: "panda", emoji: "🐼", label: "Panda" },
  { key: "lion", emoji: "🦁", label: "Lion" },
  { key: "tiger", emoji: "🐯", label: "Tiger" },
  { key: "rabbit", emoji: "🐰", label: "Rabbit" },
  { key: "koala", emoji: "🐨", label: "Koala" },
  { key: "penguin", emoji: "🐧", label: "Penguin" },
  { key: "elephant", emoji: "🐘", label: "Elephant" },
  { key: "giraffe", emoji: "🦒", label: "Giraffe" },
  { key: "monkey", emoji: "🐵", label: "Monkey" },
  { key: "dolphin", emoji: "🐬", label: "Dolphin" },
  { key: "unicorn", emoji: "🦄", label: "Unicorn" },
  { key: "dragon", emoji: "🐲", label: "Dragon" },
];

const KID_AVATAR_KEYS = new Set(KID_AVATARS.map((a) => a.key));

export function isValidAvatarKey(key: string): boolean {
  return KID_AVATAR_KEYS.has(key);
}

export function getAvatarEmoji(key: string): string {
  return KID_AVATARS.find((a) => a.key === key)?.emoji ?? "❓";
}
