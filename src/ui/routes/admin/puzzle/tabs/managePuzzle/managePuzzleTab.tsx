import {useTranslation} from "react-i18next";
import {useState} from "react";
import {Box, TextField, Typography} from "@mui/material";
import {ManagePuzzleTab_SearchPuzzleForm} from "./searchPuzzleForm";
import {Puzzle} from "../../../../../../api/puzzles/puzzle";

export const AdminManagePuzzles_ManagePuzzleTab = () => {
    const {t} = useTranslation();
    const [puzzle, setPuzzle] = useState<Puzzle>();
    const [isFound, setFound] = useState<boolean>();

    const updateResults = (puzzle: Puzzle | undefined, found: boolean) => {
        setPuzzle(puzzle);
        setFound(found);
    }

    return (
        <Box>
            <ManagePuzzleTab_SearchPuzzleForm setPuzzle={updateResults}/>

            <Typography variant={'h5'}>
                {puzzle?.fen}
            </Typography>
        </Box>
    );
}