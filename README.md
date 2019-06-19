IIIF_viewer in COJT, part of backend

Express Node.js

pick_image.jsは手打ちでURLを指定すると画像URLを配列に入れてコンソールに表示してくれる

app.jsを起動しておくと http://localhost:3000/ で待機する。Manifest.jsonのURLをHTTP-POST-Requestで投げると画像URLを配列に入れて返してくれる。