// テスト用のデータ

import { Article } from '@/types/database';

const DemoData: Article[] = [
    {
        Id: 1,
        Title: '!!!@@DemoDeta1',
        UserId: 1,
        Thumbnail: 'img/currentEventDemo.svg',
        Description: 'DemoDetaです．DemoDetaです．DemoDetaです．DemoDetaです．DemoDetaです．DemoDetaです．',
        SeriesId: 1,
        Body: `
# セクション0

これは**マークダウン**のデモです。
*otamesi* してみてください。

## セクション1

- リストアイテム1
- リストアイテム2
- リストアイテム3
    - リストアイテム3-1

### セクション2

1. 番号付きリストアイテム1
2. 番号付きリストアイテム2
3. 番号付きリストアイテム3

#### セクション3

> 引用文です。引用文です。引用文です。

##### セクション4

[リンクのテキスト](https://example.com)

###### セクション5

![画像の代替テキスト](https://via.placeholder.com/150)

####### セクション6
\`\`\`html
const message: string = 'Hello, World!';
console.log(message);
\`\`\`
[<button>ボタン](https://example.com)
        `,
        GroupId: 1,
        CreateAt: '2024.3.20',
    },
    {
        Id: 2,
        Title: '!!!@@DemoDeta2',
        UserId: 2,
        Thumbnail: 'img/currentEventDemo.svg',
        Description: 'DemoDeta2です．DemoDeta2です．DemoDeta2です．DemoDeta2です．DemoDeta2です．DemoDeta2です．',
        SeriesId: 2,
        Body: `\
# KogCoder主催クリスマスハッカソン

## ハッカソンとは
ハッカソンは、決められた期間内に新しいアイデアやプロジェクトを開発する競技イベントです！
プログラミング、デザイン、ビジネススキルを結集して、アイデアを具体的な成果物に変え、最後にはプレゼンします！

## KogCoderとは
工学院大学の準公認サークルです！プログラミングの勉強会などを開催しているので、ご興味のある方はお声がけください。

## テーマ
### **「学生生活をよりよくするためのアイディア」**
学生生活を送っていると、いろんなことに悩みますよね。
「こんなのがあったら便利だな」「こういうのはどうだろう」など、学生生活をよりよくするためのアイディアを考えてみましょう！

## 実施内容
テーマに沿ってものづくりをしてみましょう！
プレゼンテーションでは、**発表資料**と未完成でも良いので**デモンストレーション**（開発したもの）の紹介を行ってもらいます！
どのように作ればいいかわからないという方には、**チュートリアルセッション**（後述）にてノーコードでのアプリの開発方法も教えます！
初心者大歓迎😇

## 目的
本企画の目的は工学院大にハッカソンを浸透させることと、学生の社会人基礎力とIT技術を向上させることです。
また、学生の交流の場としても活用していただければ幸いです。

## 日時
12月26,27日 10時~18時  
(⚠️両日参加が必須です)

## 場所
工学院大学 八王子キャンパス 02-664

## スケージュール
### **1日目 (12/26)**
| TIME | &emsp; | CONTENTS |
| --- | --- | --- |
| 10:00 - 10:30 || 開会式 |
| 10:30 - 11:30 || レクリエーション&チームビルディング |
| 11:30 - 12:30 || チュートリアルセッション1（基本編）|
| 12:30 - 13:30 || 昼休憩 |
| 13:30 - 14:30 || チュートリアルセッション2（応用編）|
| 14:30 - 18:00 || 開発（任意休憩）|
| 18:00 - 21:00 || 任意で開発（自由解散） |
### **2日目 (12/27)**
| TIME | &emsp; | CONTENTS |
| --- | --- | --- |
| 10:00 - 15:00 || 開発（任意休憩）|
| 15:00 - 17:00 || 発表 |
| 17:00 - 18:00 || 交流会（任意参加）|
| 18:00 - 19:00 || 各種賞発表と閉会式 |

## チュートリアルセッションについて
チュートリアルセッションではデモを作成するためのツールとして「[**FlutterFlow**](https://flutterflow.io/)」を紹介します。
ブラウザ上かつノーコードでアプリケーションを作成できるため、初心者の方でも簡単にデモを作成できます！
またチュートリアルセッション後も運営がメンターとして開発をサポートしますので、安心してご参加ください！
なお、必ずしもデモにFlutterFlowを用いる必要はありません。

## 昼食について
昼食は各自でご用意ください。

## 参加費・賞金
無料です！ただし、賞金もありません😢

## 応募要項
個人参加・チーム参加どちらも可能です。
1日目にチームビルディングの時間を設けます。
学年・学部は問いません。

## 参加方法
下記のGoogle Formに回答ください  
[<button>🗳️Google Form](https://docs.google.com/forms/d/e/1FAIpQLSeKb76xfVv_26rxX0A_6d4aonGkpxOccbvAkYbTLl3MYIxA4g/viewform)  

## 応募締め切り
ハッカソン前日の12月25日までにご応募ください。

## FAQ
**Q. ハッカソンは2日間参加しないといけないの？**  
原則全日程参加をお願いしております。どうしても全日程参加が厳しい場合は運営にご相談ください。  
**Q. ハッカソンは初心者でも参加できるの？**  
もちろんです！初心者大歓迎です！初心者の方でもノーコードでアプリを作成できるチュートリアルセッションを開催しますので、安心してご参加ください！  
**Q. ハッカソンは何を作ればいいの？**  
テーマに沿ってものづくりをしてください！どんなものでも構いません！  
**Q. ハッカソンは何人で参加すればいいの？**  
1人から参加可能です。個人で参加する場合は、1日目にチームビルディングの時間を設けます。  
**Q. ハッカソンは何を持っていけばいいの？**  
ノートパソコンを持参してください。電源やWi-Fiは会場で用意します。  
**Q. ハッカソンはどんな服装で行けばいいの？**  
自由です！  
**Q. ハッカソンは何を食べればいいの？**  
昼食は各自でご用意ください。  
**Q. 開発方法に条件はありますか？**  
ありません！開発言語等は各チームで自由に決めてください！  
**Q. ハッカソンの賞金はありますか？**  
ありません😢  
**Q. 参加できなくなったらどうすればいいの？**  
下記の問い合わせ先にご連絡ください。  

## 問い合わせ先
[<button>📧Mail](mailto:j222403@g.kogakuin.jp)
[<button>🐦Twitter](https://twitter.com/kogcoder)  
皆様のご応募をお待ちしております！質問等があれば遠慮なくご連絡ください！  
また、興味のありそうなお友達に共有していただけると助かります！   
`,
        GroupId: 2,
        CreateAt: '2024.3.21',
    },
    {
        Id: 3,
        Title: '!!!DemoDeta3',
        UserId: 3,
        Thumbnail: 'img/currentEventDemo.svg',
        Description: 'DemoDeta3です．DemoDeta3です．DemoDeta3です．DemoDeta3です．DemoDeta3です．DemoDeta3です．',
        SeriesId: 3,
        Body: 'DemoDeta3です．DemoDeta3です．DemoDeta3です．DemoDeta3です．DemoDeta3です．DemoDeta3です．',
        GroupId: 3,
        CreateAt: '2024.3.22',
    },
    {
        Id: 4,
        Title: '???DemoDeta4',
        UserId: 4,
        Thumbnail: 'img/currentEventDemo.svg',
        Description: 'DemoDeta4です．DemoDeta4です．DemoDeta4です．DemoDeta4です．DemoDeta4です．DemoDeta4です．',
        SeriesId: 4,
        Body: 'DemoDeta4です．DemoDeta4です．DemoDeta4です．DemoDeta4です．DemoDeta4です．DemoDeta4です．',
        GroupId: 4,
        CreateAt: '2024.3.23',
    },
    {
        Id: 5,
        Title: '???DemoDeta5',
        UserId: 5,
        Thumbnail: 'img/currentEventDemo.svg',
        Description: 'DemoDeta5です．DemoDeta5です．DemoDeta5です．DemoDeta5です．DemoDeta5です．DemoDeta5です．',
        SeriesId: 5,
        Body: 'DemoDeta5です．DemoDeta5です．DemoDeta5です．DemoDeta5です．DemoDeta5です．DemoDeta5です．',
        GroupId: 5,
        CreateAt: '2024.3.24',
    },
    {
        Id: 6,
        Title: '???DemoDeta6',
        UserId: 6,
        Thumbnail: 'img/currentEventDemo.svg',
        Description: 'DemoDeta6です．DemoDeta6です．DemoDeta6です．DemoDeta6です．DemoDeta6です．DemoDeta6です．',
        SeriesId: 6,
        Body: 'DemoDeta6です．DemoDeta6です．DemoDeta6です．DemoDeta6です．DemoDeta6です．DemoDeta6です．',
        GroupId: 6,
        CreateAt: '2024.3.25',
    },
    {
        Id: 7,
        Title: '???DemoDeta7',
        UserId: 7,
        Thumbnail: 'img/currentEventDemo.svg',
        Description: 'DemoDeta7です．DemoDeta7です．DemoDeta7です．DemoDeta7です．DemoDeta7です．DemoDeta7です．',
        SeriesId: 7,
        Body: 'DemoDeta7です．DemoDeta7です．DemoDeta7です．DemoDeta7です．DemoDeta7です．DemoDeta7です．',
        GroupId: 7,
        CreateAt: '2024.3.26',
    },
    {
        Id: 8,
        Title: '!!!@@DemoDeta8',
        UserId: 8,
        Thumbnail: 'img/currentEventDemo.svg',
        Description: 'DemoDeta8です．DemoDeta8です．DemoDeta8です．DemoDeta8です．DemoDeta8です．DemoDeta8です．',
        SeriesId: 8,
        Body: 'DemoDeta8です．DemoDeta8です．DemoDeta8です．DemoDeta8です．DemoDeta8です．DemoDeta8です．',
        GroupId: 8,
        CreateAt: '2024.3.27',
    },
    {
        Id: 9,
        Title: '!!!@@DemoDeta9',
        UserId: 9,
        Thumbnail: 'img/currentEventDemo.svg',
        Description: 'DemoDeta9です．DemoDeta9です．DemoDeta9です．DemoDeta9です．DemoDeta9です．DemoDeta9です．',
        SeriesId: 9,
        Body: 'DemoDeta9です．DemoDeta9です．DemoDeta9です．DemoDeta9です．DemoDeta9です．DemoDeta9です．',
        GroupId: 9,
        CreateAt: '2024.3.28',
    },
    {
        Id: 10,
        Title: '!!!DemoDeta10',
        UserId: 10,
        Thumbnail: 'img/currentEventDemo.svg',
        Description: 'DemoDeta10です．DemoDeta10です．DemoDeta10です．DemoDeta10です．DemoDeta10です．DemoDeta10です．',
        SeriesId: 10,
        Body: 'DemoDeta10です．DemoDeta10です．DemoDeta10です．DemoDeta10です．DemoDeta10です．DemoDeta10です．',
        GroupId: 10,
        CreateAt: '2024.3.29',
    }

]

export default DemoData;
