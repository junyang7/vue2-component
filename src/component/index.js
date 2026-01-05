import Avatar from "./Avatar";
import Button from "./Button";
import Checkbox from "./Checkbox";
import CheckboxOption from "./CheckboxOption";
import Input from "./Input";
import Loading from "./Loading";
import Message from "./Message";
import Modal from "./Modal";
import Radio from "./Radio";
import RadioOption from "./RadioOption";
import Select from "./Select";
import SelectOption from "./SelectOption";
import Tag from "./Tag";

const component_list = [
    Avatar,
    Button,
    Checkbox,
    CheckboxOption,
    Input,
    Loading,
    Message,
    Modal,
    Radio,
    RadioOption,
    Select,
    SelectOption,
    Tag,
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
    Input,
    Loading,
    Message,
    Modal,
    Radio,
    RadioOption,
    Select,
    SelectOption,
    Tag,
};
