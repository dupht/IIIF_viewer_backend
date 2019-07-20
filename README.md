IIIF_viewer in COJT, part of backend

Express Node.js

### search_manifest.js

search_manifest.jsはEuropeanaのAPIからManifest.jsonを検索することでWeb上にあるマニフェストファイルの検索を実現している。
基本的には[このブログ](http://digitalnagasaki.hatenablog.com/entry/2019/03/04/015114)にある方法でManifestファイルの検索をかけるが、いくつか変更点があるため工程を残しておく

#### 手順1
EuropeanaのsearchAPI(エンドポイント:https://www.europeana.eu/api/v2/search.json に対して以下のパラメータでGETリクエストを送る
パラメータ(パラメータの指定方法は https://pro.europeana.eu/resources/apis/search#param-query を参照のこと)

```
{
    query=sv_dcterms_conformsTo%3A*iiif*(固定 IIIF対応コンテンツを抜き出すために必要),
    theme=’次の選択肢が可能: archaelogy, art, fashion, manuscript, map, migration, music, nature, newspaper, photography, sport, ww1.’,
    sort=’Example: &sort=timestamp_update+desc’,
    rows=’検索件数(~100)’,
    qf=title:’検索のクエリ’
    wskey=’自分のAPI Key’
}
```

#### 手順2
https://pro.europeana.eu/resources/apis/iiif によるとhttps://iiif.europeana.eu/presentation/’RECORD_ID’/manifest がマニフェストである。

’REORD_ID’とは1.のresponseとして得たJSONファイルのresponse.items.idに格納されているものである。

> 例：/9200518/ark__12148_btv1b8304309t や /9200356/BibliographicResource_3000118390149

よって例として挙げたRECORD_IDを使ってmanifestを取得すると
https://iiif.europeana.eu/presentation/9200518/ark__12148_btv1b8304309t/manifest
https://iiif.europeana.eu/presentation/9200356/BibliographicResource_3000118390149/manifest
になる

manifest.jsonを取得したい場合、上のURLに’.json’を付ければよい

最終的に得られるmanifest.jsonは以下のものになる
https://iiif.europeana.eu/presentation/9200518/ark__12148_btv1b8304309t/manifest.json
https://iiif.europeana.eu/presentation/9200356/BibliographicResource_3000118390149/manifest.json

#### 備考
Manifestファイルに関するタイトルとディスクリプションを取得したい場合

手順1で検索をかけると、responseのJSONは配列`item`sのパラメータとして`description`と`title`を持つことが分かる

descriptionもtitleも配列であることに注意して取得すればよい

```
"dcDescription": [
    "Appartient à l'ensemble documentaire : FranceJp0",
    "Ancienne collection Johan Willem de Sturler"
],
"title": [
    "Tôkaidô gojûsan tsugi / Ill. Katsushika Hokusai東海道五十三次 / 葛飾北斎画. Japonais 381 (40)"
],
```
