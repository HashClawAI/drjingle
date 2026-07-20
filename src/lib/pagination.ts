export const CATEGORY_PAGE_SIZE = 12;

export type Paginated<T> = {
  items: T[];
  currentPage: number;
  totalPages: number;
  totalItems: number;
  hasPrev: boolean;
  hasNext: boolean;
};

export function paginate<T>(
  items: T[],
  page: number,
  pageSize: number = CATEGORY_PAGE_SIZE,
): Paginated<T> {
  const totalItems = items.length;
  const totalPages = Math.max(1, Math.ceil(totalItems / pageSize));
  const currentPage = Math.min(Math.max(1, Math.floor(page) || 1), totalPages);
  const start = (currentPage - 1) * pageSize;
  return {
    items: items.slice(start, start + pageSize),
    currentPage,
    totalPages,
    totalItems,
    hasPrev: currentPage > 1,
    hasNext: currentPage < totalPages,
  };
}

export function parsePageParam(raw: string | undefined): number {
  const n = Number.parseInt(raw ?? '1', 10);
  return Number.isFinite(n) && n > 0 ? n : 1;
}
