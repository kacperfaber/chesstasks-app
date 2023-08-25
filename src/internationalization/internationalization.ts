import i18n from "i18next";
import pl from "./language.pl.json";
import {initReactI18next} from "react-i18next";

export class Internationalization {
    public static setup() {
        i18n
            .use(initReactI18next)
            .init({
                lng: 'pl',
                resources: {
                    pl: {
                        translation: pl
                    }
                }
            })
    }
}