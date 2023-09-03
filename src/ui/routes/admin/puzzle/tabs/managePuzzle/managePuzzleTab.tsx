import {useTranslation} from "react-i18next";
import {useState} from "react";
import {Avatar, Box, Button, TextField, Typography} from "@mui/material";
import {ManagePuzzleTab_SearchPuzzleForm} from "./searchPuzzleForm";
import {Puzzle} from "../../../../../../api/puzzles/puzzle";
import styled from "styled-components";
import ExtensionIcon from '@mui/icons-material/Extension';
import ExtensionOffIcon from '@mui/icons-material/ExtensionOff';
import {PuzzleAdminService} from "../../../../../../services/admin/puzzleAdminService";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  
  width: 100%;
  height: 100%;
`;

const ColWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  margin-top: 25px;
`;

export const ManagePuzzleTab_Found = ({puzzle, resetResult}: {puzzle: Puzzle, resetResult: () => void}) => {
    const {t} = useTranslation();

    const del = () => {
        PuzzleAdminService.deletePuzzle(puzzle.id)
            .then(resetResult)
            .catch(() => alert("Couldn't delete this puzzle."));
    }

    return (
        <Wrapper>
            <Avatar>
                <ExtensionIcon/>
            </Avatar>

            <Typography variant={'h5'}>
                {t("_admin.manage-puzzles.manage-puzzle.search-puzzle")}
            </Typography>

            <Typography variant={'body2'} color={'text.secondary'}>
                {t("_admin.manage-puzzles.manage-puzzle.what-you-want-to-do")}
            </Typography>

            <ColWrapper>
                <Typography variant={'body1'}>
                    {t("_admin.manage-puzzles.manage-puzzle.you-want-to-delete")}
                </Typography>

                <Button onClick={del}
                        variant={'contained'}
                        color={'secondary'}>
                    {t("_admin.manage-puzzles.manage-puzzle.delete-puzzle")}
                </Button>
            </ColWrapper>

        </Wrapper>
    )
}

export function ManagePuzzleTab_NotFound() {
    const {t} = useTranslation();
    return (
        <Wrapper>
            <Avatar>
                <ExtensionOffIcon/>
            </Avatar>

            <Typography variant={'h5'}>
                {t("_admin.manage-puzzles.manage-puzzle.not-found")}
            </Typography>

            <Typography variant={'body2'} color={'text.secondary'}>
                {t("_admin.manage-puzzles.manage-puzzle.try-another-id")}
            </Typography>
        </Wrapper>
    );
}

export const AdminManagePuzzles_ManagePuzzleTab = () => {
    const {t} = useTranslation();
    const [puzzle, setPuzzle] = useState<Puzzle>();
    const [isFound, setFound] = useState<boolean>();

    const resetResults = () => {
        setFound(undefined);
        setPuzzle(undefined);
    }


    const updateResults = (puzzle: Puzzle | undefined, found: boolean) => {
        setPuzzle(puzzle);
        setFound(found);
    }

    return (
        <Box padding={'15px'}>
            <ManagePuzzleTab_SearchPuzzleForm setPuzzle={updateResults}/>

            {puzzle && isFound == true ? <ManagePuzzleTab_Found puzzle={puzzle} resetResult={resetResults}/> : null}

            {!puzzle && isFound == false ? <ManagePuzzleTab_NotFound/> : null}
        </Box>
    );
}