import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BaseDialog } from '@microsoft/sp-dialog';

export default class DialogReactRenderer<T> extends BaseDialog {
    private element: React.FunctionComponentElement<T>;

    constructor(element: React.FunctionComponentElement<T>) {
        super({ isBlocking: false });
        this.element = element;
    }

    public render(): void {
        ReactDOM.render(this.element, this.domElement);
    }

    protected onAfterClose(): void {
        super.onAfterClose();
        ReactDOM.unmountComponentAtNode(this.domElement);
    }
}
