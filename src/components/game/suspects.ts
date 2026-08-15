// ─────────────────────────────────────────────────────────────────────────────
// Suspect Lineup — Data & localStorage Helpers
// ─────────────────────────────────────────────────────────────────────────────

export type GamePhase = 'idle' | 'briefing' | 'lineup' | 'verdict' | 'revealed';

export interface Suspect {
  id: number;
  codename: string;
  archetype: string;
  description: string;   // neutral, shown during lineup
  alibi: string;         // shown post-verdict if this was the wrong pick
  clue: string;          // shown post-verdict for the guilty suspect
  stereotypeTag: string; // bias label shown on verdict
  isGuilty: boolean;
  emoji: string;
  image: string;         // portrait filename under /suspects/
  color: string;         // accent color for verdict state
}

export const SUSPECTS: Suspect[] = [
  {
    id: 1,
    codename: 'SUSPECT #01',
    archetype: 'The Rebel',
    description: '"I was running late to band practice — ask my bandmates, I\'m late every single Tuesday. I didn\'t even stop walking."',
    alibi: 'Was running late for band practice in the arts wing — confirmed by three bandmates. Never entered the archive corridor.',
    clue: '',
    stereotypeTag: 'APPEARANCE BIAS',
    isGuilty: false,
    emoji: '🤘',
    image: 'rebel.jpg',
    color: '#b45309',
  },
  {
    id: 2,
    codename: 'SUSPECT #02',
    archetype: 'The Hacker',
    description: '"I had a CS midterm in two hours. I was in the library the whole time — the librarian scanned me in. I was barely holding it together."',
    alibi: 'Stress-studying for a Computer Science midterm in the library. Librarian confirmed swipe-in at 11:58 AM — well before the incident.',
    clue: '',
    stereotypeTag: 'TECH STEREOTYPE BIAS',
    isGuilty: false,
    emoji: '🎧',
    image: 'hacker.jpg',
    color: '#b45309',
  },
  {
    id: 3,
    codename: 'SUSPECT #03',
    archetype: 'The Janitor',
    description: '"There was a water leak on Floor 3. I got the call at 12:10 and ran straight up. Check the maintenance logs — I was upstairs the whole time."',
    alibi: 'Responding to a water leak on Floor 3. Maintenance logs and two eyewitnesses place them upstairs from 12:10 PM onward.',
    clue: '',
    stereotypeTag: 'CLASS BIAS',
    isGuilty: false,
    emoji: '🧹',
    image: 'janitor.jpg',
    color: '#b45309',
  },
  {
    id: 4,
    codename: 'SUSPECT #04',
    archetype: 'The Streetwear Kid',
    description: '"I was just standing in the hallway listening to a podcast. I never even went through the door — you can check the camera angle."',
    alibi: 'Listening to a true crime podcast just outside the wing — never crossed the threshold. CCTV angle confirms they remained in the hallway.',
    clue: '',
    stereotypeTag: 'APPEARANCE BIAS',
    isGuilty: false,
    emoji: '😎',
    image: 'streetwear.jpg',
    color: '#b45309',
  },
  {
    id: 5,
    codename: 'SUSPECT #05',
    archetype: 'The Scholar',
    description: '"I was reviewing some documents inside — perfectly routine. I\'m happy to cooperate fully with whatever the investigation requires."',
    alibi: '',
    clue: 'A concealed RFID card cloner was attached to their badge lanyard — invisible at a glance. They cloned the master keycard in under four seconds while "reviewing documents". Criminals exploit trust, presentation, and the Halo Effect.',
    stereotypeTag: 'HALO EFFECT',
    isGuilty: true,
    emoji: '🕴️',
    image: 'scholar.jpg',
    color: '#7e1923',
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// localStorage Vote Ledger
// ─────────────────────────────────────────────────────────────────────────────

const STORAGE_KEY = 'crimsoc_votes_2026';

// Seeded base counts so the chart looks realistic for the first visitor
const SEED_VOTES: Record<number, number> = { 1: 4, 2: 4, 3: 1, 4: 0, 5: 1 };

export function loadVotes(): Record<number, number> {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return JSON.parse(raw) as Record<number, number>;
  } catch {
    // ignore parse errors
  }
  // First load — seed with realistic base counts
  saveVotes(SEED_VOTES);
  return { ...SEED_VOTES };
}

export function saveVotes(votes: Record<number, number>): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(votes));
  } catch {
    // ignore storage errors
  }
}

export function incrementVote(votes: Record<number, number>, suspectId: number): Record<number, number> {
  const updated = { ...votes, [suspectId]: (votes[suspectId] ?? 0) + 1 };
  saveVotes(updated);
  return updated;
}

export function clearVotes(): Record<number, number> {
  const zeroed: Record<number, number> = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
  saveVotes(zeroed);
  return zeroed;
}

export function totalVotes(votes: Record<number, number>): number {
  return Object.values(votes).reduce((a, b) => a + b, 0);
}

export function votePercent(votes: Record<number, number>, suspectId: number): number {
  const total = totalVotes(votes);
  if (total === 0) return 0;
  return Math.round(((votes[suspectId] ?? 0) / total) * 100);
}
