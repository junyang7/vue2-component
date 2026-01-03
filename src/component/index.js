import Avatar from "./avatar";
import Button from "./button";
import Input from "./input";
import Loading from "./loading";
import Message from "./message";
import Modal from "./modal";
import Select from "./select";
import Tag from "./tag";

const component_list = [
    Avatar,
    Button,
    Input,
    Loading,
    Message,
    Modal,
    Select,
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
    Input,
    Loading,
    Message,
    Modal,
    Select,
    Tag,
};
