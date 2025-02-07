/* eslint-disable sort-keys */
/* eslint-disable no-console */

import { VikaBot } from './src/plugins/vika.js'
import configs from './config.js'

const vikaConfig = {
  spaceName: process.env['VIKA_SPACENAME'] || configs.VIKA_SPACENAME,
  token: process.env['VIKA_TOKEN'] || configs.VIKA_TOKEN,
}
const vika = new VikaBot(vikaConfig)

async function init (): Promise<void> {
  await vika.init()
}

// async function getFields (datasheetId: string): Promise<void> {
//   await vika.getSheetFields(datasheetId)
// }

// void getFields('dstKiDu2sEAXJGvsJR')

void init()
