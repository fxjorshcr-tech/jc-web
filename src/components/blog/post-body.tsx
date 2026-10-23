import { Photo } from "@/components/photo";
import type { PostBlock } from "@/data/posts";

/**
 * Renders the structured blocks of a Travel Journal post.
 * Inline HTML is limited to <strong>, <em>, <a>, <br> and <sup> produced by our own export script.
 */
export function PostBody({ blocks }: { blocks: PostBlock[] }) {
  return (
    <div className="prose-site">
      {blocks.map((block, i) => {
        switch (block.type) {
          case "p":
            return <p key={i} dangerouslySetInnerHTML={{ __html: block.html }} />;
          case "h2":
            return <h2 key={i} dangerouslySetInnerHTML={{ __html: block.html }} />;
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
