import type { Agent, License } from '../data/agents';

export function licenseLabel(l: License): string {
  switch (l) {
    case 'open-source':
      return 'Open Source';
    case 'commercial':
      return 'Commercial';
    case 'freemium':
      return 'Freemium';
  }
}

export function difficultyLabel(d: Agent['difficulty']): string {
  const labels = ['', 'Very easy', 'Easy', 'Moderate', 'Advanced', 'Expert'];
  return labels[d];
}

export function categoryLabel(cat: string, categories: { id: string; label: string }[]): string {
  return categories.find((c) => c.id === cat)?.label ?? cat;
}
