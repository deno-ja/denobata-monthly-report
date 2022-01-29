import {
  isExistFile,
  Prompt,
  readDate,
  writeFile,
  zeroPadding,
} from "./deps.ts";
import { Answers } from "./model.ts";

const answers = await Prompt.prompts<Answers>([
  {
    type: "number",
    name: "count",
    message: "開催回数",
  },
  {
    type: "text",
    name: "datetime",
    message: "開催日",
    validate(result: string) {
      if (!/[0-9]{4}\/[0-9]{2}\/[0-9]{2}/.test(result)) {
        throw new Error("xxxx/xx/xxという形式で入力してください");
      }
    },
  },
  {
    type: "text",
    name: "link",
    message: "Connpassリンク",
    validate(result: string) {
      if (!/^http(s):\/\//.test(result)) {
        throw new Error("URLを入力してください");
      }
    },
  },
]);

const template = ({ count, datetime, link }: Answers) => {
  const { year, month, date } = readDate({ date: datetime });
  const convertNumber = (text: unknown) =>
    typeof text === "number" ? text : Number(text);

  return `# Denoばた会議 Monthly 第${count}回
${year}年${month}月${date}日開催。  
[connpassリンク](${link})。

## 今月のアップデートを追う
Denoのアップデートを追っていくLT。  
そのあとの雑談込みでザックリと箇条書き。

[@uki00aさんのスライド](https://uki00a.github.io/slides/denobata-${year}-${
    zeroPadding(convertNumber(month), 2)
  }-${date})

## LT1

## LT2

## アフタートーク

## 参考資料
上記をまとめる際に眺め、かつ箇条書きの中に含められなかった資料です。  
名前だけ掠ってて関係ない資料もあるかと思いますが、まとめる作業の可視化として残しています。  
読まなくて大丈夫です。
- [example](https://example.com/)
`;
};

const generateNewReport = async (template: string, count: number) => {
  const filename = `docs/report/${zeroPadding(count, 2)}.md`;
  if (!await isExistFile(filename)) await writeFile(template, filename);
  else throw new Error("既に存在しているファイルです");
};

await generateNewReport(
  template({
    count: answers.count,
    datetime: answers.datetime,
    link: answers.link,
  }),
  answers.count,
);
