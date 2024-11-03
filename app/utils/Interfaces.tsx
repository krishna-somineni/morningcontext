export interface articleInterface {
    headerColor?:string;
    imagePath:string;
    heading?: string;
    title?: string;
    description?: string;
    editorName?: string;
    timeToRead?: string;
    displayDescription?:boolean,
    displayImage?:boolean,
    comments?: string;  
    titleTextSize?:string,
    displayTimeToRead?:boolean,
}

export interface cardRow {
    time: string;
    description: string;
}

export interface yesterday {
    title: string;
    description: string;
    borderColor: string;
    background: string;
}

export interface articlePropsInterface
{
    articleData:articleInterface
}

export interface newsCardPropsInterface
{
    card:cardRow
}

export interface topStoryPropsInterface
{
    story:articleInterface
    index:number
}

export interface yesterdaysCardPropsInterface
{
    yesData:yesterday
}