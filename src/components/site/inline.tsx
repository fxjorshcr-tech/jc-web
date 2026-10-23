import Link from "next/link";

const LINK = /\[([^\]]+)\]\(([^)\s]+)\)/g;

/** Renders plain text with [label](href) links as React nodes. Internal links use next/link. */
export function Inline({ text }: { text: string }) {
  const parts: React.ReactNode[] = [];
  let last = 0;
  let match: RegExpExecArray | null;
  let i = 0;
  while ((match = LINK.exec(text)) !== null) {
    if (match.index > last) parts.push(text.slice(last, match.index));
    const [, label, href] = match;
    const internal = href.startsWith("/");
    parts.push(
      internal ? (
        <Link key={i++} href={href}>
          {label}
        </Link>
      ) : (
        <a key={i++} href={href} target={href.startsWith("mailto:") ? undefined : "_blank"} rel="noopener noreferrer">
          {label}
        </a>
      ),
    );
    last = match.index + match[0].length;
  }
  if (last < text.length) parts.push(text.slice(last));
  return <>{parts}</>;
}
