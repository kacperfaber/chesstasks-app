import {Step, StepLabel, Stepper} from "@mui/material";
import {useTranslation} from "react-i18next";
import React, {useState} from "react";
import {ResponsiveLogin_InputBasicData} from "./inputBasicData";
import {ResponsiveLogin_ConfirmEmail} from "./confirmEmail";
import {ResponsiveLogin_Success} from "./loginSuccess";

export const ResponsiveLogin_RegisterTab = ({goToLogin}: { goToLogin: () => void }) => {
    const {t} = useTranslation();

    const [step, setStep] = useState(0);

    return (
        <>
        {step == 0 ? <ResponsiveLogin_InputBasicData nextStep={() => setStep(1)}/> : null}

        {step == 1 ? <ResponsiveLogin_ConfirmEmail nextStep={() => setStep(2)}/> : null}

        {step == 2 ? <ResponsiveLogin_Success goLogin={goToLogin}/> : null}

        <Stepper activeStep={step}>
            <Step>
                <StepLabel>{t("login._responsive.register-tab._comps.steps.register")}</StepLabel>
            </Step>

            <Step>
                <StepLabel>{t("login._responsive.register-tab._comps.steps.confirm-email")}</StepLabel>
            </Step>

            <Step>
                <StepLabel>{t("login._responsive.register-tab._comps.steps.success")}</StepLabel>
            </Step>
        </Stepper>
    </>)
}