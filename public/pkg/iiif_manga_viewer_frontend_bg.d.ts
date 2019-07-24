/* tslint:disable */
export const memory: WebAssembly.Memory;
export function __wbg_curationitem_free(a: number): void;
export function __wbg_get_curationitem_position_x(a: number): number;
export function __wbg_set_curationitem_position_x(a: number, b: number): void;
export function __wbg_get_curationitem_position_y(a: number): number;
export function __wbg_set_curationitem_position_y(a: number, b: number): void;
export function __wbg_get_curationitem_original_x(a: number): number;
export function __wbg_set_curationitem_original_x(a: number, b: number): void;
export function __wbg_get_curationitem_original_y(a: number): number;
export function __wbg_set_curationitem_original_y(a: number, b: number): void;
export function __wbg_get_curationitem_zoom(a: number): number;
export function __wbg_set_curationitem_zoom(a: number, b: number): void;
export function curationitem_new(a: number, b: number, c: number, d: number, e: number, f: number, g: number, h: number, i: number): number;
export function curationitem_manifest_id(a: number, b: number): void;
export function curationitem_image_id(a: number, b: number): void;
export function curationitem_label(a: number, b: number): void;
export function curationitem_get_x_start(a: number): number;
export function curationitem_get_x_end(a: number): number;
export function curationitem_get_y_start(a: number): number;
export function curationitem_get_y_end(a: number): number;
export function curationitem_description(a: number, b: number): void;
export function curationitem_set_description(a: number, b: number, c: number): void;
export function curationitem_json(a: number, b: number): void;
export function curationitem_set_image(a: number, b: number): void;
export function __wbg_wasmcurationviewer_free(a: number): void;
export function __wbg_get_wasmcurationviewer_index(a: number): number;
export function __wbg_set_wasmcurationviewer_index(a: number, b: number): void;
export function wasmcurationviewer_new(a: number): number;
export function wasmcurationviewer_label(a: number, b: number): void;
export function wasmcurationviewer_image_label(a: number, b: number): void;
export function wasmcurationviewer_now(a: number): number;
export function wasmcurationviewer_push(a: number, b: number): void;
export function wasmcurationviewer_remove(a: number, b: number): void;
export function wasmcurationviewer_show(a: number, b: number): number;
export function wasmcurationviewer_show_by_index(a: number, b: number): void;
export function wasmcurationviewer_get_index_by_src(a: number, b: number, c: number): number;
export function wasmcurationviewer_next(a: number): void;
export function wasmcurationviewer_prev(a: number): void;
export function wasmcurationviewer_show_last(a: number): void;
export function wasmcurationviewer_move_mousedown(a: number, b: number): void;
export function wasmcurationviewer_move_mousemove(a: number, b: number): number;
export function wasmcurationviewer_move_mouseup(a: number): void;
export function __wbg_viewer_free(a: number): void;
export function __wbg_get_viewer_index(a: number): number;
export function __wbg_set_viewer_index(a: number, b: number): void;
export function viewer_new(a: number, b: number, c: number): number;
export function viewer_set_manifest(a: number, b: number, c: number): number;
export function viewer_show(a: number, b: number): number;
export function viewer_get_index_by_src(a: number, b: number, c: number): number;
export function viewer_next(a: number): number;
export function viewer_prev(a: number): number;
export function viewer_move_mousedown(a: number, b: number): void;
export function viewer_move_mousemove(a: number, b: number): number;
export function viewer_move_mouseup(a: number): void;
export function viewer_label(a: number, b: number): void;
export function viewer_image_label(a: number, b: number): void;
export function viewer_get_image_elem(a: number, b: number): number;
export function viewer_size(a: number): number;
export function viewer_load(a: number, b: number): void;
export function viewer_is_loading(a: number, b: number): number;
export function viewer_is_loaded(a: number, b: number): number;
export function __wbg_position_free(a: number): void;
export function __wbg_get_position_x(a: number): number;
export function __wbg_set_position_x(a: number, b: number): void;
export function __wbg_get_position_y(a: number): number;
export function __wbg_set_position_y(a: number, b: number): void;
export function __wbg_searchresult_free(a: number): void;
export function searchresult_new(a: number, b: number, c: number, d: number, e: number, f: number, g: number, h: number): number;
export function searchresult_thumbnail(a: number, b: number): void;
export function __wbg_searchresults_free(a: number): void;
export function searchresults_new(a: number, b: number): number;
export function searchresults_len(a: number): number;
export function searchresults_get(a: number, b: number): number;
export function __wbg_searchquery_free(a: number): void;
export function searchquery_new(a: number, b: number): number;
export function searchquery_set_theme(a: number, b: number, c: number): void;
export function searchquery_set_sort(a: number, b: number, c: number): void;
export function searchquery_set_rows(a: number, b: number): void;
export function searchquery_query(a: number, b: number): void;
export function searchquery_theme(a: number, b: number): void;
export function searchquery_sort(a: number, b: number): void;
export function searchquery_rows(a: number): number;
export function searchquery_json(a: number, b: number): void;
export function searchresult_url(a: number, b: number): void;
export function searchresult_title(a: number, b: number): void;
export function searchresult_description(a: number, b: number): void;
export function __wbindgen_global_argument_ptr(): number;
export function __wbindgen_exn_store(a: number): void;
export function __wbindgen_malloc(a: number): number;
export function __wbindgen_realloc(a: number, b: number, c: number): number;
export function __wbindgen_free(a: number, b: number): void;
