import {Puzzle} from "../../../../../../api/puzzles/puzzle";
import {PuzzleFeedbackValue} from "../../../feedback/puzzleFeedbackValue";
import {BottomNavigation, BottomNavigationAction, Paper} from "@mui/material";
import {ArrowRight, BarChart} from "@mui/icons-material";
import {useState} from "react";
import {MobilePlayRankingDialog} from "./mobilePlayRankingDialog";

export interface MobilePuzzleNavAttrs {
    puzzle: Puzzle;
    feedback: PuzzleFeedbackValue;
    nextPuzzle: () => void;
}

type MobilePuzzleNavValue = "rank" | "next";

export const MobilePuzzleNav = ({feedback, puzzle, nextPuzzle}: MobilePuzzleNavAttrs) => {
    const [rankingDial, setRankingDial] = useState(false);

    const consumeValue = (ev: React.SyntheticEvent, value: any) => {
        const v = value as MobilePuzzleNavValue;

        switch (v) {
            case "next":
                nextPuzzle()
                break;

            case "rank":
                setRankingDial(true);
                break;
        }
    }

    return (
        <>
            <BottomNavigation sx={{bottom: '0', position: 'absolute', width: '100%'}} onChange={consumeValue}>
                <BottomNavigationAction
                    value={'rank'}
                    icon={<BarChart/>}/>

                <BottomNavigationAction
                    value={'next'}
                    icon={<ArrowRight/>}/>
            </BottomNavigation>

            <MobilePlayRankingDialog open={rankingDial} onClose={() => setRankingDial(false)}/>
        </>
    )
}