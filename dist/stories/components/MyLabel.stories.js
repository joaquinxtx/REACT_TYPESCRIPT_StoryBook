"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomBackgroundColor = exports.CustomFontColor = exports.Terciary = exports.Secondary = exports.AllCarps = exports.Basic = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var MyLabel_1 = require("../../components/MyLabel");
exports.default = {
    title: 'UI/MyLabel',
    component: MyLabel_1.MyLabel,
    argTypes: {
        fontColor: { control: 'color' }
    }
};
var Template = function (args) { return (0, jsx_runtime_1.jsx)(MyLabel_1.MyLabel, __assign({}, args)); };
exports.Basic = Template.bind({});
exports.Basic.args = {
    size: 'normal',
    allCarps: false,
};
exports.AllCarps = Template.bind({});
exports.AllCarps.args = {
    size: 'normal',
    allCarps: true,
    color: 'primary'
};
exports.Secondary = Template.bind({});
exports.Secondary.args = {
    size: 'normal',
    color: 'secondary',
};
exports.Terciary = Template.bind({});
exports.Terciary.args = {
    size: 'normal',
    color: 'tertiary',
};
exports.CustomFontColor = Template.bind({});
exports.CustomFontColor.args = {
    size: 'h1',
    fontColor: "#878000"
};
exports.CustomBackgroundColor = Template.bind({});
exports.CustomBackgroundColor.args = {
    size: 'h1',
    fontColor: "#878000",
    backgroundColor: 'black'
};
