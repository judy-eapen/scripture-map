export type SM2State = {
  interval: number;
  ease_factor: number;
  repetitions: number;
  due_date: string; // YYYY-MM-DD
};

export type SM2Quality = 0 | 1 | 2 | 3; // Again | Hard | Good | Easy

// Maps our 4-button scale to SM-2's 0–5 quality scale
const QUALITY_MAP: Record<SM2Quality, number> = { 0: 0, 1: 2, 2: 4, 3: 5 };

function addDays(days: number): string {
  const d = new Date();
  d.setDate(d.getDate() + days);
  return d.toISOString().slice(0, 10);
}

export function sm2Update(state: SM2State, quality: SM2Quality): SM2State {
  const q = QUALITY_MAP[quality];
  let { interval, ease_factor, repetitions } = state;

  if (q < 3) {
    repetitions = 0;
    interval = 1;
  } else {
    if (repetitions === 0) interval = 1;
    else if (repetitions === 1) interval = 6;
    else interval = Math.round(interval * ease_factor);
    repetitions += 1;
  }

  ease_factor = Math.max(1.3, ease_factor + 0.1 - (5 - q) * (0.08 + (5 - q) * 0.02));

  return { interval, ease_factor, repetitions, due_date: addDays(interval) };
}
