// 質問項目

import { Category } from "@mui/icons-material";

const questions = [
    {
        category: '全般の質問',
        questions: [
            {
                question: '工学院ハッカソンとは？',
                answer: '工学院大学の学生のためのハッカソンです．'
            },
            {
                question: '対象学生．参加条件を教えてください',
                answer: '工学院大学の学生であればどなたでもご参加いただけます．学外の学生については現在募集しておりませんが，いずれ広く募集したいと考えております．'
            },
            {
                question: '参加費はかかりますか？',
                answer: '参加費は無料です．'
            },
            {
                question: '賞金はありますか？',
                answer: '現在大学と協議中です．何かしらの形で報酬がでる予定です！'
            },
            {
                question: 'すべての日程に参加しなければなりませんか？',
                answer: '現属全日参加をお願いしていますが，どうしても難しい場合は運営にご相談ください．'
            },
            {
                question: '初心者でも参加できますか？',
                answer: 'もちろんです！初心者大歓迎です！'
            },
            {
                question: '参加人数は制限されていますか？',
                answer: '制限はありません．'
            },
            {
                question: '参加するにはどうしたらよいですか？',
                answer: '各イベントの参加申し込みフォームからお申し込みください．'
            },
            {
                question: '問い合わせ先は？',
                answer: 'hackathon.kogakuin@gmail.com までお問い合わせください．'
            }
        ]
    },
    {
        category: '開発について',
        questions : [
            {
                question: '開発方法に指定はありますか？',
                answer: '特に指定はありません．各チームで自由に決めてください'
            },
            {
                question: 'プログラミングのスキルは必須ですか？',
                answer: '必須ではありません．ご自身の持ちうる力・技術・アイディアを活かして，挑戦いただけます．'
            },
        ]

    },
    {
        category: '当日について',
        questions: [
            {
                question: '当日必要なものはありますか？',
                answer: 'パソコンや機材，プレゼンテーションの資料など，開発・発表に必要なものをお持ちください．'
            },
            {
                question: 'どんな服でいけばいいですか？',
                answer: '特に指定はありません．楽な格好でお越しください．'
            },
            {
                question: '食事は提供されますか？',
                answer: '提供されません．各自でご用意ください．'
            },
            {
                question: '休憩はありますか？',
                answer: '運営が適宜休憩時間を設けます．'
            },
            {
                question: '遅刻する場合はどうしたらよいですか？',
                answer: 'Discordやメール等で運営までご連絡ください．'
            }
        ]
    }

];

export default questions;