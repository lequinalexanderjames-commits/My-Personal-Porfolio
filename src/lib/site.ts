export const site = {
  name: 'BEYOND THE BASICS',
  role: 'First-year BS Computer Science student',
  description:
    'Learning. Building. Improving. A Computer Science student’s personal journey through technology, creative interests, and the fundamentals.',
  summary:
    'Exploring technology, solving problems, and learning beyond the classroom.',
}
export function pageMeta(title: string, description: string) {
  return {
    meta: [
      { title: `${title} | ${site.name}` },
      { name: 'description', content: description },
      { property: 'og:title', content: site.name },
      { property: 'og:description', content: description },
    ],
  }
}
