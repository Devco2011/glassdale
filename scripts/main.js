console.log("Good morning, Main.js")

import { OfficerList } from './officers/OfficerList.js';
import { CriminalList } from './criminals/CriminalList.js';
import { ConvictionSelect } from './convictions/ConvictionSelect.js';
import { getConvictions } from './convictions/ConvictionProvider.js';
import { OfficersSelect } from './officers/OfficerSelect.js';
import { getOfficers } from './officers/OfficerProvider.js'
import { NoteForm } from './notes/NoteForm.js';
OfficerList();
CriminalList();
getConvictions().then(() => { ConvictionSelect() });
getOfficers().then(() => { OfficersSelect() });
NoteForm();