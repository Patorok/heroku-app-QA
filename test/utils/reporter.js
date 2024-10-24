import AllureReporter from "@wdio/allure-reporter"
import file from "./herokuFile";

export default new class Reporter {
    
    async addLog(strMsg) {
        await file.appendTextFile(global.strPath, strMsg);
        await AllureReporter.addStep(strMsg);
    }

}