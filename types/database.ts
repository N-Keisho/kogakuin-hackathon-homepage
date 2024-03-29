// バックエンドとの通信で使用するデータ型を定義するファイル

export interface Group {
    Id: number;
    name: string;
}

export interface Uer {
    id: number;
    Name: string;
    Password: string;
    Mail: string;
    IsActivated: boolean;
}

export interface Article {
    Id: number;
    Title: string;
    UserId: number;
    Thumbnail: string;
    Description: string;
    SeriesId: number;
    Body: string;
    GroupId: number;
    CreateAt: string;
}

export interface Series {
    Id: number;
    Title: string;
    Thumbnail: string;
    Description: string;
}

export interface Tag {
    Id: number;
    Name: string;
    Color: string;
}

export interface Article_tag {
    Id: number;
    ArticleId: number;
    TagId: number;
}

export interface Series_tag {
    Id: number;
    SeriesId: number;
    TagId: number;
}