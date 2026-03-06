import React from 'react';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

interface BreadcrumbItem {
  href?: string;
  label: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <div className="mb-8 flex flex-wrap items-center gap-2 font-['DM_Mono',monospace] text-[.62rem] tracking-[.1em] text-muted-foreground">
      {items.map((item, index) => (
        <React.Fragment key={index}>
          {item.href ? (
            <Link href={item.href} className="text-primary transition-opacity hover:opacity-70">
              {item.label}
            </Link>
          ) : (
            <span className="text-muted-foreground">{item.label}</span>
          )}
          {index < items.length - 1 && <ChevronRight className="h-3 w-3" />}
        </React.Fragment>
      ))}
    </div>
  );
}
