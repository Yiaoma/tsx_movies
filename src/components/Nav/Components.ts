import {Parent, Link} from "../../interfaces";

export interface Components {
    Bar: React.FC<Parent>;
    Logo: React.FC<Link & Parent>;
    CollapseToggler: React.FC;
    Collapse: React.FC<Parent>;
    List: React.FC<Parent>;
    Item: React.FC<Parent>;
    Dropdown: React.FC<Parent>;
    DropdownToggler: React.FC<Parent>;
    SubList: React.FC<Parent>;
    SubItem: React.FC<Parent>;
    Link: React.FC<Link & Parent>;
}