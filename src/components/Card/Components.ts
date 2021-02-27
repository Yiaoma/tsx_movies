import {Parent} from "../../interfaces";
import {Image} from "../../interfaces";

export interface Components {
    Image: React.FC<Image>;
    Title: React.FC<Parent>;
    Text: React.FC<Parent>;
}