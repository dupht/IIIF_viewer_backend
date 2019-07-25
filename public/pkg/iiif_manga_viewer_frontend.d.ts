/* tslint:disable */
export enum Direction {
  Left,
  Right,
  None,
}
/**
*/
/**
*/
export class CurationItem {
  free(): void;
/**
* @param {string} manifest_id 
* @param {string} image_id 
* @param {string} label 
* @param {any} origin 
* @param {any} term 
* @param {any} img 
* @returns {} 
*/
  constructor(manifest_id: string, image_id: string, label: string, origin: any, term: any, img: any);
/**
* @returns {string} 
*/
  manifest_id(): string;
/**
* @returns {string} 
*/
  image_id(): string;
/**
* @returns {string} 
*/
  label(): string;
/**
* @returns {number} 
*/
  get_x_start(): number;
/**
* @returns {number} 
*/
  get_x_end(): number;
/**
* @returns {number} 
*/
  get_y_start(): number;
/**
* @returns {number} 
*/
  get_y_end(): number;
/**
* @returns {string} 
*/
  description(): string;
/**
* @param {string} description 
* @returns {void} 
*/
  set_description(description: string): void;
/**
* @returns {string} 
*/
  json(): string;
/**
* @param {any} image 
* @returns {void} 
*/
  set_image(image: any): void;
  original_x: number;
  original_y: number;
  position_x: number;
  position_y: number;
  zoom: number;
}
/**
*/
export class Position {
  free(): void;
  x: number;
  y: number;
}
/**
* サーバーに投げる検索クエリ
* [参考](https://pro.europeana.eu/resources/apis/search) ## Getting Started
*/
export class SearchQuery {
  free(): void;
/**
* @param {string} query 
* @returns {} 
*/
  constructor(query: string);
/**
* @param {string} theme 
* @returns {void} 
*/
  set_theme(theme: string): void;
/**
* @param {string} sort 
* @returns {void} 
*/
  set_sort(sort: string): void;
/**
* @param {number} rows 
* @returns {void} 
*/
  set_rows(rows: number): void;
/**
* @returns {string} 
*/
  query(): string;
/**
* @returns {string} 
*/
  theme(): string;
/**
* @returns {string} 
*/
  sort(): string;
/**
* @returns {number} 
*/
  rows(): number;
/**
* @returns {string} 
*/
  json(): string;
}
/**
* サーバーから送られてくる検索結果(1件)
*/
export class SearchResult {
  free(): void;
/**
* @param {string} url 
* @param {string} title 
* @param {string} description 
* @param {string} thumbnail 
* @returns {} 
*/
  constructor(url: string, title: string, description: string, thumbnail: string);
/**
* @returns {string} 
*/
  thumbnail(): string;
/**
* @returns {string} 
*/
  url(): string;
/**
* @returns {string} 
*/
  title(): string;
/**
* @returns {string} 
*/
  description(): string;
}
/**
* サーバーから送られてくる検索結果
*/
export class SearchResults {
  free(): void;
/**
* @param {string} s 
* @returns {} 
*/
  constructor(s: string);
/**
* @returns {number} 
*/
  len(): number;
/**
* @param {number} i 
* @returns {SearchResult | undefined} 
*/
  get(i: number): SearchResult | undefined;
}
/**
*/
export class Viewer {
  free(): void;
/**
* Viewer\u{306e}\u{30b3}\u{30f3}\u{30b9}\u{30c8}\u{30e9}\u{30af}\u{30bf}
* @param {any} canvas 
* @param {any} list_view 
* @param {any} icon_view 
* @returns {} 
*/
  constructor(canvas: any, list_view: any, icon_view: any);
/**
* Manifest\u{3092}\u{30bb}\u{30c3}\u{30c8}\u{3059}\u{308b}
* @param {string} manifest 
* @returns {boolean} 
*/
  set_manifest(manifest: string): boolean;
/**
* \u{30a4}\u{30e1}\u{30fc}\u{30b8}\u{3092}\u{8868}\u{793a}\u{3059}\u{308b}
* @param {number} index 
* @returns {boolean} 
*/
  show(index: number): boolean;
/**
* \u{30a4}\u{30e1}\u{30fc}\u{30b8}\u{3092}src\u{304b}\u{3089}\u{8868}\u{793a}\u{3059}\u{308b}
* @param {string} src 
* @returns {number} 
*/
  get_index_by_src(src: string): number;
/**
* \u{6b21}\u{306e}\u{30a4}\u{30e1}\u{30fc}\u{30b8}\u{3092}\u{8868}\u{793a}\u{3059}\u{308b}
* @returns {boolean} 
*/
  next(): boolean;
/**
* \u{524d}\u{306e}\u{30a4}\u{30e1}\u{30fc}\u{30b8}\u{3092}\u{8868}\u{793a}\u{3059}\u{308b}
* @returns {boolean} 
*/
  prev(): boolean;
/**
* onclick\u{30a4}\u{30d9}\u{30f3}\u{30c8}
* mousedown\u{30a4}\u{30d9}\u{30f3}\u{30c8}
* @param {any} event 
* @returns {void} 
*/
  move_mousedown(event: any): void;
/**
* mousemove\u{30a4}\u{30d9}\u{30f3}\u{30c8}
* @param {any} event 
* @returns {Position | undefined} 
*/
  move_mousemove(event: any): Position | undefined;
/**
* mouseup\u{30a4}\u{30d9}\u{30f3}\u{30c8}
* @returns {void} 
*/
  move_mouseup(): void;
/**
* canvas\u{306e}context\u{3092}\u{53d6}\u{5f97}\u{3059}\u{308b}
* @returns {string} 
*/
  label(): string;
/**
* @returns {string} 
*/
  image_label(): string;
/**
* \u{30a4}\u{30e1}\u{30fc}\u{30b8}\u{3092}\u{8ffd}\u{52a0}
* HtmlImageElement\u{3092}\u{53d6}\u{5f97}
* @param {number} index 
* @returns {any} 
*/
  get_image_elem(index: number): any;
/**
* image\u{306e}\u{6570}
* @returns {number} 
*/
  size(): number;
/**
* @param {number} index 
* @returns {void} 
*/
  load(index: number): void;
/**
* @param {number} index 
* @returns {boolean} 
*/
  is_loading(index: number): boolean;
/**
* @param {number} index 
* @returns {boolean} 
*/
  is_loaded(index: number): boolean;
  index: number;
}
/**
*/
export class WasmCurationViewer {
  free(): void;
/**
* @param {any} element 
* @returns {} 
*/
  constructor(element: any);
/**
* @param {string} json 
* @returns {boolean} 
*/
  set_items(json: string): boolean;
/**
* @returns {string} 
*/
  label(): string;
/**
* @returns {string} 
*/
  image_label(): string;
/**
* @returns {number} 
*/
  size(): number;
/**
* @param {number} index 
* @returns {CurationItem | undefined} 
*/
  get(index: number): CurationItem | undefined;
/**
* @returns {CurationItem | undefined} 
*/
  now(): CurationItem | undefined;
/**
* @param {CurationItem} item 
* @returns {void} 
*/
  push(item: CurationItem): void;
/**
* @param {number} index 
* @returns {void} 
*/
  remove(index: number): void;
/**
* @param {number} oldindex 
* @param {number} newindex 
* @returns {boolean} 
*/
  swap(oldindex: number, newindex: number): boolean;
/**
* @returns {string} 
*/
  json(): string;
/**
* \u{30a4}\u{30e1}\u{30fc}\u{30b8}\u{3092}\u{8868}\u{793a}\u{3059}\u{308b}
* @param {CurationItem} item 
* @returns {number} 
*/
  show(item: CurationItem): number;
/**
* \u{30a4}\u{30e1}\u{30fc}\u{30b8}\u{3092}\u{8868}\u{793a}\u{3059}\u{308b}
* @param {number} index 
* @returns {void} 
*/
  show_by_index(index: number): void;
/**
* \u{30a4}\u{30e1}\u{30fc}\u{30b8}\u{3092}src\u{304b}\u{3089}\u{8868}\u{793a}\u{3059}\u{308b}
* @param {string} src 
* @returns {number} 
*/
  get_index_by_src(src: string): number;
/**
* \u{6b21}\u{306e}\u{30a4}\u{30e1}\u{30fc}\u{30b8}\u{3092}\u{8868}\u{793a}\u{3059}\u{308b}
* @returns {void} 
*/
  next(): void;
/**
* \u{524d}\u{306e}\u{30a4}\u{30e1}\u{30fc}\u{30b8}\u{3092}\u{8868}\u{793a}\u{3059}\u{308b}
* @returns {void} 
*/
  prev(): void;
/**
* \u{6700}\u{5f8c}\u{306e}\u{30a4}\u{30e1}\u{30fc}\u{30b8}\u{3092}\u{8868}\u{793a}\u{3059}\u{308b}
* @returns {void} 
*/
  show_last(): void;
/**
* mousedown\u{30a4}\u{30d9}\u{30f3}\u{30c8}
* @param {any} event 
* @returns {void} 
*/
  move_mousedown(event: any): void;
/**
* mousemove\u{30a4}\u{30d9}\u{30f3}\u{30c8}
* @param {any} event 
* @returns {Position | undefined} 
*/
  move_mousemove(event: any): Position | undefined;
/**
* mouseup\u{30a4}\u{30d9}\u{30f3}\u{30c8}
* @returns {void} 
*/
  move_mouseup(): void;
  index: number;
}

/**
* If `module_or_path` is {RequestInfo}, makes a request and
* for everything else, calls `WebAssembly.instantiate` directly.
*
* @param {RequestInfo | BufferSource | WebAssembly.Module} module_or_path
*
* @returns {Promise<any>}
*/
export default function init (module_or_path?: RequestInfo | BufferSource | WebAssembly.Module): Promise<any>;
        