import {PuzzleFeedbackValue} from "../../../feedback/puzzleFeedbackValue";
import {Button} from "@mui/material";
import {PlayArrow} from "@mui/icons-material";
import {useTranslation} from "react-i18next";
import styled from "styled-components";

export type DesktopPlayPuzzle_ActionsAttrs = {
    nextPuzzle: () => void;
    feedback: PuzzleFeedbackValue;
}

export const DesktopPlayPuzzle_SolvedActionButton = ({goNext}: {goNext: () => void}) => {
    const {t} = useTranslation();
    return (
        <Button variant={'contained'} onClick={goNext}>
            <PlayArrow/>
            {t("puzzle._desktop._comps.puzzle-actions.next-puzzle")}
        </Button>
    )
}

export const DesktopPlayPuzzle_SkipActionButton = ({goNext}: {goNext: () => void}) => {
    const {t} = useTranslation();
    return (
        <Button variant={'text'} onClick={goNext}>
            {t("puzzle._desktop._comps.puzzle-actions.skip-puzzle")}
        </Button>
    );
}

const DesktopActionsWrapper = styled.div`
  width: 100%;
  height: 100%;
  text-align: center;
`;

export const DesktopPlayPuzzle_Actions = (attrs: DesktopPlayPuzzle_ActionsAttrs) => {
    return (
        <DesktopActionsWrapper>

            {attrs.feedback == "solved" ? <DesktopPlayPuzzle_SolvedActionButton goNext={attrs.nextPuzzle}/> : null}

            {attrs.feedback != "solved" ? <DesktopPlayPuzzle_SkipActionButton goNext={attrs.nextPuzzle}/> : null}

        </DesktopActionsWrapper>
    )
}