import { StaticImageData } from "next/image";

export interface articleInterface {
    imagePath?:StaticImageData
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