import {Children} from "../../interfaces";

// TODO: MOVE THIS INTERFACE!
interface To extends Children {
    to: string;
}


export interface Components {
    Bar: React.FC<Children>;
    Logo: React.FC<To>;
    CollapseToggler: React.FC;
    Collapse: React.FC<Children>;
    List: React.FC<Children>;
    Item: React.FC<Children>;
    Dropdown: React.FC<Children>;
    DropdownToggler: React.FC<Children>;
    SubList: React.FC<Children>;
    SubItem: React.FC<Children>;
    Link: React.FC<To>;
}