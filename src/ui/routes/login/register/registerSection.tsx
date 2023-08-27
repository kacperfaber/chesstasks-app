import {Paper, Typography} from "@mui/material";
import React, {ReactNode, useState} from "react";
import {useTranslation} from "react-i18next";
import {Register_InputBasicData, Register_InputVerificationCode, Register_Success} from "./registerForms";

type RegisterStepDef = {
    i: number;
    el: ReactNode;
}

export const RegisterSection = () => {
    const {t} = useTranslation();
    const [step, setStep] = useState(0);

    const [rememberedEmail, rememberEmail] = useState("");

    const incStep = () => setStep(x => x + 1);

    const [stepDefs] = useState<RegisterStepDef[]>([
        {
            i: 0,
            el: <Register_InputBasicData increaseStep={incStep}/>
        },
        {
            i: 1,
            el: <Register_InputVerificationCode nextStep={incStep}/>
        },
        {
            i: 2, el: <Register_Success/>
        }
    ]);

    return (
        <>
            <Typography variant={'h6'}>{t("login.register-section.title")}</Typography>
            <Typography variant={'body2'}>{t("login.register-section.body")}</Typography>

            <br></br>

            <Paper elevation={1} style={{padding: '10px', marginTop: '10px'}}>


                {
                    stepDefs[step].el
                }
            </Paper>
        </>
    );
}