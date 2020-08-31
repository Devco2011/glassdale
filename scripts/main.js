console.log("Good morning, Main.js")

import { OfficerList } from './officers/OfficerList.js';
import { CriminalList } from './criminals/CriminalList.js';
import { ConvictionSelect } from './convictions/ConvictionSelect.js';
import { getConvictions } from './convictions/ConvictionProvider.js';
//OfficerList();
CriminalList();
getConvictions().then(() => { ConvictionSelect() });