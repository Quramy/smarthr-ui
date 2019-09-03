var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import * as React from 'react';
import styled, { css } from 'styled-components';
import { withTheme } from '../../hocs/withTheme';
import { Icon } from '../Icon';
var CheckboxComponent = /** @class */ (function (_super) {
    __extends(CheckboxComponent, _super);
    function CheckboxComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.handleChange = function () {
            var _a = _this.props, checked = _a.checked, name = _a.name, onChange = _a.onChange;
            if (onChange)
                onChange(name, !checked);
        };
        return _this;
    }
    CheckboxComponent.prototype.render = function () {
        var _a = this.props, checked = _a.checked, name = _a.name, _b = _a.disabled, disabled = _b === void 0 ? false : _b, _c = _a.themeColor, themeColor = _c === void 0 ? 'light' : _c, theme = _a.theme, _d = _a.className, className = _d === void 0 ? '' : _d;
        var classNames = "\n      " + className + " " + (checked ? 'active' : '') + " " + (disabled ? 'disabled' : '') + " " + themeColor + "\n    ";
        return (React.createElement(Wrapper, { className: classNames, theme: theme },
            checked && (React.createElement(IconWrap, null,
                React.createElement(Icon, { name: "fa-check", size: 12, color: themeColor === 'light' ? '#fff' : theme.palette.MAIN }))),
            React.createElement(Input, { type: "checkbox", checked: checked, name: name, disabled: disabled, onChange: this.handleChange })));
    };
    return CheckboxComponent;
}(React.PureComponent));
export var Checkbox = withTheme(CheckboxComponent);
var Wrapper = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  ", "\n"], ["\n  ",
    "\n"])), function (_a) {
    var theme = _a.theme;
    var frame = theme.frame, palette = theme.palette;
    return css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n      position: relative;\n      display: inline-block;\n      width: 20px;\n      height: 20px;\n      flex-shrink: 0;\n      border-radius: ", ";\n      border: ", ";\n      background-color: #fff;\n      line-height: 1;\n      box-sizing: border-box;\n\n      &.active {\n        border-color: ", ";\n        background-color: ", ";\n      }\n\n      &.disabled {\n        background-color: ", ";\n        border-color: ", ";\n\n        &.active {\n          border-color: ", ";\n        }\n      }\n\n      &.dark {\n        border-color: ", ";\n\n        &.active {\n          background-color: #fff;\n        }\n      }\n    "], ["\n      position: relative;\n      display: inline-block;\n      width: 20px;\n      height: 20px;\n      flex-shrink: 0;\n      border-radius: ", ";\n      border: ", ";\n      background-color: #fff;\n      line-height: 1;\n      box-sizing: border-box;\n\n      &.active {\n        border-color: ", ";\n        background-color: ", ";\n      }\n\n      &.disabled {\n        background-color: ", ";\n        border-color: ", ";\n\n        &.active {\n          border-color: ", ";\n        }\n      }\n\n      &.dark {\n        border-color: ", ";\n\n        &.active {\n          background-color: #fff;\n        }\n      }\n    "])), frame.border.radius.s, frame.border.default, palette.MAIN, palette.MAIN, palette.BORDER, palette.BORDER, palette.BORDER, palette.MAIN);
});
var Input = styled.input(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  opacity: 0;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  margin: 0;\n  cursor: pointer;\n\n  &[disabled] {\n    pointer-events: none;\n  }\n"], ["\n  opacity: 0;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  margin: 0;\n  cursor: pointer;\n\n  &[disabled] {\n    pointer-events: none;\n  }\n"])));
var IconWrap = styled.span(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  display: inline-block;\n  width: 12px;\n  height: 12px;\n  transform: translate(-50%, -50%);\n\n  & > svg {\n    vertical-align: top;\n  }\n"], ["\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  display: inline-block;\n  width: 12px;\n  height: 12px;\n  transform: translate(-50%, -50%);\n\n  & > svg {\n    vertical-align: top;\n  }\n"])));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
//# sourceMappingURL=Checkbox.js.map