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
import { ItemButton } from './PaginationItem';
var NextPaginationItemComponent = /** @class */ (function (_super) {
    __extends(NextPaginationItemComponent, _super);
    function NextPaginationItemComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.onClick = function () {
            var _a = _this.props, onClick = _a.onClick, nextPage = _a.nextPage;
            onClick(nextPage);
        };
        return _this;
    }
    NextPaginationItemComponent.prototype.render = function () {
        return (React.createElement(Button, { className: "PaginationItem", onClick: this.onClick, theme: this.props.theme }, "\u203A"));
    };
    return NextPaginationItemComponent;
}(React.PureComponent));
export var NextPaginationItem = withTheme(NextPaginationItemComponent);
var Button = styled(ItemButton)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  ", "\n"], ["\n  ",
    "\n"])), function (_a) {
    var theme = _a.theme;
    return css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    color: ", ";\n  "], ["\n    color: ", ";\n  "])), theme.palette.TEXT_GREY);
});
var templateObject_1, templateObject_2;
//# sourceMappingURL=NextPaginationItem.js.map