import {Button, Grid} from "@mui/material";
import {PlayArrow} from "@mui/icons-material";
import {useTranslation} from "react-i18next";
import {MobileNavigationItemValue} from "../../../../layout/navigation/mobile/mobileNavigation";
import styled from "styled-components";
import {PuzzleFeedbackValue} from "../../../feedback/puzzleFeedbackValue";

const ActionsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

export const MobilePlayPuzzle_Actions = ({feedback, goNext}: {feedback: PuzzleFeedbackValue, goNext: () => void, }) => {
    const {t} = useTranslation();

    const nextClick = goNext;

    return (
        <Grid container>
            <Grid item xs={12}>
                <ActionsWrapper>
                    {feedback == "solved" ? (<Button onClick={nextClick} variant={'contained'}>
                            <PlayArrow/>

                            {t("puzzle._mobile._comps.puzzle-actions.next-puzzle")}
                        </Button>) : (<Button onClick={nextClick} variant={'text'}>
                                {t("puzzle._mobile._comps.puzzle-actions.skip-puzzle")}
                        </Button>
                        )
                    }
                </ActionsWrapper>
            </Grid>
        </Grid>
    )
}