"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import type { WorkItem } from "@/lib/content";
import { ChevronLeft, ChevronRight, CloseIcon } from "./Icons";

export default function Gallery({ items }: { items: WorkItem[] }) {
  const [active, setActive] = useState<number | null>(null);
  const opener = useRef<HTMLElement | null>(null);
  const closeBtn = useRef<HTMLButtonElement>(null);

  const close = useCallback(() => {
    setActive(null);
    opener.current?.focus();
  }, []);
  const step = useCallback(
    (d: number) => setActive((i) => (i === null ? i : (i + d + items.length) % items.length)),
    [items.length],
  );

  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") step(-1);
      if (e.key === "ArrowRight") step(1);
    };
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    closeBtn.current?.focus();
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [active, close, step]);

  const current = active !== null ? items[active] : null;

  return (
    <>
      <div className="masonry">
        {items.map((item, i) => (
          <button
            key={item.src}
            type="button"
            className="tile"
            aria-label={`View ${item.title}`}
            onClick={(e) => {
              opener.current = e.currentTarget;
              setActive(i);
            }}
          >
            <span className="tile__frame" style={{ aspectRatio: item.ratio }}>
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(min-width: 980px) 33vw, (min-width: 560px) 50vw, 100vw"
              />
            </span>
            <span className="tile__cap">
              <span className="tile__tag">{item.tag}</span>
              <span className="tile__title">{item.title}</span>
            </span>
          </button>
        ))}
      </div>

      {current && (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={current.title}
          onClick={close}
        >
          <button
            ref={closeBtn}
            type="button"
            className="lightbox__btn lightbox__close"
            aria-label="Close"
            onClick={close}
          >
            <CloseIcon />
          </button>
          <button
            type="button"
            className="lightbox__btn lightbox__prev"
            aria-label="Previous"
            onClick={(e) => {
              e.stopPropagation();
              step(-1);
            }}
          >
            <ChevronLeft />
          </button>
          <figure className="lightbox__figure" onClick={(e) => e.stopPropagation()}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={current.src} alt={current.alt} />
            <figcaption>
              <span className="tile__tag">{current.tag}</span> {current.title}
            </figcaption>
          </figure>
          <button
            type="button"
            className="lightbox__btn lightbox__next"
            aria-label="Next"
            onClick={(e) => {
              e.stopPropagation();
              step(1);
            }}
          >
            <ChevronRight />
          </button>
        </div>
      )}
    </>
  );
}
