import Avatar from "./avatar";
import Button from "./button";
import Checkbox from "./Checkbox";
import CheckboxOption from "./CheckboxOption";
import Input from "./Input";
import Loading from "./loading";
import Message from "./message";
import Modal from "./modal";
import Radio from "./Radio";
import RadioOption from "./RadioOption";
import Select from "./Select";
import SelectOption from "./SelectOption";
import Tag from "./tag";

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
