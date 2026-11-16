/**
 * AbujaConnect 2.0 FCT master seed.
 * IMPORTANT: the ward names and facility examples below were supplied in a project brief.
 * They are not an independently verified authoritative 62-ward register. Every seed
 * record defaults to verificationStatus="pending". IoT values are DEMO ONLY.
 */
export type AreaCouncil = 'AMAC' | 'Bwari' | 'Gwagwalada' | 'Kuje' | 'Kwali' | 'Abaji';
export type CivicCategory = 'Primary Schools'|'Junior Secondary Schools'|'Markets'|'Bus stops & terminals'|'Communities & wards'|'Police Stations & Posts'|'Primary Health Centres (PHCs)'|'Government Hospitals';
export interface IoTNodeTelemetry { node_id:string; online:boolean; signal_dbm:number|null; solar_battery_pct:number|null; sensor_metric:string; last_ping:string; mode:'SIMULATED'|'LIVE'; }
export interface FctCivicRecord { id:string; name:string; category:CivicCategory; area_council:AreaCouncil; ward:string; address:string; source_authority:string; phone?:string; latitude?:number; longitude?:number; verificationStatus:'pending'|'verified'|'rejected'; notes:string; iot?:IoTNodeTelemetry; }
export const FCT_62_WARDS: Record<AreaCouncil,string[]> = {
  "AMAC": [
    "City Centre",
    "Garki",
    "Kabusa",
    "Wuse",
    "Gwarinpa",
    "Jiwa",
    "Gui",
    "Karshi",
    "Orozo",
    "Karimo",
    "Nyanya",
    "Gwagwa"
  ],
  "Bwari": [
    "Bwari Central",
    "Kuduru",
    "Igu",
    "Shere",
    "Kawu",
    "Ushafa",
    "Dutse",
    "Byazhin",
    "Kubwa",
    "Usuma"
  ],
  "Gwagwalada": [
    "Gwagwalada Central",
    "Kutunku",
    "Staff Quarters",
    "Ibwa",
    "Dobi",
    "Paiko",
    "Tungan Maje",
    "Zuba",
    "Ikwa",
    "Gwako"
  ],
  "Kuje": [
    "Kuje Central",
    "Chibiri",
    "Gaube",
    "Kwaku",
    "Kabi",
    "Rubochi",
    "Gwargwada",
    "Gudunkarya",
    "Yenche",
    "Kujekwa"
  ],
  "Kwali": [
    "Kwali Central",
    "Yebu",
    "Pai",
    "Ashara",
    "Dafa",
    "Kilankwa",
    "Gumbo",
    "Wako",
    "Yangoji",
    "Kundu"
  ],
  "Abaji": [
    "Abaji Central",
    "Abaji North East",
    "Abaji South East",
    "Agyana/Pandagi",
    "Rimba/Ebagi",
    "Nuku",
    "Alu Mamagi",
    "Yaba",
    "Gawu",
    "Gurdi"
  ]
};
export const FCT_MASTER_RECORDS: FctCivicRecord[] = [
  {"id": "pry-bwari-gidan-bijimi", "name": "LEA Primary School, Gidan-Bijimi", "category": "Primary Schools", "area_council": "Bwari", "ward": "Kawu", "address": "Gidan-Bijimi Village, Kawu Ward, Bwari", "source_authority": "User-supplied seed; confirm with relevant FCT authority", "latitude": 9.3412, "longitude": 7.4589, "verificationStatus": "pending", "notes": "User-supplied record; not independently verified"},
  {"id": "pry-bwari-ushafa", "name": "LEA Primary School, Ushafa", "category": "Primary Schools", "area_council": "Bwari", "ward": "Ushafa", "address": "Ushafa Town Road, near Ushafa Pottery Centre, Bwari", "source_authority": "User-supplied seed; confirm with relevant FCT authority", "latitude": 9.2158, "longitude": 7.4032, "verificationStatus": "pending", "notes": "User-supplied record; not independently verified"},
  {"id": "pry-bwari-central", "name": "Science Primary School, Bwari", "category": "Primary Schools", "area_council": "Bwari", "ward": "Bwari Central", "address": "Along Bwari Town Main Road, Bwari", "source_authority": "User-supplied seed; confirm with relevant FCT authority", "latitude": 9.2848, "longitude": 7.3821, "verificationStatus": "pending", "notes": "User-supplied record; not independently verified"},
  {"id": "pry-bwari-kogo", "name": "LEA Primary School, Kogo", "category": "Primary Schools", "area_council": "Bwari", "ward": "Bwari Central", "address": "Kogo I Community, Bwari Area Council", "source_authority": "User-supplied seed; confirm with relevant FCT authority", "latitude": 9.2624, "longitude": 7.3752, "verificationStatus": "pending", "notes": "User-supplied record; not independently verified"},
  {"id": "pry-kuje-godozhi", "name": "LEA Primary School, Godozhi", "category": "Primary Schools", "area_council": "Kuje", "ward": "Kuje Central", "address": "Godozhi Community, Kuje Area Council", "source_authority": "User-supplied seed; confirm with relevant FCT authority", "latitude": 8.8642, "longitude": 7.2115, "verificationStatus": "pending", "notes": "User-supplied record; not independently verified"},
  {"id": "pry-gwagwalada-ibwa", "name": "LEA Primary School, Ibwa", "category": "Primary Schools", "area_council": "Gwagwalada", "ward": "Ibwa", "address": "Ibwa I & II Community Corridor, Gwagwalada", "source_authority": "User-supplied seed; confirm with relevant FCT authority", "latitude": 8.9812, "longitude": 7.0418, "verificationStatus": "pending", "notes": "User-supplied record; not independently verified"},
  {"id": "pry-amac-garki", "name": "LEA Primary School, Area 10 Garki", "category": "Primary Schools", "area_council": "AMAC", "ward": "Garki", "address": "Festival Road, Area 10, Garki, Abuja", "source_authority": "User-supplied seed; confirm with relevant FCT authority", "latitude": 9.0354, "longitude": 7.4882, "verificationStatus": "pending", "notes": "User-supplied record; not independently verified"},
  {"id": "pry-kwali-central", "name": "Pilot Science Primary School, Kwali", "category": "Primary Schools", "area_council": "Kwali", "ward": "Kwali Central", "address": "Abuja–Lokoja Expressway, Kwali Town", "source_authority": "User-supplied seed; confirm with relevant FCT authority", "latitude": 8.8841, "longitude": 7.0185, "verificationStatus": "pending", "notes": "User-supplied record; not independently verified"},
  {"id": "pry-abaji-central", "name": "Science Primary School, Abaji", "category": "Primary Schools", "area_council": "Abaji", "ward": "Abaji Central", "address": "Lokoja–Abuja Highway, Abaji Town", "source_authority": "User-supplied seed; confirm with relevant FCT authority", "latitude": 8.4758, "longitude": 6.9451, "verificationStatus": "pending", "notes": "User-supplied record; not independently verified"},
  {"id": "jss-bwari-central", "name": "Junior Secondary School Bwari Central", "category": "Junior Secondary Schools", "area_council": "Bwari", "ward": "Bwari Central", "address": "Behind Bwari Area Council Secretariat, Bwari Town", "source_authority": "User-supplied seed; confirm with relevant FCT authority", "latitude": 9.2819, "longitude": 7.3845, "verificationStatus": "pending", "notes": "User-supplied record; not independently verified"},
  {"id": "jss-bwari-ushafa", "name": "Junior Secondary School Ushafa", "category": "Junior Secondary Schools", "area_council": "Bwari", "ward": "Ushafa", "address": "Ushafa Community, Bwari Area Council", "source_authority": "User-supplied seed; confirm with relevant FCT authority", "latitude": 9.2179, "longitude": 7.4041, "verificationStatus": "pending", "notes": "User-supplied record; not independently verified"},
  {"id": "jss-bwari-dutse", "name": "Junior Secondary School Dutse Alhaji", "category": "Junior Secondary Schools", "area_council": "Bwari", "ward": "Dutse", "address": "Dutse Alhaji, off Kubwa Expressway", "source_authority": "User-supplied seed; confirm with relevant FCT authority", "latitude": 9.1411, "longitude": 7.3705, "verificationStatus": "pending", "notes": "User-supplied record; not independently verified"},
  {"id": "jss-bwari-kubwa", "name": "Junior Secondary School Phase 4 Kubwa", "category": "Junior Secondary Schools", "area_council": "Bwari", "ward": "Kubwa", "address": "Phase 4, Kubwa, Bwari Area Council", "source_authority": "User-supplied seed; confirm with relevant FCT authority", "latitude": 9.1512, "longitude": 7.3289, "verificationStatus": "pending", "notes": "User-supplied record; not independently verified"},
  {"id": "jss-gwagwalada-central", "name": "Junior Secondary School Hajj Camp Gwagwalada", "category": "Junior Secondary Schools", "area_council": "Gwagwalada", "ward": "Gwagwalada Central", "address": "Hajj Camp Area, Gwagwalada", "source_authority": "User-supplied seed; confirm with relevant FCT authority", "latitude": 8.9451, "longitude": 7.0812, "verificationStatus": "pending", "notes": "User-supplied record; not independently verified"},
  {"id": "jss-kuje-central", "name": "Junior Secondary School Kuje", "category": "Junior Secondary Schools", "area_council": "Kuje", "ward": "Kuje Central", "address": "Secretariat Road, Kuje", "source_authority": "User-supplied seed; confirm with relevant FCT authority", "latitude": 8.8812, "longitude": 7.2291, "verificationStatus": "pending", "notes": "User-supplied record; not independently verified"},
  {"id": "jss-amac-jabi", "name": "Junior Secondary School Jabi", "category": "Junior Secondary Schools", "area_council": "AMAC", "ward": "Gwarinpa", "address": "Jabi District, AMAC, Abuja", "source_authority": "User-supplied seed; confirm with relevant FCT authority", "latitude": 9.0645, "longitude": 7.4241, "verificationStatus": "pending", "notes": "User-supplied record; not independently verified"},
  {"id": "jss-kwali-central", "name": "Junior Secondary School Kwali", "category": "Junior Secondary Schools", "area_council": "Kwali", "ward": "Kwali Central", "address": "Kwali Town, Kwali Area Council", "source_authority": "User-supplied seed; confirm with relevant FCT authority", "latitude": 8.8825, "longitude": 7.0158, "verificationStatus": "pending", "notes": "User-supplied record; not independently verified"},
  {"id": "jss-abaji-central", "name": "Junior Secondary School Abaji", "category": "Junior Secondary Schools", "area_council": "Abaji", "ward": "Abaji Central", "address": "Abaji Town, Abaji Area Council", "source_authority": "User-supplied seed; confirm with relevant FCT authority", "latitude": 8.4739, "longitude": 6.9462, "verificationStatus": "pending", "notes": "User-supplied record; not independently verified"},
  {"id": "mkt-bwari-town", "name": "Bwari Central Market", "category": "Markets", "area_council": "Bwari", "ward": "Bwari Central", "address": "Market Road, Bwari Town", "source_authority": "User-supplied seed; confirm with relevant FCT authority", "latitude": 9.2821, "longitude": 7.3818, "verificationStatus": "pending", "notes": "User-supplied record; not independently verified"},
  {"id": "mkt-bwari-ushafa", "name": "Ushafa Community Market", "category": "Markets", "area_council": "Bwari", "ward": "Ushafa", "address": "Ushafa Junction, Bwari–Jigo Road", "source_authority": "User-supplied seed; confirm with relevant FCT authority", "latitude": 9.2141, "longitude": 7.4019, "verificationStatus": "pending", "notes": "User-supplied record; not independently verified"},
  {"id": "mkt-bwari-dutse", "name": "Dutse Alhaji Market", "category": "Markets", "area_council": "Bwari", "ward": "Dutse", "address": "Market Road, Dutse Alhaji, Bwari Area Council", "source_authority": "User-supplied seed; confirm with relevant FCT authority", "latitude": 9.1389, "longitude": 7.3721, "verificationStatus": "pending", "notes": "User-supplied record; not independently verified"},
  {"id": "mkt-amac-wuse", "name": "Wuse Market", "category": "Markets", "area_council": "AMAC", "ward": "Wuse", "address": "Sani Abacha Way, Wuse Zone 5, Abuja", "source_authority": "User-supplied seed; confirm with relevant FCT authority", "latitude": 9.0667, "longitude": 7.4667, "verificationStatus": "pending", "notes": "User-supplied record; not independently verified"},
  {"id": "mkt-gwagwalada-main", "name": "Gwagwalada Main Market", "category": "Markets", "area_council": "Gwagwalada", "ward": "Gwagwalada Central", "address": "Market Road, Gwagwalada", "source_authority": "User-supplied seed; confirm with relevant FCT authority", "latitude": 8.9408, "longitude": 7.0852, "verificationStatus": "pending", "notes": "User-supplied record; not independently verified"},
  {"id": "mkt-kuje-main", "name": "Kuje Main Market", "category": "Markets", "area_council": "Kuje", "ward": "Kuje Central", "address": "Market Road, Kuje Town", "source_authority": "User-supplied seed; confirm with relevant FCT authority", "latitude": 8.8782, "longitude": 7.2261, "verificationStatus": "pending", "notes": "User-supplied record; not independently verified"},
  {"id": "mkt-kwali-main", "name": "Kwali Central Market", "category": "Markets", "area_council": "Kwali", "ward": "Kwali Central", "address": "Kwali Town, along Lokoja Highway", "source_authority": "User-supplied seed; confirm with relevant FCT authority", "latitude": 8.8819, "longitude": 7.0172, "verificationStatus": "pending", "notes": "User-supplied record; not independently verified"},
  {"id": "mkt-abaji-main", "name": "Abaji Main Market", "category": "Markets", "area_council": "Abaji", "ward": "Abaji Central", "address": "Abaji Town Commercial Centre", "source_authority": "User-supplied seed; confirm with relevant FCT authority", "latitude": 8.4749, "longitude": 6.9438, "verificationStatus": "pending", "notes": "User-supplied record; not independently verified"},
  {"id": "bus-bwari-law-school", "name": "Nigerian Law School Bus Stop, Bwari", "category": "Bus stops & terminals", "area_council": "Bwari", "ward": "Bwari Central", "address": "Bwari–Kubwa Road, by Nigerian Law School Gate", "source_authority": "User-supplied seed; confirm with relevant FCT authority", "latitude": 9.2764, "longitude": 7.3792, "verificationStatus": "pending", "notes": "User-supplied record; not independently verified"},
  {"id": "bus-bwari-dutse-signboard", "name": "Dutse Police Signboard / Shafa Bus Stop", "category": "Bus stops & terminals", "area_council": "Bwari", "ward": "Dutse", "address": "Dutse–Bwari Road", "source_authority": "User-supplied seed; confirm with relevant FCT authority", "latitude": 9.1462, "longitude": 7.3748, "verificationStatus": "pending", "notes": "User-supplied record; not independently verified"},
  {"id": "bus-bwari-ushafa-junction", "name": "Ushafa Junction Transit Stop", "category": "Bus stops & terminals", "area_council": "Bwari", "ward": "Ushafa", "address": "Bwari–Dutse Road, Ushafa Junction", "source_authority": "User-supplied seed; confirm with relevant FCT authority", "latitude": 9.2145, "longitude": 7.4021, "verificationStatus": "pending", "notes": "User-supplied record; not independently verified"},
  {"id": "bus-amac-jabi-park", "name": "Jabi Central Motor Park & Terminal", "category": "Bus stops & terminals", "area_council": "AMAC", "ward": "Gwarinpa", "address": "Obafemi Awolowo Way, Jabi, Abuja", "source_authority": "User-supplied seed; confirm with relevant FCT authority", "latitude": 9.0672, "longitude": 7.4215, "verificationStatus": "pending", "notes": "User-supplied record; not independently verified"},
  {"id": "bus-amac-nyanya", "name": "Nyanya Under-Bridge Bus Terminal", "category": "Bus stops & terminals", "area_council": "AMAC", "ward": "Nyanya", "address": "Abuja–Keffi Expressway, Nyanya", "source_authority": "User-supplied seed; confirm with relevant FCT authority", "latitude": 9.0185, "longitude": 7.5712, "verificationStatus": "pending", "notes": "User-supplied record; not independently verified"},
  {"id": "bus-gwagwalada-zuba", "name": "Zuba Motor Park & Interchange Terminal", "category": "Bus stops & terminals", "area_council": "Gwagwalada", "ward": "Zuba", "address": "Abuja–Kaduna / Lokoja Highway Interchange, Zuba", "source_authority": "User-supplied seed; confirm with relevant FCT authority", "latitude": 9.0954, "longitude": 7.1942, "verificationStatus": "pending", "notes": "User-supplied record; not independently verified"},
  {"id": "bus-kuje-junction", "name": "Kuje Tipper Garage / Forest Bus Stop", "category": "Bus stops & terminals", "area_council": "Kuje", "ward": "Kuje Central", "address": "Kuje–Airport Road Corridor, Kuje", "source_authority": "User-supplied seed; confirm with relevant FCT authority", "latitude": 8.8834, "longitude": 7.2312, "verificationStatus": "pending", "notes": "User-supplied record; not independently verified"},
  {"id": "bus-kwali-sheda", "name": "Kwali Central / Sheda Transit Stop", "category": "Bus stops & terminals", "area_council": "Kwali", "ward": "Kwali Central", "address": "Abuja–Lokoja Expressway, Kwali", "source_authority": "User-supplied seed; confirm with relevant FCT authority", "latitude": 8.8830, "longitude": 7.0165, "verificationStatus": "pending", "notes": "User-supplied record; not independently verified"},
  {"id": "bus-abaji-lokoja-park", "name": "Abaji Central Motor Park", "category": "Bus stops & terminals", "area_council": "Abaji", "ward": "Abaji Central", "address": "Abuja–Lokoja Highway, Abaji Town", "source_authority": "User-supplied seed; confirm with relevant FCT authority", "latitude": 8.4750, "longitude": 6.9445, "verificationStatus": "pending", "notes": "User-supplied record; not independently verified"},
  {"id": "com-bwari-kogo-1-2", "name": "Kogo I & Kogo II Communities", "category": "Communities & wards", "area_council": "Bwari", "ward": "Bwari Central", "address": "Kogo I & II Layout, Bwari Area Council", "source_authority": "User-supplied seed; confirm with relevant FCT authority", "latitude": 9.2618, "longitude": 7.3755, "verificationStatus": "pending", "notes": "Observational usability testing community; user-supplied seed"},
  {"id": "com-bwari-sabon-gari", "name": "Sabon-Gari Community", "category": "Communities & wards", "area_council": "Bwari", "ward": "Bwari Central", "address": "Sabon-Gari, Bwari Town", "source_authority": "User-supplied seed; confirm with relevant FCT authority", "latitude": 9.2812, "longitude": 7.3868, "verificationStatus": "pending", "notes": "Observational usability testing community; user-supplied seed"},
  {"id": "com-bwari-jigo", "name": "Jigo Community", "category": "Communities & wards", "area_council": "Bwari", "ward": "Shere", "address": "Jigo Settlement, Bwari Area Council", "source_authority": "User-supplied seed; confirm with relevant FCT authority", "latitude": 9.2391, "longitude": 7.4192, "verificationStatus": "pending", "notes": "Observational usability testing community; user-supplied seed"},
  {"id": "com-bwari-ushafa", "name": "Ushafa Community", "category": "Communities & wards", "area_council": "Bwari", "ward": "Ushafa", "address": "Ushafa Ward, Bwari Area Council", "source_authority": "User-supplied seed; confirm with relevant FCT authority", "latitude": 9.2145, "longitude": 7.4021, "verificationStatus": "pending", "notes": "Observational usability testing community; user-supplied seed"},
  {"id": "com-bwari-gidan-bijimi", "name": "Gidan-Bijimi Village (Kawu Ward)", "category": "Communities & wards", "area_council": "Bwari", "ward": "Kawu", "address": "Kawu Ward, Bwari Area Council", "source_authority": "User-supplied seed; confirm with relevant FCT authority", "latitude": 9.3412, "longitude": 7.4589, "verificationStatus": "pending", "notes": "Rural Gbagyi & Fulani community; user-supplied seed"},
  {"id": "com-kuje-godozhi", "name": "Godozhi Controlled Community", "category": "Communities & wards", "area_council": "Kuje", "ward": "Kuje Central", "address": "Godozhi Village, Kuje Area Council", "source_authority": "User-supplied seed; confirm with relevant FCT authority", "latitude": 8.8639, "longitude": 7.2108, "verificationStatus": "pending", "notes": "Baseline and midline community assessment site; user-supplied seed"},
  {"id": "com-gwagwalada-ibwa", "name": "Ibwa I & Ibwa II Communities", "category": "Communities & wards", "area_council": "Gwagwalada", "ward": "Ibwa", "address": "Ibwa Ward, Gwagwalada Area Council", "source_authority": "User-supplied seed; confirm with relevant FCT authority", "latitude": 8.9805, "longitude": 7.0412, "verificationStatus": "pending", "notes": "Baseline, midline & usability testing communities; user-supplied seed"},
  {"id": "com-amac-kabusa", "name": "Kabusa Community (Kabusa Ward)", "category": "Communities & wards", "area_council": "AMAC", "ward": "Kabusa", "address": "Kabusa Ward, Abuja Municipal Area Council", "source_authority": "User-supplied seed; confirm with relevant FCT authority", "latitude": 8.9731, "longitude": 7.4590, "verificationStatus": "pending", "notes": "AMAC community reference; user-supplied seed"},
  {"id": "com-kwali-pai", "name": "Pai Community (Pai Ward)", "category": "Communities & wards", "area_council": "Kwali", "ward": "Pai", "address": "Pai Ward, Kwali Area Council", "source_authority": "User-supplied seed; confirm with relevant FCT authority", "latitude": 8.9320, "longitude": 7.1120, "verificationStatus": "pending", "notes": "Kwali community reference; user-supplied seed"},
  {"id": "com-abaji-yaba", "name": "Yaba Community (Yaba Ward)", "category": "Communities & wards", "area_council": "Abaji", "ward": "Yaba", "address": "Yaba Ward, Abaji Area Council", "source_authority": "User-supplied seed; confirm with relevant FCT authority", "latitude": 8.6250, "longitude": 6.9820, "verificationStatus": "pending", "notes": "Abaji community reference; user-supplied seed"},
  {"id": "phc-jigo", "name": "Jigo PHC", "category": "Primary Health Centres (PHCs)", "area_council": "Bwari", "ward": "Shere", "address": "Jigo community, Bwari", "source_authority": "Prior Bwari prototype; confirm with FCT PHCB", "verificationStatus": "pending", "notes": "Service scope and hours require field confirmation."},
  {"id": "phc-sabon-gari", "name": "Sabon Gari PHC", "category": "Primary Health Centres (PHCs)", "area_council": "Bwari", "ward": "Bwari Central", "address": "Sabon-Gari area, Bwari", "source_authority": "Prior Bwari prototype; confirm with FCT PHCB", "verificationStatus": "pending", "notes": "Service scope and hours require field confirmation."},
  {"id": "phc-dutse-alhaji", "name": "Dutse Alhaji PHC", "category": "Primary Health Centres (PHCs)", "area_council": "Bwari", "ward": "Dutse", "address": "Near Dutse market road, Dutse Alhaji", "source_authority": "Prior Bwari prototype; confirm with FCT PHCB", "verificationStatus": "pending", "notes": "Service scope and hours require field confirmation."},
  {id:'gov-national-hospital',name:'National Hospital Abuja',category:'Government Hospitals',area_council:'AMAC',ward:'Central Business District',address:'Plot 132, Central Business District, Abuja',source_authority:'Official hospital website (reconfirm before production)',phone:'08097520012',verificationStatus:'pending',notes:'Existing app starter listing; live capacity is not known.'},
  {id:'gov-uath',name:'University of Abuja Teaching Hospital',category:'Government Hospitals',area_council:'Gwagwalada',ward:'Gwagwalada',address:'Gwagwalada, FCT',source_authority:'Official hospital website (reconfirm before production)',phone:'+2347040045614',verificationStatus:'pending',notes:'Existing app starter listing; live capacity is not known.'},
  {id:'phc-ushafa',name:'Ushafa PHC',category:'Primary Health Centres (PHCs)',area_council:'Bwari',ward:'Ushafa',address:'Ushafa community, Bwari',source_authority:'Prior Bwari prototype; confirm with FCT PHCB',verificationStatus:'pending',notes:'Service scope and hours require field confirmation.'},
  {id:'phc-kogo',name:'Kogo PHC',category:'Primary Health Centres (PHCs)',area_council:'Bwari',ward:'Kogo',address:'Kogo community, Bwari',source_authority:'Prior Bwari prototype; confirm with FCT PHCB',verificationStatus:'pending',notes:'Service scope and hours require field confirmation.'},
  {id:'phc-kuduru',name:'Kuduru PHC',category:'Primary Health Centres (PHCs)',area_council:'Bwari',ward:'Kuduru',address:'Kuduru community, Bwari',source_authority:'Prior Bwari prototype; confirm with FCT PHCB',verificationStatus:'pending',notes:'Service scope and hours require field confirmation.'}
  ,{id:'pol-fct-control',name:'FCT Police Control Room',category:'Police Stations & Posts',area_council:'AMAC',ward:'FCT-wide control',address:'FCT-wide contact; station location to be confirmed',source_authority:'FCTA public contact listing; reconfirm with NPF/FCTA',phone:'08061581938',verificationStatus:'pending',notes:'Published contact; current operational status and nearest station referral must be confirmed.'}
  ,{id:'gov-bwari-general',name:'Bwari General Hospital',category:'Government Hospitals',area_council:'Bwari',ward:'Bwari Central',address:'Bwari town; confirm exact entrance',source_authority:'FCTA FAQ reference; confirm with FCT Health Secretariat',verificationStatus:'pending',notes:'Facility listing only; current departments, hours, emergency capacity and phone not confirmed.'}

];
export const DEMO_IOT_TELEMETRY: IoTNodeTelemetry[] = [
  {node_id:'IOT-UBEB-BW01',online:true,signal_dbm:-92,solar_battery_pct:88,sensor_metric:'Offline Pi Tutor Active (illustrative)',last_ping:'2 mins ago',mode:'SIMULATED'},
  {node_id:'IOT-UBEB-BW02',online:true,signal_dbm:-74,solar_battery_pct:94,sensor_metric:'Solar Wi-Fi cache synced (illustrative)',last_ping:'1 min ago',mode:'SIMULATED'},
  {node_id:'IOT-UBEB-BW03',online:true,signal_dbm:-68,solar_battery_pct:97,sensor_metric:'Classroom smart hub online (illustrative)',last_ping:'Just now',mode:'SIMULATED'},
  {node_id:'IOT-JSS-BW01',online:true,signal_dbm:-70,solar_battery_pct:95,sensor_metric:'Edge quiz server synced (illustrative)',last_ping:'1 min ago',mode:'SIMULATED'},
  {node_id:'IOT-UBEB-KJ01',online:true,signal_dbm:-89,solar_battery_pct:81,sensor_metric:'Offline content server active; 12.8V demo value',last_ping:'4 mins ago',mode:'SIMULATED'},
  {node_id:'IOT-MKT-BW01',online:true,signal_dbm:-71,solar_battery_pct:91,sensor_metric:'Public solar kiosk active (illustrative)',last_ping:'3 mins ago',mode:'SIMULATED'}
];
