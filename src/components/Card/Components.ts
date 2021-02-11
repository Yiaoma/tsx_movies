import {Children} from "../../interfaces";

// TODO: move this inetrface
interface Src {
    src: string;
}

export interface Components {
    Image: React.FC<Src>;
    Title: React.FC<Children>;
    Text: React.FC<Children>;
}