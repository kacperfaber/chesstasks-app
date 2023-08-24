import React, {Component, Ref, RefObject, useRef} from "react";
import {Chessground} from "chessground/chessground";

export interface ViewOnlyBoardAttrs {
    fen: string;
}

export interface ViewOnlyBoardState {
    width: number;
}

export class ViewOnlyBoard extends Component<ViewOnlyBoardAttrs, ViewOnlyBoardState> {
    parentRef: RefObject<HTMLDivElement>;
    boardRef: RefObject<HTMLDivElement>;
    onResizeRef: () => void;

    constructor(attrs: ViewOnlyBoardAttrs) {
        super(attrs);
        this.parentRef = React.createRef();
        this.boardRef = React.createRef();
        this.onResizeRef = this.onResize.bind(this);
    }

    onResize() {
        this.updateWidth();
    }

    updateWidth() {
        const width = this.parentRef.current?.getBoundingClientRect()?.width ?? 200;
        this.setState({width});
    }

    componentDidMount() {
        this.updateWidth();
        window.addEventListener("resize", this.onResizeRef);

        Chessground(this.boardRef?.current !!, {viewOnly: true, fen: this.props.fen, coordinates: false});
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.onResizeRef);
    }

    render() {
        return (
            <div ref={this.parentRef}>
                <div style={{width: `${this.state?.width ?? 0}px`, height: `${this.state?.width ?? 0}px`}} ref={this.boardRef}></div>
            </div>
        )
    }
}