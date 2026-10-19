import type { APIRoute } from "astro";
import { SITE } from "@/config";

export const GET: APIRoute = async () => {
  const markdownContent = `# ${SITE.title}

${SITE.desc}

[Principles I believe in.](/posts/2026/things-i-believe-in)

## Latest research

### The Fundamental Memory Ceiling of Noisy Quantum Reservoirs

Markus Baumann, Jonas Stein, and Claudia Linnhoff-Popien. Submitted to Physical Review Letters, 19 October 2026.

Size-independent bounds on input memory under local depolarizing noise, with fresh-qubit supply as the limiting resource.

[Full manuscript and Supplemental Material](https://github.com/eybmits/fresh-qubits-memory/blob/main/paper/memory_limits_prl_2026-10-19-concise.pdf) · [Code and data](https://github.com/eybmits/fresh-qubits-memory)

## Navigation

- [About](/about.md)
- [Recent Posts](/posts.md)
- [Archives](/archives.md)
- [RSS Feed](/rss.xml)

## Links

- Personal website: [eybmits.github.io](https://eybmits.github.io/)
- GitHub: [eybmits](https://github.com/eybmits)
- Google Scholar: [Markus Baumann profile](https://scholar.google.com/citations?hl=en&user=gjjgrw0AAAAJ)
- LMU profile: [Markus Baumann](https://www.ifi.lmu.de/mvs/de/team/kontaktseite/markus-baumann-eb504667.html)
- QAR-Lab: [Quantum Applications and Research Laboratory](https://qarlab.de/en/)
- Email: ${SITE.email}

---

*This is the markdown-only view. Visit the full website for interactive features like search and theme switching.*`;

  return new Response(markdownContent, {
    status: 200,
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
};
