
let wasm;

let WASM_VECTOR_LEN = 0;

let cachedTextEncoder = new TextEncoder('utf-8');

let cachegetUint8Memory = null;
function getUint8Memory() {
    if (cachegetUint8Memory === null || cachegetUint8Memory.buffer !== wasm.memory.buffer) {
        cachegetUint8Memory = new Uint8Array(wasm.memory.buffer);
    }
    return cachegetUint8Memory;
}

let passStringToWasm;
if (typeof cachedTextEncoder.encodeInto === 'function') {
    passStringToWasm = function(arg) {


        let size = arg.length;
        let ptr = wasm.__wbindgen_malloc(size);
        let offset = 0;
        {
            const mem = getUint8Memory();
            for (; offset < arg.length; offset++) {
                const code = arg.charCodeAt(offset);
                if (code > 0x7F) break;
                mem[ptr + offset] = code;
            }
        }

        if (offset !== arg.length) {
            arg = arg.slice(offset);
            ptr = wasm.__wbindgen_realloc(ptr, size, size = offset + arg.length * 3);
            const view = getUint8Memory().subarray(ptr + offset, ptr + size);
            const ret = cachedTextEncoder.encodeInto(arg, view);

            offset += ret.written;
        }
        WASM_VECTOR_LEN = offset;
        return ptr;
    };
} else {
    passStringToWasm = function(arg) {


        let size = arg.length;
        let ptr = wasm.__wbindgen_malloc(size);
        let offset = 0;
        {
            const mem = getUint8Memory();
            for (; offset < arg.length; offset++) {
                const code = arg.charCodeAt(offset);
                if (code > 0x7F) break;
                mem[ptr + offset] = code;
            }
        }

        if (offset !== arg.length) {
            const buf = cachedTextEncoder.encode(arg.slice(offset));
            ptr = wasm.__wbindgen_realloc(ptr, size, size = offset + buf.length);
            getUint8Memory().set(buf, ptr + offset);
            offset += buf.length;
        }
        WASM_VECTOR_LEN = offset;
        return ptr;
    };
}

const heap = new Array(32);

heap.fill(undefined);

heap.push(undefined, null, true, false);

let heap_next = heap.length;

function addHeapObject(obj) {
    if (heap_next === heap.length) heap.push(heap.length + 1);
    const idx = heap_next;
    heap_next = heap[idx];

    heap[idx] = obj;
    return idx;
}

let cachedTextDecoder = new TextDecoder('utf-8');

function getStringFromWasm(ptr, len) {
    return cachedTextDecoder.decode(getUint8Memory().subarray(ptr, ptr + len));
}

let cachedGlobalArgumentPtr = null;
function globalArgumentPtr() {
    if (cachedGlobalArgumentPtr === null) {
        cachedGlobalArgumentPtr = wasm.__wbindgen_global_argument_ptr();
    }
    return cachedGlobalArgumentPtr;
}

let cachegetUint32Memory = null;
function getUint32Memory() {
    if (cachegetUint32Memory === null || cachegetUint32Memory.buffer !== wasm.memory.buffer) {
        cachegetUint32Memory = new Uint32Array(wasm.memory.buffer);
    }
    return cachegetUint32Memory;
}

function getObject(idx) { return heap[idx]; }

function dropObject(idx) {
    if (idx < 36) return;
    heap[idx] = heap_next;
    heap_next = idx;
}

function takeObject(idx) {
    const ret = getObject(idx);
    dropObject(idx);
    return ret;
}

function isLikeNone(x) {
    return x === undefined || x === null;
}

function handleError(e) {
    wasm.__wbindgen_exn_store(addHeapObject(e));
}

function debugString(val) {
    // primitive types
    const type = typeof val;
    if (type == 'number' || type == 'boolean' || val == null) {
        return  `${val}`;
    }
    if (type == 'string') {
        return `"${val}"`;
    }
    if (type == 'symbol') {
        const description = val.description;
        if (description == null) {
            return 'Symbol';
        } else {
            return `Symbol(${description})`;
        }
    }
    if (type == 'function') {
        const name = val.name;
        if (typeof name == 'string' && name.length > 0) {
            return `Function(${name})`;
        } else {
            return 'Function';
        }
    }
    // objects
    if (Array.isArray(val)) {
        const length = val.length;
        let debug = '[';
        if (length > 0) {
            debug += debugString(val[0]);
        }
        for(let i = 1; i < length; i++) {
            debug += ', ' + debugString(val[i]);
        }
        debug += ']';
        return debug;
    }
    // Test for built-in
    const builtInMatches = /\[object ([^\]]+)\]/.exec(toString.call(val));
    let className;
    if (builtInMatches.length > 1) {
        className = builtInMatches[1];
    } else {
        // Failed to match the standard '[object ClassName]'
        return toString.call(val);
    }
    if (className == 'Object') {
        // we're a user defined class or Object
        // JSON.stringify avoids problems with cycles, and is generally much
        // easier than looping through ownProperties of `val`.
        try {
            return 'Object(' + JSON.stringify(val) + ')';
        } catch (_) {
            return 'Object';
        }
    }
    // errors
    if (val instanceof Error) {
        return `${val.name}: ${val.message}\n${val.stack}`;
    }
    // TODO we could test for more things here, like `Set`s and `Map`s.
    return className;
}
/**
*/
export const Direction = Object.freeze({ Left:0,Right:1,None:2, });
/**
*/
export class CurationItem {

    static __wrap(ptr) {
        const obj = Object.create(CurationItem.prototype);
        obj.ptr = ptr;

        return obj;
    }

    free() {
        const ptr = this.ptr;
        this.ptr = 0;

        wasm.__wbg_curationitem_free(ptr);
    }
    /**
    * @returns {number}
    */
    get position_x() {
        return wasm.__wbg_get_curationitem_position_x(this.ptr);
    }
    /**
    * @param {number} arg0
    * @returns {void}
    */
    set position_x(arg0) {
        return wasm.__wbg_set_curationitem_position_x(this.ptr, arg0);
    }
    /**
    * @returns {number}
    */
    get position_y() {
        return wasm.__wbg_get_curationitem_position_y(this.ptr);
    }
    /**
    * @param {number} arg0
    * @returns {void}
    */
    set position_y(arg0) {
        return wasm.__wbg_set_curationitem_position_y(this.ptr, arg0);
    }
    /**
    * @returns {number}
    */
    get original_x() {
        return wasm.__wbg_get_curationitem_original_x(this.ptr);
    }
    /**
    * @param {number} arg0
    * @returns {void}
    */
    set original_x(arg0) {
        return wasm.__wbg_set_curationitem_original_x(this.ptr, arg0);
    }
    /**
    * @returns {number}
    */
    get original_y() {
        return wasm.__wbg_get_curationitem_original_y(this.ptr);
    }
    /**
    * @param {number} arg0
    * @returns {void}
    */
    set original_y(arg0) {
        return wasm.__wbg_set_curationitem_original_y(this.ptr, arg0);
    }
    /**
    * @returns {number}
    */
    get zoom() {
        return wasm.__wbg_get_curationitem_zoom(this.ptr);
    }
    /**
    * @param {number} arg0
    * @returns {void}
    */
    set zoom(arg0) {
        return wasm.__wbg_set_curationitem_zoom(this.ptr, arg0);
    }
    /**
    * @param {string} manifest_id
    * @param {string} image_id
    * @param {string} label
    * @param {any} origin
    * @param {any} term
    * @param {any} img
    * @returns {}
    */
    constructor(manifest_id, image_id, label, origin, term, img) {
        const ptr0 = passStringToWasm(manifest_id);
        const len0 = WASM_VECTOR_LEN;
        const ptr1 = passStringToWasm(image_id);
        const len1 = WASM_VECTOR_LEN;
        const ptr2 = passStringToWasm(label);
        const len2 = WASM_VECTOR_LEN;
        this.ptr = wasm.curationitem_new(ptr0, len0, ptr1, len1, ptr2, len2, addHeapObject(origin), addHeapObject(term), addHeapObject(img));
    }
    /**
    * @returns {string}
    */
    manifest_id() {
        const retptr = globalArgumentPtr();
        wasm.curationitem_manifest_id(retptr, this.ptr);
        const mem = getUint32Memory();
        const rustptr = mem[retptr / 4];
        const rustlen = mem[retptr / 4 + 1];

        const realRet = getStringFromWasm(rustptr, rustlen).slice();
        wasm.__wbindgen_free(rustptr, rustlen * 1);
        return realRet;

    }
    /**
    * @returns {string}
    */
    image_id() {
        const retptr = globalArgumentPtr();
        wasm.curationitem_image_id(retptr, this.ptr);
        const mem = getUint32Memory();
        const rustptr = mem[retptr / 4];
        const rustlen = mem[retptr / 4 + 1];

        const realRet = getStringFromWasm(rustptr, rustlen).slice();
        wasm.__wbindgen_free(rustptr, rustlen * 1);
        return realRet;

    }
    /**
    * @returns {string}
    */
    label() {
        const retptr = globalArgumentPtr();
        wasm.curationitem_label(retptr, this.ptr);
        const mem = getUint32Memory();
        const rustptr = mem[retptr / 4];
        const rustlen = mem[retptr / 4 + 1];

        const realRet = getStringFromWasm(rustptr, rustlen).slice();
        wasm.__wbindgen_free(rustptr, rustlen * 1);
        return realRet;

    }
    /**
    * @returns {number}
    */
    get_x_start() {
        return wasm.curationitem_get_x_start(this.ptr) >>> 0;
    }
    /**
    * @returns {number}
    */
    get_x_end() {
        return wasm.curationitem_get_x_end(this.ptr) >>> 0;
    }
    /**
    * @returns {number}
    */
    get_y_start() {
        return wasm.curationitem_get_y_start(this.ptr) >>> 0;
    }
    /**
    * @returns {number}
    */
    get_y_end() {
        return wasm.curationitem_get_y_end(this.ptr) >>> 0;
    }
    /**
    * @returns {string}
    */
    description() {
        const retptr = globalArgumentPtr();
        wasm.curationitem_description(retptr, this.ptr);
        const mem = getUint32Memory();
        const rustptr = mem[retptr / 4];
        const rustlen = mem[retptr / 4 + 1];

        const realRet = getStringFromWasm(rustptr, rustlen).slice();
        wasm.__wbindgen_free(rustptr, rustlen * 1);
        return realRet;

    }
    /**
    * @param {string} description
    * @returns {void}
    */
    set_description(description) {
        const ptr0 = passStringToWasm(description);
        const len0 = WASM_VECTOR_LEN;
        return wasm.curationitem_set_description(this.ptr, ptr0, len0);
    }
    /**
    * @returns {string}
    */
    json() {
        const retptr = globalArgumentPtr();
        wasm.curationitem_json(retptr, this.ptr);
        const mem = getUint32Memory();
        const rustptr = mem[retptr / 4];
        const rustlen = mem[retptr / 4 + 1];
        if (rustptr === 0) return;
        const realRet = getStringFromWasm(rustptr, rustlen).slice();
        wasm.__wbindgen_free(rustptr, rustlen * 1);
        return realRet;

    }
    /**
    * @param {any} image
    * @returns {void}
    */
    set_image(image) {
        return wasm.curationitem_set_image(this.ptr, addHeapObject(image));
    }
}
/**
*/
export class Position {

    static __wrap(ptr) {
        const obj = Object.create(Position.prototype);
        obj.ptr = ptr;

        return obj;
    }

    free() {
        const ptr = this.ptr;
        this.ptr = 0;

        wasm.__wbg_position_free(ptr);
    }
    /**
    * @returns {number}
    */
    get x() {
        return wasm.__wbg_get_position_x(this.ptr);
    }
    /**
    * @param {number} arg0
    * @returns {void}
    */
    set x(arg0) {
        return wasm.__wbg_set_position_x(this.ptr, arg0);
    }
    /**
    * @returns {number}
    */
    get y() {
        return wasm.__wbg_get_position_y(this.ptr);
    }
    /**
    * @param {number} arg0
    * @returns {void}
    */
    set y(arg0) {
        return wasm.__wbg_set_position_y(this.ptr, arg0);
    }
}
/**
* サーバーに投げる検索クエリ
* [参考](https://pro.europeana.eu/resources/apis/search) ## Getting Started
*/
export class SearchQuery {

    free() {
        const ptr = this.ptr;
        this.ptr = 0;

        wasm.__wbg_searchquery_free(ptr);
    }
    /**
    * @param {string} query
    * @returns {}
    */
    constructor(query) {
        const ptr0 = passStringToWasm(query);
        const len0 = WASM_VECTOR_LEN;
        this.ptr = wasm.searchquery_new(ptr0, len0);
    }
    /**
    * @param {string} theme
    * @returns {void}
    */
    set_theme(theme) {
        const ptr0 = passStringToWasm(theme);
        const len0 = WASM_VECTOR_LEN;
        return wasm.searchquery_set_theme(this.ptr, ptr0, len0);
    }
    /**
    * @param {string} sort
    * @returns {void}
    */
    set_sort(sort) {
        const ptr0 = passStringToWasm(sort);
        const len0 = WASM_VECTOR_LEN;
        return wasm.searchquery_set_sort(this.ptr, ptr0, len0);
    }
    /**
    * @param {number} rows
    * @returns {void}
    */
    set_rows(rows) {
        return wasm.searchquery_set_rows(this.ptr, rows);
    }
    /**
    * @returns {string}
    */
    query() {
        const retptr = globalArgumentPtr();
        wasm.searchquery_query(retptr, this.ptr);
        const mem = getUint32Memory();
        const rustptr = mem[retptr / 4];
        const rustlen = mem[retptr / 4 + 1];

        const realRet = getStringFromWasm(rustptr, rustlen).slice();
        wasm.__wbindgen_free(rustptr, rustlen * 1);
        return realRet;

    }
    /**
    * @returns {string}
    */
    theme() {
        const retptr = globalArgumentPtr();
        wasm.searchquery_theme(retptr, this.ptr);
        const mem = getUint32Memory();
        const rustptr = mem[retptr / 4];
        const rustlen = mem[retptr / 4 + 1];

        const realRet = getStringFromWasm(rustptr, rustlen).slice();
        wasm.__wbindgen_free(rustptr, rustlen * 1);
        return realRet;

    }
    /**
    * @returns {string}
    */
    sort() {
        const retptr = globalArgumentPtr();
        wasm.searchquery_sort(retptr, this.ptr);
        const mem = getUint32Memory();
        const rustptr = mem[retptr / 4];
        const rustlen = mem[retptr / 4 + 1];

        const realRet = getStringFromWasm(rustptr, rustlen).slice();
        wasm.__wbindgen_free(rustptr, rustlen * 1);
        return realRet;

    }
    /**
    * @returns {number}
    */
    rows() {
        return wasm.searchquery_rows(this.ptr);
    }
    /**
    * @returns {string}
    */
    json() {
        const retptr = globalArgumentPtr();
        wasm.searchquery_json(retptr, this.ptr);
        const mem = getUint32Memory();
        const rustptr = mem[retptr / 4];
        const rustlen = mem[retptr / 4 + 1];

        const realRet = getStringFromWasm(rustptr, rustlen).slice();
        wasm.__wbindgen_free(rustptr, rustlen * 1);
        return realRet;

    }
}
/**
* サーバーから送られてくる検索結果(1件)
*/
export class SearchResult {

    static __wrap(ptr) {
        const obj = Object.create(SearchResult.prototype);
        obj.ptr = ptr;

        return obj;
    }

    free() {
        const ptr = this.ptr;
        this.ptr = 0;

        wasm.__wbg_searchresult_free(ptr);
    }
    /**
    * @param {string} url
    * @param {string} title
    * @param {string} description
    * @param {string} thumbnail
    * @returns {}
    */
    constructor(url, title, description, thumbnail) {
        const ptr0 = passStringToWasm(url);
        const len0 = WASM_VECTOR_LEN;
        const ptr1 = passStringToWasm(title);
        const len1 = WASM_VECTOR_LEN;
        const ptr2 = passStringToWasm(description);
        const len2 = WASM_VECTOR_LEN;
        const ptr3 = isLikeNone(thumbnail) ? [0, 0] : passStringToWasm(thumbnail);
        const len3 = WASM_VECTOR_LEN;
        this.ptr = wasm.searchresult_new(ptr0, len0, ptr1, len1, ptr2, len2, ptr3, len3);
    }
    /**
    * @returns {string}
    */
    thumbnail() {
        const retptr = globalArgumentPtr();
        wasm.searchresult_thumbnail(retptr, this.ptr);
        const mem = getUint32Memory();
        const rustptr = mem[retptr / 4];
        const rustlen = mem[retptr / 4 + 1];
        if (rustptr === 0) return;
        const realRet = getStringFromWasm(rustptr, rustlen).slice();
        wasm.__wbindgen_free(rustptr, rustlen * 1);
        return realRet;

    }
    /**
    * @returns {string}
    */
    url() {
        const retptr = globalArgumentPtr();
        wasm.searchresult_url(retptr, this.ptr);
        const mem = getUint32Memory();
        const rustptr = mem[retptr / 4];
        const rustlen = mem[retptr / 4 + 1];

        const realRet = getStringFromWasm(rustptr, rustlen).slice();
        wasm.__wbindgen_free(rustptr, rustlen * 1);
        return realRet;

    }
    /**
    * @returns {string}
    */
    title() {
        const retptr = globalArgumentPtr();
        wasm.searchresult_title(retptr, this.ptr);
        const mem = getUint32Memory();
        const rustptr = mem[retptr / 4];
        const rustlen = mem[retptr / 4 + 1];

        const realRet = getStringFromWasm(rustptr, rustlen).slice();
        wasm.__wbindgen_free(rustptr, rustlen * 1);
        return realRet;

    }
    /**
    * @returns {string}
    */
    description() {
        const retptr = globalArgumentPtr();
        wasm.searchresult_description(retptr, this.ptr);
        const mem = getUint32Memory();
        const rustptr = mem[retptr / 4];
        const rustlen = mem[retptr / 4 + 1];

        const realRet = getStringFromWasm(rustptr, rustlen).slice();
        wasm.__wbindgen_free(rustptr, rustlen * 1);
        return realRet;

    }
}
/**
* サーバーから送られてくる検索結果
*/
export class SearchResults {

    free() {
        const ptr = this.ptr;
        this.ptr = 0;

        wasm.__wbg_searchresults_free(ptr);
    }
    /**
    * @param {string} s
    * @returns {}
    */
    constructor(s) {
        const ptr0 = passStringToWasm(s);
        const len0 = WASM_VECTOR_LEN;
        this.ptr = wasm.searchresults_new(ptr0, len0);
    }
    /**
    * @returns {number}
    */
    len() {
        return wasm.searchresults_len(this.ptr) >>> 0;
    }
    /**
    * @param {number} i
    * @returns {SearchResult | undefined}
    */
    get(i) {

        const ptr = wasm.searchresults_get(this.ptr, i);
        return ptr === 0 ? undefined : SearchResult.__wrap(ptr);

    }
}
/**
*/
export class Viewer {

    free() {
        const ptr = this.ptr;
        this.ptr = 0;

        wasm.__wbg_viewer_free(ptr);
    }
    /**
    * @returns {number}
    */
    get index() {
        return wasm.__wbg_get_viewer_index(this.ptr) >>> 0;
    }
    /**
    * @param {number} arg0
    * @returns {void}
    */
    set index(arg0) {
        return wasm.__wbg_set_viewer_index(this.ptr, arg0);
    }
    /**
    * Viewer\u{306e}\u{30b3}\u{30f3}\u{30b9}\u{30c8}\u{30e9}\u{30af}\u{30bf}
    * @param {any} canvas
    * @param {any} list_view
    * @param {any} icon_view
    * @returns {}
    */
    constructor(canvas, list_view, icon_view) {
        this.ptr = wasm.viewer_new(addHeapObject(canvas), addHeapObject(list_view), addHeapObject(icon_view));
    }
    /**
    * Manifest\u{3092}\u{30bb}\u{30c3}\u{30c8}\u{3059}\u{308b}
    * @param {string} manifest
    * @returns {boolean}
    */
    set_manifest(manifest) {
        const ptr0 = passStringToWasm(manifest);
        const len0 = WASM_VECTOR_LEN;
        return (wasm.viewer_set_manifest(this.ptr, ptr0, len0)) !== 0;
    }
    /**
    * \u{30a4}\u{30e1}\u{30fc}\u{30b8}\u{3092}\u{8868}\u{793a}\u{3059}\u{308b}
    * @param {number} index
    * @returns {boolean}
    */
    show(index) {
        return (wasm.viewer_show(this.ptr, index)) !== 0;
    }
    /**
    * \u{30a4}\u{30e1}\u{30fc}\u{30b8}\u{3092}src\u{304b}\u{3089}\u{8868}\u{793a}\u{3059}\u{308b}
    * @param {string} src
    * @returns {number}
    */
    get_index_by_src(src) {
        const ptr0 = passStringToWasm(src);
        const len0 = WASM_VECTOR_LEN;
        return wasm.viewer_get_index_by_src(this.ptr, ptr0, len0) >>> 0;
    }
    /**
    * \u{6b21}\u{306e}\u{30a4}\u{30e1}\u{30fc}\u{30b8}\u{3092}\u{8868}\u{793a}\u{3059}\u{308b}
    * @returns {boolean}
    */
    next() {
        return (wasm.viewer_next(this.ptr)) !== 0;
    }
    /**
    * \u{524d}\u{306e}\u{30a4}\u{30e1}\u{30fc}\u{30b8}\u{3092}\u{8868}\u{793a}\u{3059}\u{308b}
    * @returns {boolean}
    */
    prev() {
        return (wasm.viewer_prev(this.ptr)) !== 0;
    }
    /**
    * onclick\u{30a4}\u{30d9}\u{30f3}\u{30c8}
    * mousedown\u{30a4}\u{30d9}\u{30f3}\u{30c8}
    * @param {any} event
    * @returns {void}
    */
    move_mousedown(event) {
        return wasm.viewer_move_mousedown(this.ptr, addHeapObject(event));
    }
    /**
    * mousemove\u{30a4}\u{30d9}\u{30f3}\u{30c8}
    * @param {any} event
    * @returns {Position | undefined}
    */
    move_mousemove(event) {

        const ptr = wasm.viewer_move_mousemove(this.ptr, addHeapObject(event));
        return ptr === 0 ? undefined : Position.__wrap(ptr);

    }
    /**
    * mouseup\u{30a4}\u{30d9}\u{30f3}\u{30c8}
    * @returns {void}
    */
    move_mouseup() {
        return wasm.viewer_move_mouseup(this.ptr);
    }
    /**
    * canvas\u{306e}context\u{3092}\u{53d6}\u{5f97}\u{3059}\u{308b}
    * @returns {string}
    */
    label() {
        const retptr = globalArgumentPtr();
        wasm.viewer_label(retptr, this.ptr);
        const mem = getUint32Memory();
        const rustptr = mem[retptr / 4];
        const rustlen = mem[retptr / 4 + 1];

        const realRet = getStringFromWasm(rustptr, rustlen).slice();
        wasm.__wbindgen_free(rustptr, rustlen * 1);
        return realRet;

    }
    /**
    * @returns {string}
    */
    image_label() {
        const retptr = globalArgumentPtr();
        wasm.viewer_image_label(retptr, this.ptr);
        const mem = getUint32Memory();
        const rustptr = mem[retptr / 4];
        const rustlen = mem[retptr / 4 + 1];

        const realRet = getStringFromWasm(rustptr, rustlen).slice();
        wasm.__wbindgen_free(rustptr, rustlen * 1);
        return realRet;

    }
    /**
    * \u{30a4}\u{30e1}\u{30fc}\u{30b8}\u{3092}\u{8ffd}\u{52a0}
    * HtmlImageElement\u{3092}\u{53d6}\u{5f97}
    * @param {number} index
    * @returns {any}
    */
    get_image_elem(index) {
        return takeObject(wasm.viewer_get_image_elem(this.ptr, index));
    }
    /**
    * image\u{306e}\u{6570}
    * @returns {number}
    */
    size() {
        return wasm.viewer_size(this.ptr) >>> 0;
    }
    /**
    * @param {number} index
    * @returns {void}
    */
    load(index) {
        return wasm.viewer_load(this.ptr, index);
    }
    /**
    * @param {number} index
    * @returns {boolean}
    */
    is_loading(index) {
        return (wasm.viewer_is_loading(this.ptr, index)) !== 0;
    }
    /**
    * @param {number} index
    * @returns {boolean}
    */
    is_loaded(index) {
        return (wasm.viewer_is_loaded(this.ptr, index)) !== 0;
    }
}
/**
*/
export class WasmCurationViewer {

    free() {
        const ptr = this.ptr;
        this.ptr = 0;

        wasm.__wbg_wasmcurationviewer_free(ptr);
    }
    /**
    * @returns {number}
    */
    get index() {
        return wasm.__wbg_get_wasmcurationviewer_index(this.ptr) >>> 0;
    }
    /**
    * @param {number} arg0
    * @returns {void}
    */
    set index(arg0) {
        return wasm.__wbg_set_wasmcurationviewer_index(this.ptr, arg0);
    }
    /**
    * @param {any} element
    * @returns {}
    */
    constructor(element) {
        this.ptr = wasm.wasmcurationviewer_new(addHeapObject(element));
    }
    /**
    * @param {string} json
    * @returns {boolean}
    */
    set_items(json) {
        const ptr0 = passStringToWasm(json);
        const len0 = WASM_VECTOR_LEN;
        return (wasm.wasmcurationviewer_set_items(this.ptr, ptr0, len0)) !== 0;
    }
    /**
    * @returns {string}
    */
    label() {
        const retptr = globalArgumentPtr();
        wasm.wasmcurationviewer_label(retptr, this.ptr);
        const mem = getUint32Memory();
        const rustptr = mem[retptr / 4];
        const rustlen = mem[retptr / 4 + 1];

        const realRet = getStringFromWasm(rustptr, rustlen).slice();
        wasm.__wbindgen_free(rustptr, rustlen * 1);
        return realRet;

    }
    /**
    * @returns {string}
    */
    image_label() {
        const retptr = globalArgumentPtr();
        wasm.wasmcurationviewer_image_label(retptr, this.ptr);
        const mem = getUint32Memory();
        const rustptr = mem[retptr / 4];
        const rustlen = mem[retptr / 4 + 1];

        const realRet = getStringFromWasm(rustptr, rustlen).slice();
        wasm.__wbindgen_free(rustptr, rustlen * 1);
        return realRet;

    }
    /**
    * @returns {number}
    */
    size() {
        return wasm.wasmcurationviewer_size(this.ptr) >>> 0;
    }
    /**
    * @param {number} index
    * @returns {CurationItem | undefined}
    */
    get(index) {

        const ptr = wasm.wasmcurationviewer_get(this.ptr, index);
        return ptr === 0 ? undefined : CurationItem.__wrap(ptr);

    }
    /**
    * @returns {CurationItem | undefined}
    */
    now() {

        const ptr = wasm.wasmcurationviewer_now(this.ptr);
        return ptr === 0 ? undefined : CurationItem.__wrap(ptr);

    }
    /**
    * @param {CurationItem} item
    * @returns {void}
    */
    push(item) {
        return wasm.wasmcurationviewer_push(this.ptr, item.ptr);
    }
    /**
    * @param {number} index
    * @returns {void}
    */
    remove(index) {
        return wasm.wasmcurationviewer_remove(this.ptr, index);
    }
    /**
    * @param {number} oldindex
    * @param {number} newindex
    * @returns {boolean}
    */
    swap(oldindex, newindex) {
        return (wasm.wasmcurationviewer_swap(this.ptr, oldindex, newindex)) !== 0;
    }
    /**
    * @returns {string}
    */
    json() {
        const retptr = globalArgumentPtr();
        wasm.wasmcurationviewer_json(retptr, this.ptr);
        const mem = getUint32Memory();
        const rustptr = mem[retptr / 4];
        const rustlen = mem[retptr / 4 + 1];
        if (rustptr === 0) return;
        const realRet = getStringFromWasm(rustptr, rustlen).slice();
        wasm.__wbindgen_free(rustptr, rustlen * 1);
        return realRet;

    }
    /**
    * \u{30a4}\u{30e1}\u{30fc}\u{30b8}\u{3092}\u{8868}\u{793a}\u{3059}\u{308b}
    * @param {CurationItem} item
    * @returns {number}
    */
    show(item) {
        return wasm.wasmcurationviewer_show(this.ptr, item.ptr) >>> 0;
    }
    /**
    * \u{30a4}\u{30e1}\u{30fc}\u{30b8}\u{3092}\u{8868}\u{793a}\u{3059}\u{308b}
    * @param {number} index
    * @returns {void}
    */
    show_by_index(index) {
        return wasm.wasmcurationviewer_show_by_index(this.ptr, index);
    }
    /**
    * \u{30a4}\u{30e1}\u{30fc}\u{30b8}\u{3092}src\u{304b}\u{3089}\u{8868}\u{793a}\u{3059}\u{308b}
    * @param {string} src
    * @returns {number}
    */
    get_index_by_src(src) {
        const ptr0 = passStringToWasm(src);
        const len0 = WASM_VECTOR_LEN;
        return wasm.wasmcurationviewer_get_index_by_src(this.ptr, ptr0, len0) >>> 0;
    }
    /**
    * \u{6b21}\u{306e}\u{30a4}\u{30e1}\u{30fc}\u{30b8}\u{3092}\u{8868}\u{793a}\u{3059}\u{308b}
    * @returns {void}
    */
    next() {
        return wasm.wasmcurationviewer_next(this.ptr);
    }
    /**
    * \u{524d}\u{306e}\u{30a4}\u{30e1}\u{30fc}\u{30b8}\u{3092}\u{8868}\u{793a}\u{3059}\u{308b}
    * @returns {void}
    */
    prev() {
        return wasm.wasmcurationviewer_prev(this.ptr);
    }
    /**
    * \u{6700}\u{5f8c}\u{306e}\u{30a4}\u{30e1}\u{30fc}\u{30b8}\u{3092}\u{8868}\u{793a}\u{3059}\u{308b}
    * @returns {void}
    */
    show_last() {
        return wasm.wasmcurationviewer_show_last(this.ptr);
    }
    /**
    * mousedown\u{30a4}\u{30d9}\u{30f3}\u{30c8}
    * @param {any} event
    * @returns {void}
    */
    move_mousedown(event) {
        return wasm.wasmcurationviewer_move_mousedown(this.ptr, addHeapObject(event));
    }
    /**
    * mousemove\u{30a4}\u{30d9}\u{30f3}\u{30c8}
    * @param {any} event
    * @returns {Position | undefined}
    */
    move_mousemove(event) {

        const ptr = wasm.wasmcurationviewer_move_mousemove(this.ptr, addHeapObject(event));
        return ptr === 0 ? undefined : Position.__wrap(ptr);

    }
    /**
    * mouseup\u{30a4}\u{30d9}\u{30f3}\u{30c8}
    * @returns {void}
    */
    move_mouseup() {
        return wasm.wasmcurationviewer_move_mouseup(this.ptr);
    }
}

function init(module) {
    if (typeof module === 'undefined') {
        module = import.meta.url.replace(/\.js$/, '_bg.wasm');
    }
    let result;
    const imports = {};
    imports.wbg = {};
    imports.wbg.__wbindgen_object_drop_ref = function(arg0) {
        takeObject(arg0);
    };
    imports.wbg.__wbindgen_object_clone_ref = function(arg0) {
        return addHeapObject(getObject(arg0));
    };
    imports.wbg.__wbg_log_9dc262a10bfe3437 = function(arg0, arg1) {
        let varg0 = getStringFromWasm(arg0, arg1);
        console.log(varg0);
    };
    imports.wbg.__wbg_new_59cb74e423758ede = function() {
        return addHeapObject(new Error());
    };
    imports.wbg.__wbg_stack_558ba5917b466edd = function(ret, arg0) {

        const retptr = passStringToWasm(getObject(arg0).stack);
        const retlen = WASM_VECTOR_LEN;
        const mem = getUint32Memory();
        mem[ret / 4] = retptr;
        mem[ret / 4 + 1] = retlen;

    };
    imports.wbg.__wbg_error_4bb6c2a97407129a = function(arg0, arg1) {
        let varg0 = getStringFromWasm(arg0, arg1);

        varg0 = varg0.slice();
        wasm.__wbindgen_free(arg0, arg1 * 1);

        console.error(varg0);
    };
    imports.wbg.__widl_instanceof_Window = function(arg0) {
        return getObject(arg0) instanceof Window;
    };
    imports.wbg.__widl_f_add_1_DOMTokenList = function(arg0, arg1, arg2) {
        let varg1 = getStringFromWasm(arg1, arg2);
        try {
            getObject(arg0).add(varg1);
        } catch (e) {
            handleError(e);
        }
    };
    imports.wbg.__widl_f_create_element_Document = function(arg0, arg1, arg2) {
        let varg1 = getStringFromWasm(arg1, arg2);
        try {
            return addHeapObject(getObject(arg0).createElement(varg1));
        } catch (e) {
            handleError(e);
        }
    };
    imports.wbg.__widl_f_create_element_with_element_creation_options_Document = function(arg0, arg1, arg2, arg3) {
        let varg1 = getStringFromWasm(arg1, arg2);
        try {
            return addHeapObject(getObject(arg0).createElement(varg1, getObject(arg3)));
        } catch (e) {
            handleError(e);
        }
    };
    imports.wbg.__widl_f_set_attribute_Element = function(arg0, arg1, arg2, arg3, arg4) {
        let varg1 = getStringFromWasm(arg1, arg2);
        let varg3 = getStringFromWasm(arg3, arg4);
        try {
            getObject(arg0).setAttribute(varg1, varg3);
        } catch (e) {
            handleError(e);
        }
    };
    imports.wbg.__widl_f_class_list_Element = function(arg0) {
        return addHeapObject(getObject(arg0).classList);
    };
    imports.wbg.__widl_f_set_inner_html_Element = function(arg0, arg1, arg2) {
        let varg1 = getStringFromWasm(arg1, arg2);
        getObject(arg0).innerHTML = varg1;
    };
    imports.wbg.__widl_f_new_Image = function() {
        try {
            return addHeapObject(new Image());
        } catch (e) {
            handleError(e);
        }
    };
    imports.wbg.__widl_f_set_src_HTMLImageElement = function(arg0, arg1, arg2) {
        let varg1 = getStringFromWasm(arg1, arg2);
        getObject(arg0).src = varg1;
    };
    imports.wbg.__widl_f_set_cross_origin_HTMLImageElement = function(arg0, arg1, arg2) {
        let varg1 = arg1 == 0 ? undefined : getStringFromWasm(arg1, arg2);
        getObject(arg0).crossOrigin = varg1;
    };
    imports.wbg.__widl_f_width_HTMLImageElement = function(arg0) {
        return getObject(arg0).width;
    };
    imports.wbg.__widl_f_natural_width_HTMLImageElement = function(arg0) {
        return getObject(arg0).naturalWidth;
    };
    imports.wbg.__widl_f_complete_HTMLImageElement = function(arg0) {
        return getObject(arg0).complete;
    };
    imports.wbg.__widl_f_client_x_MouseEvent = function(arg0) {
        return getObject(arg0).clientX;
    };
    imports.wbg.__widl_f_client_y_MouseEvent = function(arg0) {
        return getObject(arg0).clientY;
    };
    imports.wbg.__widl_f_offset_x_MouseEvent = function(arg0) {
        return getObject(arg0).offsetX;
    };
    imports.wbg.__widl_f_offset_y_MouseEvent = function(arg0) {
        return getObject(arg0).offsetY;
    };
    imports.wbg.__widl_f_append_child_Node = function(arg0, arg1) {
        try {
            return addHeapObject(getObject(arg0).appendChild(getObject(arg1)));
        } catch (e) {
            handleError(e);
        }
    };
    imports.wbg.__widl_f_document_Window = function(arg0) {

        const val = getObject(arg0).document;
        return isLikeNone(val) ? 0 : addHeapObject(val);

    };
    imports.wbg.__wbindgen_string_new = function(arg0, arg1) {
        let varg0 = getStringFromWasm(arg0, arg1);
        return addHeapObject(varg0);
    };
    imports.wbg.__wbg_call_836fa928f74337e5 = function(arg0, arg1) {
        try {
            return addHeapObject(getObject(arg0).call(getObject(arg1)));
        } catch (e) {
            handleError(e);
        }
    };
    imports.wbg.__wbg_newnoargs_8d1797b163dbc9fb = function(arg0, arg1) {
        let varg0 = getStringFromWasm(arg0, arg1);
        return addHeapObject(new Function(varg0));
    };
    imports.wbg.__wbg_new_b276d8d930d44595 = function() {
        return addHeapObject(new Object());
    };
    imports.wbg.__wbg_set_001d7d49c8e6f145 = function(arg0, arg1, arg2) {
        try {
            return Reflect.set(getObject(arg0), getObject(arg1), getObject(arg2));
        } catch (e) {
            handleError(e);
        }
    };
    imports.wbg.__wbindgen_debug_string = function(ret, arg0) {

        const retptr = passStringToWasm(debugString(getObject(arg0)));
        const retlen = WASM_VECTOR_LEN;
        const mem = getUint32Memory();
        mem[ret / 4] = retptr;
        mem[ret / 4 + 1] = retlen;

    };
    imports.wbg.__wbindgen_throw = function(arg0, arg1) {
        let varg0 = getStringFromWasm(arg0, arg1);
        throw new Error(varg0);
    };

    if (module instanceof URL || typeof module === 'string' || module instanceof Request) {

        const response = fetch(module);
        if (typeof WebAssembly.instantiateStreaming === 'function') {
            result = WebAssembly.instantiateStreaming(response, imports)
            .catch(e => {
                console.warn("`WebAssembly.instantiateStreaming` failed. Assuming this is because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", e);
                return response
                .then(r => r.arrayBuffer())
                .then(bytes => WebAssembly.instantiate(bytes, imports));
            });
        } else {
            result = response
            .then(r => r.arrayBuffer())
            .then(bytes => WebAssembly.instantiate(bytes, imports));
        }
    } else {

        result = WebAssembly.instantiate(module, imports)
        .then(result => {
            if (result instanceof WebAssembly.Instance) {
                return { instance: result, module };
            } else {
                return result;
            }
        });
    }
    return result.then(({instance, module}) => {
        wasm = instance.exports;
        init.__wbindgen_wasm_module = module;

        return wasm;
    });
}

export default init;

