import React, {Component, RefObject} from "react";
import {Chessground} from "chessground/chessground";
import {Key} from "chessground/types";
import {Api} from "chessground/api";
import {Config} from "chessground/config";

export type BoardAttrs = {
    fen: string,

    /**
     * User made move, using mouse or other way.
     * Use it for example: to check puzzle response
     * @param orig
     * @param dest
     * @param cg
     */
    onUserMove: (orig: Key, dest: Key, cg: Api | undefined) => void;
    /**
     * Move made by user or computer [using Api.move method for example]
     * Use it, f.g to apply new dests and make move on the boardObj.
     * @param orig
     * @param dest
     * @param cg
     */
    onMove: (orig: Key, dest: Key, cg: Api | undefined) => void;

    /**
     * Called immediately after Chessground function called.
     * Use it to setup the initial 'dests' or something.
     * @param cg: Chessground API
     */
    onInit: (cg: Api) => void;
}

export type BoardState = {
    width: number;
    api: Api | undefined;
}

export class Board extends Component<BoardAttrs, BoardState> {
    parentRef: RefObject<HTMLDivElement>;
    boardRef: RefObject<HTMLDivElement>;
    onResizeRef: () => void;
    mount = false;

    initialConfig: Config;

    constructor(attrs: BoardAttrs) {
        super(attrs);
        this.parentRef = React.createRef();
        this.boardRef = React.createRef();
        this.onResizeRef = this.onResize.bind(this);

        this.initialConfig = {
            fen: attrs.fen,
            animation: {
                duration: 600
            },
            movable: {
                free: false,
                events: {
                    after: (orig, dest) => attrs.onUserMove(orig, dest, this.state?.api)
                }
            },
            events:{
                move: (orig, dest) =>  attrs.onMove(orig, dest, this.state?.api)
            }
        }
    }

    onResize() {
        this.updateWidth();
    }

    updateWidth() {
        const width = this.parentRef.current?.getBoundingClientRect()?.width ?? 200;
        this.setState({width});
    }

    callInit(api: Api) {
        this.props.onInit(api);
    }

    componentDidMount() {
        // TODO: Component is called two times, because we're in React.StrictMode.
        //  the way with this.mount is bad, but it works and it's simple.

        window.addEventListener("resize", this.onResizeRef);

        if (!this.mount) {
            this.mount = true;
            this.updateWidth();
            let api = Chessground(this.boardRef?.current !!, this.initialConfig);
            this.setState({api});
            this.callInit(api);
        }
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.onResizeRef);
    }

    render() {
        return (
            <div ref={this.parentRef}>
                <div style={{maxHeight: '85vh', maxWidth: '85vh', width: `${this.state?.width ?? 0}px`, height: `${this.state?.width ?? 0}px`}}
                     ref={this.boardRef}>

                </div>
            </div>
        )
    }
}