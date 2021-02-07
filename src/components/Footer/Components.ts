import {Children} from "../../interfaces";

export interface Components {
    List: React.FC<Children>;
    Item: React.FC<Children>;
    Link: React.FC<Children>;
    Copyright: React.FC<Children>;
}