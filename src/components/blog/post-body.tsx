import { Photo } from "@/components/photo";
import { headingId, type PostBlock } from "@/data/posts";

/**
 * Renders the structured blocks of a blog post.
 * Inline HTML is limited to <strong>, <em>, <a> and <br> written by us in src/data/posts.ts.
 */
export function PostBody({ blocks }: { blocks: PostBlock[] }) {
  return (
    <div className="prose-site">
      {blocks.map((block, i) => {
        switch (block.type) {
          case "p":
            return <p key={i} dangerouslySetInnerHTML={{ __html: block.html }} />;
          case "h2":
            return <h2 key={i} id={headingId(block.html)} className="scroll-mt-28" dangerouslySetInnerHTML={{ __html: block.html }} />;
          case "h3":
            return <h3 key={i} dangerouslySetInnerHTML={{ __html: block.html }} />;
          case "quote":
            return <blockquote key={i} dangerouslySetInnerHTML={{ __html: block.html }} />;
          case "list": {
            const Tag = block.ordered ? "ol" : "ul";
            return (
              <Tag key={i}>
                {block.items.map((item, j) => (
                  <li key={j} dangerouslySetInnerHTML={{ __html: item }} />
                ))}
              </Tag>
            );
          }
          case "table":
            return (
              <figure key={i} className="my-8 overflow-x-auto rounded-lg border border-border/70">
                <table className="w-full min-w-[28rem] border-collapse text-left text-sm">
                  {block.caption && <caption className="bg-cream-deep/60 px-4 py-2.5 text-left font-sans text-xs font-semibold uppercase tracking-[0.14em] text-olive-700">{block.caption}</caption>}
                  <thead>
                    <tr className="bg-olive-100/70">
                      {block.head.map((h) => (
                        <th key={h} scope="col" className="px-4 py-2.5 font-semibold text-ink">
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {block.rows.map((row, r) => (
                      <tr key={r} className="border-t border-border/70 odd:bg-white even:bg-cream/60">
                        {row.map((cell, c) => (
                          <td key={c} className={c === 0 ? "px-4 py-2.5 font-semibold text-ink" : "px-4 py-2.5 text-ink-soft"}>
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </figure>
            );
          case "callout":
            return (
              <aside key={i} className="my-8 rounded-xl border-l-4 border-teal-500 bg-teal-50 px-5 py-4 sm:px-6">
                {block.title && <p className="font-sans text-xs font-semibold uppercase tracking-[0.16em] text-teal-700">{block.title}</p>}
                <p className="mt-1.5 text-[0.98rem] leading-relaxed text-ink" dangerouslySetInnerHTML={{ __html: block.html }} />
              </aside>
            );
          case "image":
            return (
              <figure key={i} className="my-8">
                <div className="relative aspect-[3/2] overflow-hidden rounded-lg">
                  <Photo src={block.src} alt={block.alt} sizes="(min-width: 768px) 720px, 100vw" />
                </div>
                {block.caption && <figcaption className="mt-2 text-sm text-ink-soft">{block.caption}</figcaption>}
              </figure>
            );
          case "embed":
            return (
              <div key={i} className="my-8 overflow-hidden rounded-lg bg-ink">
                <iframe
                  src={block.src}
                  title="Video"
                  className="aspect-video w-full"
                  loading="lazy"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                />
              </div>
            );
          default:
            return null;
        }
      })}
    </div>
  );
}
