# Denoばた会議 Monthly レポートへのコントリビューション
## Issueについて
不足部分への提案、大歓迎です。

## Pull Requestについて
誤字脱字の修正や、ハイパーリンクの新規追加や修正、誤謬の訂正など大歓迎です。

## 記載規則について
- 人名は『Discord上で出てきた名前＋さん』にする
  - 検索性を担保するため、略されてる方（crowlKatsさんの場合クロールさん）については略さず書く
  - 一定のブレは許容する
- Deno社に統一

## 起動方法
```bash
deno task dev
```

## 新規レポート作成方法
deno-util CLIで作成可能です。
以下のコマンドでインストールし、

```bash
deno install -n deno-util --allow-read --allow-write https://pax.deno.dev/windchime-yk/deno-util@<VERSION>/cli.ts
```
以下のコマンドで対話的入力が起動、新規レポートが出力されます。

```bash
deno-util dcr
```