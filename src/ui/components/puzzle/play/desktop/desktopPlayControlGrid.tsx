import {Paper} from "@mui/material";
import {DesktopPlayPuzzle_Actions, DesktopPlayPuzzle_ActionsAttrs} from "./actions/desktopActions";
import {PuzzleFeedbackValue} from "../../feedback/puzzleFeedbackValue";
import {ResponsivePuzzleFeedback} from "../feedback/responsive/responsivePuzzleFeedback";
import {Puzzle} from "../../../../../api/puzzles/puzzle";
import styled from "styled-components";

export interface DesktopPlayPuzzle_ControlGridAttrs {
    nextPuzzle: () => void;
    feedback: PuzzleFeedbackValue;
    puzzle: Puzzle;
}

const ControlGridWrapper = styled.div`
  height: 100%;
  width: 100%;
  
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const WrapComp = styled.div`
  height: auto;
  margin-top: 10px;
`

export const DesktopPlayPuzzle_ControlGrid = (attrs: DesktopPlayPuzzle_ControlGridAttrs) => {
    return (
        <Paper sx={{padding: '10px', height: '100%'}}>
            <ControlGridWrapper>
                <WrapComp>
                    <ResponsivePuzzleFeedback puzzle={attrs.puzzle} feedback={attrs.feedback}/>
                </WrapComp>
                <WrapComp>
                    <DesktopPlayPuzzle_Actions nextPuzzle={attrs.nextPuzzle} feedback={attrs.feedback}/>
                </WrapComp>
            </ControlGridWrapper>
        </Paper>
    )
}