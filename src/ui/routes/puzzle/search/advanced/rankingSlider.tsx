import {Box, Slider, Typography} from "@mui/material";
import {useState} from "react";
import {useTranslation} from "react-i18next";

export class RankingRangeHolder {
    value: number[];

    constructor(v: number[]) {
        this.value = v;
    }

    setValue(arr: number[]) {
        this.value = arr;
    }

    getValue(): RankingRange {
        const [from, to] = this.value;
        return {from, to};
    }

    getRawValue(): number[] {
        return this.value;
    }
}

export type RankingRange = {
    from: number;
    to: number;
}

export interface RankingSliderAttrs {
    holder: RankingRangeHolder;
}

export const RankingSlider = ({holder}: RankingSliderAttrs) => {
    const {t} = useTranslation();
    const [val, setVal] = useState<number[]>([1500, 2500]);

    const change = (event: Event, value: number | number[], activeThumb: number) => {
        if (typeof value == "number") return;
        holder.setValue(value);
        setVal(value);
    }

    return (
        <>
            <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'} width={'100%'}>
                <Typography variant={'h5'}>{t("search-advanced.ranking-range")}</Typography>
                <Typography variant={'body2'} color={'text.secondary'}>{val[0]} - {val[1]}</Typography>
            </Box>
            <Slider min={300} max={4500} defaultValue={[1500, 2500]} marks step={20} onChange={change}/>
        </>
    )
}