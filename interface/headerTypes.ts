/* eslint-disable camelcase */
export interface HeaderContent{
    id: number,
    leftName: string,
    published_at: Date,
    created_at: Date,
    updated_at: Date
    nav: HeaderContentItem,
    rightSearch: string
}

export interface HeaderContentItem{
    id: number,
    home: string,
    archive: string,
    comments: string,
    friends: string,
    donate: string,
    about: string,
    app: string,
    others: string
}
