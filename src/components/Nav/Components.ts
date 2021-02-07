import {Children} from "../../interfaces";

export interface Components {
    Bar: React.FC<Children>;
    Logo: React.FC<Children>;
    CollapseToggler: React.FC;
    Collapse: React.FC<Children>;
    List: React.FC<Children>;
    Item: React.FC<Children>;
    Dropdown: React.FC<Children>;
    DropdownToggler: React.FC<Children>;
    SubList: React.FC<Children>;
    SubItem: React.FC<Children>;
}