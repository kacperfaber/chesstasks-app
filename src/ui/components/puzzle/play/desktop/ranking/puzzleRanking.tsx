import {PlayPaper} from "../../../playPaper";
import {Typography} from "@mui/material";
import {useTranslation} from "react-i18next";
import styled from "styled-components";

export interface DesktopPlayPuzzle_RankingAttrs {
    ranking?: number;
    rankingDiff?: number;
}

export const DesktopPlayPuzzle_RankingDiff = ({diff}: {diff?: number}) => {
    if (!diff) {
        return null;
    }

    const getCol: () => string = () => {
        if (diff == 0) {
            return 'gray';
        }
        else if (diff > 0) {
            return 'green';
        }
        else {
            return 'red';
        }
    }

    const getChar: () => string = () => {
        if (diff == 0) {
            return '±';
        }

        return diff > 0 ? "+" : "-"
    }

    return (<Typography sx={{display: 'inline'}} variant={'h4'} color={getCol()}>{getChar()}{diff}</Typography>);
}

const DesktopRankingWrapper = styled.div`
  width: 100%;
  height: 100%;
  
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  
  padding: 15px;
`;

export const DesktopPlayPuzzle_Ranking = ({ranking, rankingDiff}: DesktopPlayPuzzle_RankingAttrs) => {
    const {t} = useTranslation();

    return (
        <PlayPaper>
            <Typography variant={'h5'}>{t("puzzle._desktop._comps.puzzle-ranking.title")}</Typography>
            <Typography variant={'body2'} color={'text.secondary'}>{t("puzzle._desktop._comps.puzzle-ranking.body")}</Typography>

            <DesktopRankingWrapper>
                <Typography sx={{display: 'inline'}} variant={'h4'}>{ranking}</Typography>
                <DesktopPlayPuzzle_RankingDiff diff={rankingDiff}/>
            </DesktopRankingWrapper>
        </PlayPaper>
    )
}