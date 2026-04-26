import type { CollectionEntry } from 'astro:content';

export type Event = CollectionEntry<'events'>;
export type EventType = Event['data']['eventType'];

export const EVENT_TYPE_LABEL: Record<EventType, string> = {
  'webinar': 'Webinar',
  'customer-success-hour': 'Customer Success Hour',
  'meet-up': 'Meet-up',
};

export const EVENT_TYPE_PLURAL: Record<EventType, string> = {
  'webinar': 'Webinars',
  'customer-success-hour': 'Customer Success Hours',
  'meet-up': 'Meet-ups',
};

export function isUpcoming(event: Event, now: Date = new Date()): boolean {
  return event.data.eventDate.getTime() > now.getTime();
}

export function hasRecording(event: Event): boolean {
  return Boolean(event.data.youtubeId);
}

/**
 * Returns the thumbnail URL for an event.
 * Prefers the custom thumbnail; falls back to YouTube's hqdefault; else null.
 */
export function thumbnailUrl(event: Event): string | null {
  if (event.data.thumbnail) return event.data.thumbnail;
  if (event.data.youtubeId) {
    return `https://i.ytimg.com/vi/${event.data.youtubeId}/hqdefault.jpg`;
  }
  return null;
}

export function partitionEvents(events: Event[], now: Date = new Date()) {
  const upcoming: Event[] = [];
  const past: Event[] = [];
  for (const ev of events) {
    if (isUpcoming(ev, now)) upcoming.push(ev);
    else if (hasRecording(ev)) past.push(ev); // archived (past, no video) hidden
  }
  upcoming.sort((a, b) => a.data.eventDate.getTime() - b.data.eventDate.getTime());
  past.sort((a, b) => b.data.eventDate.getTime() - a.data.eventDate.getTime());
  return { upcoming, past };
}

export function formatEventDate(d: Date): string {
  return d.toLocaleDateString('en-US', {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    timeZone: 'Asia/Singapore',
  });
}

export function formatEventTime(d: Date): string {
  const time = d.toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    timeZone: 'Asia/Singapore',
  });
  return `${time} SGT`;
}
