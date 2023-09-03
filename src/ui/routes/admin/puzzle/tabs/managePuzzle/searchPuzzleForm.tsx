import {Puzzle} from "../../../../../../api/puzzles/puzzle";
import {useState} from "react";
import {Box, Button, TextField, Typography} from "@mui/material";
import {useTranslation} from "react-i18next";
import {PuzzleService} from "../../../../../../services/puzzle/puzzleService";

export interface ManagePuzzleTab_SearchPuzzleFormAttrs {
    setPuzzle: (puzzle: Puzzle | undefined, found: boolean) => void;
}

export const ManagePuzzleTab_SearchPuzzleForm = ({setPuzzle}: ManagePuzzleTab_SearchPuzzleFormAttrs) => {
    const {t} = useTranslation();
    const [id, setId] = useState<number>();

    const tryParseInt: (i: string) => number | undefined = (i: string) => {
        try {
            return parseInt(i);
        }

        catch(e: any) {
            return undefined;
        }
    }

    const submit = () => {
        if (id == undefined) {
            setPuzzle(undefined, false);
            return;
        }

        PuzzleService.getPuzzle(id!!)
            .then((puzzle) => setPuzzle(puzzle, true))
            .catch(() => setPuzzle(undefined, false));
    }

    return (
        <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', marginTop: '10px', flexDirection: 'column'}}>
            <Typography variant={'h5'}>
                {t("_admin.manage-puzzles.manage-puzzle._comps.search-puzzle-form.title")}
            </Typography>

            <Typography variant={'body2'} color={'text.secondary'}>
                {t("_admin.manage-puzzles.manage-puzzle._comps.search-puzzle-form.body")}
            </Typography>

            <Box marginTop={'15px'}>
                <TextField value={id == undefined || isNaN(id) ? "" : id}
                           type={'number'}
                           label={t("_admin.manage-puzzles.manage-puzzle._comps.search-puzzle-form.id-label")}
                           required={true}
                           onChange={(ev) => setId(tryParseInt(ev.currentTarget.value))}/>

                <Button onClick={submit} variant={'contained'}>
                    {t("_admin.manage-puzzles.manage-puzzle._comps.search-puzzle-form.submit")}
                </Button>
            </Box>
        </Box>
    )
}