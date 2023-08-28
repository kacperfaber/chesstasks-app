import {Slider} from "@mui/material";
import {useState} from "react";

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
    value: RankingRange;
}

export const RankingSlider = ({holder}: RankingSliderAttrs) => {
    const [val, setVal] = useState<number[]>(holder.getRawValue());

    const change = (event: Event, value: number | number[], activeThumb: number) => {
        if (typeof value == "number") return;
        holder.setValue(value);
        setVal(value);
    }

    return (
        <>
            <Slider min={300} max={4000} marks step={20} value={val} onChange={change}/>
        </>
    )
}