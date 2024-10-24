import fs from 'fs'
import moment from 'moment';

const strDateTime = moment(new Date()).format('YYYY-MM-DD HH:mm:ss')
export default new class File{
    async createTextFile(strPath,strText){
        await fs.writeFile(`${strPath}.txt`, `[${strDateTime}] - ${strText}\n`, async (error) => {
            if (error) throw error;
        })
    }

    async appendTextFile(strPath, strText){
        await fs.appendFile(`${strPath}.txt`, `[${strDateTime}] - ${strText}\n`, { flag:'a+' }, async (error) => {
            if (error) throw error;
        })
    }

    async deleteFolderContents(strFolder){
        const arrDir = await fs.readdirSync(strFolder);
        await console.log(arrDir)
        for (const strFile of arrDir) {
            await fs.unlinkSync(`${strFolder}/${strFile}`);
        }
    }
}