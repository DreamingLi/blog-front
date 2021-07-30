/* eslint-disable camelcase */
export interface HeaderContent{
    id: number,
    leftName: string,
    published_at: Date,
    created_at: Date,
    updated_at: Date
    nav: HeaderContentItem[],
    rightSearch: string
}

export interface HeaderContentItem{
    id: number,
    name: string,
    path: string,
    list: HeaderContentDropDownItem[]
}

export interface HeaderContentDropDownItem{
    id: number,
    name: string,
    path: string
}
