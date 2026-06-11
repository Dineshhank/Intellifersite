export const FLIPBOOK_BASE = "/flip-book";

/** Visit this URL to open the company brochure */
export const BROCHURE_PATH = "/brochure";

/** Replace with your company brochure PDF at public/flip-book/brochure.pdf */
export const FLIPBOOK_PDF = `${FLIPBOOK_BASE}/brochure.pdf`;

export const FLIPBOOK_VIEWER_URL = `${FLIPBOOK_BASE}/viewer.html?pdf=${encodeURIComponent(FLIPBOOK_PDF)}`;
