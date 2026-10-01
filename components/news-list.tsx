'use client';

import { useState } from 'react';

type NewsItem = {
  date: string;
  type: string;
  title: string;
  url: string;
};

type NewsListProps = {
  items: NewsItem[];
};

const INITIAL_VISIBLE_COUNT = 6;

export default function NewsList({ items }: NewsListProps) {
  const [expanded, setExpanded] = useState(false);
  const sortedItems = [...items].sort((a, b) => b.date.localeCompare(a.date));
  const hasArchive = sortedItems.length > INITIAL_VISIBLE_COUNT;

  function toggleArchive() {
    if (expanded) {
      setExpanded(false);
      window.requestAnimationFrame(() => {
        document.getElementById('news')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
      return;
    }

    setExpanded(true);
  }

  return (
    <>
      <div className="news-list" id="news-list">
        {sortedItems.map((item, index) => {
          const isExternal = item.url.startsWith('https://');
          const isHidden = !expanded && index >= INITIAL_VISIBLE_COUNT;

          return (
            <a
              className="news-row"
              href={item.url}
              hidden={isHidden}
              key={`${item.date}-${item.title}`}
              {...(isExternal ? { target: '_blank', rel: 'noreferrer' } : {})}
            >
              <time>{item.date}</time>
              <span>{item.type}</span>
              <p>{item.title}</p>
            </a>
          );
        })}
      </div>
      {hasArchive && (
        <button
          aria-controls="news-list"
          aria-expanded={expanded}
          className="news-toggle"
          onClick={toggleArchive}
          type="button"
        >
          {expanded ? 'Show fewer' : `View all news (${sortedItems.length})`}
        </button>
      )}
    </>
  );
}
