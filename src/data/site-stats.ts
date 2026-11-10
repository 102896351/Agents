// ============================================================
//  Single source of truth for every count rendered on this site.
//  Pages import AGENT_COUNT directly. Stored article HTML uses the
//  {{AGENT_COUNT}} token, resolved by withLiveCounts() in blog.ts.
//  Never hard-code a directory size anywhere else.
// ============================================================
import { agents } from './agents';

export const AGENT_COUNT = agents.length;

const TOKEN = '{{AGENT_COUNT}}';

export function withLiveCounts(html: string): string {
  return html.split(TOKEN).join(String(AGENT_COUNT));
}
