import Avatar from "./Avatar";
import Button from "./Button";
import Checkbox from "./Checkbox";
import CheckboxOption from "./CheckboxOption";
import Copy from "./Copy";
import Input from "./Input";
import Loading from "./Loading";
import Menu from "./Menu";
import Message from "./Message";
import Modal from "./Modal";
import Radio from "./Radio";
import RadioOption from "./RadioOption";
import Select from "./Select";
import SelectOption from "./SelectOption";
import Tag from "./Tag";
import Tree from "./Tree";

const component_list = [
    Avatar,
    Button,
    Checkbox,
    CheckboxOption,
    Copy,
    Input,
    Loading,
    Menu,
    Message,
    Modal,
    Radio,
    RadioOption,
    Select,
    SelectOption,
    Tag,
    Tree,
];

const install = function (v) {
    component_list.forEach(function (c) {
        if (c.install) {
            v.use(c);
        }
    });
};

export default {install};

export {
    Avatar,
    Button,
    Checkbox,
    CheckboxOption,
    Copy,
    Input,
    Loading,
    Menu,
    Message,
    Modal,
    Radio,
    RadioOption,
    Select,
    SelectOption,
    Tag,
    Tree,
};
