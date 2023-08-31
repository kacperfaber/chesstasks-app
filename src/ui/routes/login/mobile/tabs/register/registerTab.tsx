import {MobileLogin_FormWrapper} from "../formWrapper";
import {Avatar, Step, StepLabel, Stepper, Typography} from "@mui/material";
import {AccountCircle} from "@mui/icons-material";
import {useTranslation} from "react-i18next";
import React, {useState} from "react";
import {
    Register_InputBasicData,
    Register_InputVerificationCode,
    Register_Success
} from "../../../register/registerForms";
import {MobileLogin_InputBasicData} from "./inputBasicData";
import {MobileLogin_ConfirmEmail} from "./confirmEmail";

export const MobileLogin_RegisterTab = () => {
    const {t} = useTranslation();

    const [step, setStep] = useState(0);

    return (
        <>
            { step == 0 ? <MobileLogin_InputBasicData nextStep={() => setStep(1)}/> : null }

            { step == 1 ? <MobileLogin_ConfirmEmail nextStep={() => setStep(2)}/> : null}

            { step == 2 ? <Typography variant={'h5'}>Success</Typography> : null}

            <Stepper activeStep={step}>
                <Step>
                    <StepLabel>{t("register.steps.register")}</StepLabel>
                </Step>

                <Step>
                    <StepLabel>{t("register.steps.confirm-email")}</StepLabel>
                </Step>

                <Step>
                    <StepLabel>{t("register.steps.success")}</StepLabel>
                </Step>
            </Stepper>
        </>
    )
}