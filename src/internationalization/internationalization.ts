import i18next from "i18next";
import pl from "./language.pl.json";

export class Internationalization {
    public static setup() {
        return i18next.init({
            lng: 'pl',
            resources: {
                pl: {
                    translation: pl
                }
            }
        })
    }
}