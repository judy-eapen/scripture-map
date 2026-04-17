export type VerseEntry = {
  verse_number: number;
  text: string;
};

export type Person = {
  id: string;
  name: string;
  alt_names?: string[];
  type: 'king' | 'prophet' | 'official' | 'foreign_ruler' | 'other';
  kingdom?: 'north' | 'south' | 'foreign';
  reign_start_bc?: number;
  reign_end_bc?: number;
  dates_approximate?: boolean;
  verdict?: 'good' | 'evil' | 'mixed';
  bio: string;
  contemporary_events?: string;
  image_url?: string;
  hasGenealogyNode?: boolean;
};

export type Place = {
  id: string;
  ancient_name: string;
  modern_name: string;
  lat: number;
  lng: number;
  significance?: string;
  ancient_description: string;
  modern_description: string;
  image_url?: string;
};

export type TappablePerson = {
  person: Person;
  tappable_terms: string[];
};

export type TappablePlace = {
  place: Place;
  tappable_terms: string[];
  map_focus?: boolean;
};

export type ArchaeologicalEvidence = {
  id: string;
  name: string;
  artifact_type: string;
  date_bc: number;
  description: string;
  museum_location?: string;
  relevance_note: string;
};

export type ChapterData = {
  id: string;
  book: '1 Kings' | '2 Kings';
  book_slug: '1-kings' | '2-kings';
  chapter_number: number;
  summary: string;
  year_start_bc?: number;
  year_end_bc?: number;
  verses: VerseEntry[];
  people: TappablePerson[];
  places: TappablePlace[];
  evidence: ArchaeologicalEvidence[];
  nations?: NeighboringNation[];
  difficultPassages: DifficultPassage[];
  quizCount: number;
  quizBestScore?: number | null;
};

export type NavChapter = {
  number: number;
  is_read: boolean;
  quiz_best_score?: number | null;
};

export type ActiveCard =
  | { type: 'person'; person: Person }
  | { type: 'place'; place: Place }
  | null;

export type TimelineKing = {
  id: string;
  name: string;
  kingdom: 'north' | 'south';
  reign_start_bc: number; // positive number, e.g. 874 means 874 BC
  reign_end_bc: number;
  verdict?: 'good' | 'evil' | 'mixed';
  dates_approximate?: boolean;
  is_queen?: boolean; // for Athaliah
};

export type NeighboringNation = {
  id: string;
  name: string;
  color: string; // hex
  context_note: string;
  key_rulers: { name: string; years: string; note: string }[];
};

export type QuizQuestion = {
  id: string;
  question: string;
  options: string[];
  correct_index: number;
  explanation: string;
};

export type DifficultPassage = {
  id: string;
  verse_start: number;
  verse_end: number;
  topic: string;
  plain_language: string;
  theological_context: string;
};

export type GenealogyNode = {
  id: string;
  person_id: string;
  name: string;
  dynasty?: string;
  dynasty_color?: string;
  notes?: string;
  verdict?: 'good' | 'evil' | 'mixed';
  type?: 'king' | 'prophet' | 'official' | 'foreign_ruler' | 'other';
  kingdom?: 'north' | 'south' | 'foreign';
  is_queen?: boolean;
  reign_start_bc?: number | null;
  reign_end_bc?: number | null;
  bio?: string;
  contemporary_events?: string;
};

export type GenealogyEdge = {
  id: string;
  parent_node_id: string;
  child_node_id: string;
  relationship_type: 'biological' | 'marriage' | 'adoption' | 'political';
  notes?: string;
};

export type PersonAppearance = {
  book: '1 Kings' | '2 Kings';
  book_slug: '1-kings' | '2-kings';
  chapter_number: number;
  read_at: string | null;
};

export type VerseNote = {
  verse_number: number;
  highlighted: boolean;
  note_text: string | null;
};
