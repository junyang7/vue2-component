import Ace from "./Ace";
import Avatar from "./Avatar";
import Button from "./Button";
import Checkbox from "./Checkbox";
import CheckboxOption from "./CheckboxOption";
import Contextmenu from "./Contextmenu";
import Copy from "./Copy";
import Datetime from "./Datetime";
import DatetimeSE from "./DatetimeSE";
import Form from "./Form";
import FormAce from "./FormAce";
import FormDatetime from "./FormDatetime";
import FormDatetimeSE from "./FormDatetimeSE";
import FormInput from "./FormInput";
import FormRadio from "./FormRadio";
import FormSelect from "./FormSelect";
import Input from "./Input";
import Loading from "./Loading";
import Menu from "./Menu";
import Message from "./Message";
import Modal from "./Modal";
import Page from "./Page";
import Radio from "./Radio";
import RadioOption from "./RadioOption";
import Select from "./Select";
import SelectOption from "./SelectOption";
import Tag from "./Tag";
import Tree from "./Tree";

const component_list = [
    Ace,
    Avatar,
    Button,
    Checkbox,
    CheckboxOption,
    Contextmenu,
    Copy,
    Datetime,
    DatetimeSE,
    Form,
    FormAce,
    FormDatetime,
    FormDatetimeSE,
    FormInput,
    FormRadio,
    FormSelect,
    Input,
    Loading,
    Menu,
    Message,
    Modal,
    Page,
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
    Ace,
    Avatar,
    Button,
    Checkbox,
    CheckboxOption,
    Contextmenu,
    Copy,
    Datetime,
    DatetimeSE,
    Form,
    FormAce,
    FormDatetime,
    FormDatetimeSE,
    FormInput,
    FormRadio,
    FormSelect,
    Input,
    Loading,
    Menu,
    Message,
    Modal,
    Page,
    Radio,
    RadioOption,
    Select,
    SelectOption,
    Tag,
    Tree,
};
