import reporter from "./reporter";

class objUtil{
    /**
     * @function clickObject | @author pjacinto_20241023
     * @description Click object
     * @param {Object} objElement - Object to be clicked
     * @returns <none>
     */
    async clickObject(objElement){
        await reporter.addLog('Started Function: clickObject');
        await objElement.waitForExist();
        await objElement.click();
        const strXpath = await objElement.selector;
        await reporter.addLog(`Completed Function: clickObject - Successfully Clicked ${strXpath}`);
    }

    /**
     * @function setObjectValue | @author pjacinto_20241023
     * @description Sets a value to an object
     * @param {Object} objElement - Object to be modified
     * @param {String} strText - Value to be set
     * @returns <none>
     */
    async setObjectValue(objElement, strText){
        await reporter.addLog('Started Function: setObjectValue');
        await objElement.waitForExist();
        await objElement.setValue(strText);
        const strXpath = await objElement.selector;
        await reporter.addLog(`Completed Function: setObjectValue - Successfully Set Value ${strXpath}`);
    }

    /**
     * @function getObject | @author pjacinto_20241023
     * @description Gets the object text
     * @param {Object} objElement - Object where text will be gathered
     * @returns {string}
     */
    async getObjectText(objElement){
        await reporter.addLog('Started Function: getObjectText');
        await objElement.waitForExist();
        const strText = await objElement.getText();
        const strXpath = await objElement.selector;
        await reporter.addLog(`Started Function: getObjectText [${strXpath}] Text [${strText}]`);
        return strText
    }

    /**
     * @function getObject | @author pjacinto_20241023
     * @description Gets the object text
     * @param {Object} objElement - Object where text will be gathered
     * @returns {string}
     */
    async getObject(objElement){
        await reporter.addLog('Started Function: getObject');
        await objElement.waitForExist();
        const objValue = await objElement.getValue();
        const strXpath = await objElement.selector;
        await reporter.addLog(`Started Function: getObject [${strXpath}] Text [${objValue}]`);
        return objValue
    }
}

export default new objUtil