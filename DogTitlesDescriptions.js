const titleDescriptions = [
	"AKC Prefix","AFC","Amateur Field Trial Champion",
	"AKC Prefix","AGCH","Agility Grand Champion",
	"AKC Prefix","CCH","Bench Show Champion",
	"AKC Prefix","CFC","Coonhound Field Champion",
	"AKC Prefix","CGCH","Coonhound Grand Champion",
	"AKC Prefix","CGF","Coonhound Grand Field Champion",
	"AKC Prefix","CGN","Grand Nite Champion",
	"AKC Prefix","CGW","Grand Water Race Champion",
	"AKC Prefix","CH","Champion",
	"AKC Prefix","CNC","Nite Champion",
	"AKC Prefix","CSG","Supreme Grand Champion",
	"AKC Prefix","CSGF","Supreme Grand Field Champion",
	"AKC Prefix","CSGN","Supreme Grand Nite Champion",
	"AKC Prefix","CSGW","Supreme Grand Water Race Champion",
	"AKC Prefix","CT","Champion Tracker",
	"AKC Prefix","CWC","Water Race Champion",
	"AKC Prefix","CWSG","World Show Champion",
	"AKC Prefix","DC","Dual Champion",
	"AKC Prefix","FC","Field Champion",
	"AKC Prefix","GCH","Grand Champion",
	"AKC Prefix","GCHB","Grand Champion Bronze",
	"AKC Prefix","GCHG","Grand Champion Gold",
	"AKC Prefix","GCHP","Grand Champion Platinum",
	"AKC Prefix","GCHS","Grand Champion Silver",
	"AKC Prefix","GDSC","Gun Dog Stake Champion",
	"AKC Prefix","GAFC","Grand Amateur Field Champion",
	"AKC Prefix","GFC","Grand Field Champion",
	"AKC Prefix","HC","Herding Champion",
	"AKC Prefix","MACH","Master Agility Champion",
	"AKC Prefix","NAC","National Agility Champion",
	"AKC Prefix","NAFC","National Amateur Field Champion",
	"AKC Prefix","NAGDC","National Amateur Gundog Champion",
	"AKC Prefix","NFC","National Field Champion",
	"AKC Prefix","NGDC","National Gundog Champion",
	"AKC Prefix","NOC","National Obedience Champion",
	"AKC Prefix","OTCH","Obedience Trial Champion",
	"AKC Prefix","PACH","Preferred Agility Champion",
	"AKC Prefix","PNAC","Preferred National Agility Champion",
	"AKC Prefix","POC","Preferred Obedience Champion",
	"AKC Prefix","RACH","AKC Rally® Champion",
	"AKC Prefix","RGDSC","Retrieving Gun Dog Stake Champion",
	"AKC Prefix","RNC","AKC Rally® National Champion",
	"AKC Prefix","TC","Triple Champion",
	"AKC Prefix","VCCH","Versatile Companion Champio",
	"AKC Prefix","WNC","World Nite Champion",
	"AKC Suffix","ACT1","Agility Course Test 1",
	"AKC Suffix","ACT2","Agility Course Test 2",
	"AKC Suffix","ACT1J","Agility Course Test 1 Jumpers",
	"AKC Suffix","ACT2J","Agility Course Test 2 Jumpers",
	"AKC Suffix","AJP","Excellent Agility Jumpers With Weaves “A” Preferred",
	"AKC Suffix","ATT","AKC Temperament Test",
	"AKC Suffix","AX","Agility Excellent",
	"AKC Suffix","AXJ","Excellent Agility Jumper",
	"AKC Suffix","AXP","Agility Excellent “A” Preferred",
	"AKC Suffix","BCAT","Fast CAT® BCAT",
	"AKC Suffix","BN","Beginner Novice",
	"AKC Suffix","BN-V","Virtual Beginner Novice",
	"AKC Suffix","CA","Coursing Ability",
	"AKC Suffix","CAA","Coursing Ability Advanced",
	"AKC Suffix","CAX","Coursing Ability Excellent",
	"AKC Suffix","CAX2","Coursing Ability Excellent 2",
	"AKC Suffix","CD","Companion Dog",
	"AKC Suffix","CD-V","Virtual Companion Dog",
	"AKC Suffix","CDX","Companion Dog Excellent",
	"AKC Suffix","CGC","Canine Good Citizen",
	"AKC Suffix","CGCA","AKC Community Canine",
	"AKC Suffix","CGCU","CGCU – Canine Good Citizen Urban",
	"AKC Suffix","CM","Certificate of Merit",
	"AKC Suffix","DCAT","Fast CAT® DCAT",
	"AKC Suffix","EE","Endurance Earthdog",
	"AKC Suffix","FCAT","Fast CAT® FCAT",
	"AKC Suffix","FDC","Farm Dog Certified",
	"AKC Suffix","FTC","FAST Century",
	"AKC Suffix","FTCP","FAST Century Preferred",
	"AKC Suffix","GN","Graduate Novice",
	"AKC Suffix","GO","Graduate Open",
	"AKC Suffix","HI","Herding Intermediate",
	"AKC Suffix","HIAdsc","Herding Intermediate Course A (ducks, sheep, cattle)",
	"AKC Suffix","HIBdsc","Herding Intermediate Course B (ducks, sheep, cattle)",
	"AKC Suffix","HICs","Herding Intermediate Course C (sheep)",
	"AKC Suffix","HS","Herding Started",
	"AKC Suffix","HSAdsc","Herding Started Course A (ducks, sheep, cattle)",
	"AKC Suffix","HSBdsc","Herding Started Course B (ducks, sheep, cattle)",
	"AKC Suffix","HSCs","Herding Started Course C (sheep)",
	"AKC Suffix","HT","Herding Tested",
	"AKC Suffix","HX","Herding Excellent",
	"AKC Suffix","HXAdsc","Herding Advanced Course A (ducks, sheep, cattle)",
	"AKC Suffix","HXBdsc","Herding Advanced Course B (ducks, sheep, cattle)",
	"AKC Suffix","HXCs","Herding Advanced Course C (sheep)",
	"AKC Suffix","JC","Junior Courser",
	"AKC Suffix","JE","Junior Earthdog",
	"AKC Suffix","JH","Junior Hunter",
	"AKC Suffix","JHA","Junior Hunter Advanced",
	"AKC Suffix","JHR","Junior Hunter Retriever",
	"AKC Suffix","JHU","Junior Hunter Upland",
	"AKC Suffix","LCX","Lure Courser Excellent",
	"AKC Suffix","MC","Master Courser",
	"AKC Suffix","ME","Master Earthdog",
	"AKC Suffix","MFB","Master Bronze FAST",
	"AKC Suffix","MFC","Master Century FAST",
	"AKC Suffix","MFG","Master Gold FAST",
	"AKC Suffix","MFP","Master Excellent FAST Preferred",
	"AKC Suffix","MFPB","Master Bronze FAST Preferred",
	"AKC Suffix","MFPC","Master Century FAST Preferred",
	"AKC Suffix","MFPG","Master Gold FAST Preferred",
	"AKC Suffix","MFPS","Master Silver FAST Preferred",
	"AKC Suffix","MFS","Master Silver FAST",
	"AKC Suffix","MH","Master Hunter",
	"AKC Suffix","MHA","Master Hunter Advanced",
	"AKC Suffix","MHR","Master Hunter Retriever",
	"AKC Suffix","MHU","Master Hunter Upland",
	"AKC Suffix","MJB","Master Bronze Jumpers With Weaves",
	"AKC Suffix","MJC","Master Century Jumpers With Weaves",
	"AKC Suffix","MJG","Master Gold Jumpers With Weaves",
	"AKC Suffix","MJP","Master Excellent Jumpers With Weaves Preferred",
	"AKC Suffix","MJPB","Master Bronze Jumper With Weaves Preferred",
	"AKC Suffix","MJPC","Master Century Jumper With Weaves Preferred",
	"AKC Suffix","MJPG","Master Gold Jumper With Weaves Preferred",
	"AKC Suffix","MJPS","Master Silver Jumper With Weaves Preferred",
	"AKC Suffix","MJS","Master Silver Jumpers With Weaves",
	"AKC Suffix","MNH","Master National Hunter",
	"AKC Suffix","MX","Master Agility Excellent",
	"AKC Suffix","MXB","Master Bronze Agility",
	"AKC Suffix","MXC","Master Century Agility",
	"AKC Suffix","MXF","Master Excellent FAST",
	"AKC Suffix","MXG","Master Gold Agility",
	"AKC Suffix","MXJ","Master Excellent Jumpers With Weaves",
	"AKC Suffix","MXP","Master Agility Excellent Preferred",
	"AKC Suffix","MXPB","Master Bronze Agility Preferred",
	"AKC Suffix","MXPC","Master Century Agility Preferred",
	"AKC Suffix","MXPG","Master Gold Agility Preferred",
	"AKC Suffix","MXPS","Master Silver Agility Preferred",
	"AKC Suffix","MXS","Master Silver Agility",
	"AKC Suffix","NA","Novice Agility",
	"AKC Suffix","NAJ","Novice Agility Jumper",
	"AKC Suffix","NAP","Novice Agility Preferred",
	"AKC Suffix","NF","Novice FAST",
	"AKC Suffix","NFP","Novice FAST Preferred",
	"AKC Suffix","NJP","Novice Jumpers With Weaves Preferred",
	"AKC Suffix","OA","Open Agility",
	"AKC Suffix","OAJ","Open Agility Jumper",
	"AKC Suffix","OAP","Open Agility Preferred",
	"AKC Suffix","OF","Open FAST",
	"AKC Suffix","OFP","Open FAST Preferred",
	"AKC Suffix","OGM","Obedience Grand Master",
	"AKC Suffix","OJP","Open Jumpers With Weaves Preferred",
	"AKC Suffix","OM","Obedience Master",
	"AKC Suffix","PAD","Premier Agility Dog",
	"AKC Suffix","PADP","Premier Agility Dog Preferred",
	"AKC Suffix","PAX","Preferred Agility Excellent",
	"AKC Suffix","PCD","Preferred Companion Dog",
	"AKC Suffix","PCDX","Preferred Companion Dog Excellent",
	"AKC Suffix","PDB","Premier Agility Dog Bronze",
	"AKC Suffix","PDBP","Premier Agility Dog Bronze Preferred",
	"AKC Suffix","PDC","Premier Agility Dog Century",
	"AKC Suffix","PDCP","Premier Agility Dog Century Preferred",
	"AKC Suffix","PDG","Premier Agility Dog Gold",
	"AKC Suffix","PDGP","Premier Agility Dog Gold Preferred",
	"AKC Suffix","PDS","Premier Agility Dog Silver",
	"AKC Suffix","PDSP","Premier Agility Dog Silver Preferred",
	"AKC Suffix","PJB","Premier Jumpers Dog Bronze",
	"AKC Suffix","PJBP","Premier Jumpers Dog Bronze Preferred",
	"AKC Suffix","PJC","Premier Jumpers Dog Century",
	"AKC Suffix","PJCP","Premier Jumpers Dog Century Preferred",
	"AKC Suffix","PJD","Premier Jumpers Dog",
	"AKC Suffix","PJDP","Premier Jumpers Dog Preferred",
	"AKC Suffix","PJG","Premier Jumpers Dog Gold",
	"AKC Suffix","PJGP","Premier Jumpers Dog Gold Preferred",
	"AKC Suffix","PJS","Premier Jumpers Dog Silver",
	"AKC Suffix","PJSP","Premier Jumpers Dog Silver Preferred",
	"AKC Suffix","PT","Pre-Trial Tested",
	"AKC Suffix","PUDX","Preferred Utility Dog Excellent",
	"AKC Suffix","PUTD","Preferred Utility Dog",
	"AKC Suffix","RN","AKC Rally® Novice",
	"AKC Suffix","RA","AKC Rally® Advanced",
	"AKC Suffix","RE","AKC Rally® Excellent",
	"AKC Suffix","#RAE","AKC Rally® Advanced Excellent",
	"AKC Suffix","RI","AKC Rally® Intermediate",
	"AKC Suffix","#RM","AKC Rally® Master",
	"AKC Suffix","SBA","Scent Work Buried Advanced",
	"AKC Suffix","SBAE","Scent Work Buried Advanced Elite",
	"AKC Suffix","SBE","Scent Work Buried Excellent",
	"AKC Suffix","SBEE","Scent Work Buried Excellent Elite",
	"AKC Suffix","SBM","Scent Work Buried Master",
	"AKC Suffix","SBME","Scent Work Buried Master Elite",
	"AKC Suffix","SBN","Scent Work Buried Novice",
	"AKC Suffix","SBNE","Scent Work Buried Novice Elite",
	"AKC Suffix","SC","Senior Courser",
	"AKC Suffix","SCA","Scent Work Container Advanced",
	"AKC Suffix","SCAE","Scent Work Container Advanced Elite",
	"AKC Suffix","SCE","Scent Work Container Excellent",
	"AKC Suffix","SCEE","Scent Work Container Excellent Elite",
	"AKC Suffix","SCM","Scent Work Container Master",
	"AKC Suffix","SCME","Scent Work Cotnainer Master Elite",
	"AKC Suffix","SCN","Scent Work Container Novice",
	"AKC Suffix","SCNE","Scent Work Container Novice Elite",
	"AKC Suffix","SE","Senior Earthdog",
	"AKC Suffix","SEA","Scent Work Exterior Advanced",
	"AKC Suffix","SEAE","Scent Work Exterior Advanced Elite",
	"AKC Suffix","SEE","Scent Work Exterior Excellent",
	"AKC Suffix","SEEE","Scent Work Exterior Excellent Elite",
	"AKC Suffix","SEM","Scent Work Exterior Master",
	"AKC Suffix","SEME","Scent Work Exterior Master Elite",
	"AKC Suffix","SEN","Scent Work Exterior Novice",
	"AKC Suffix","SENE","Scent Work Exterior Novice Elite",
	"AKC Suffix","SH","Senior Hunter",
	"AKC Suffix","SHA","Senior Hunter Advanced",
	"AKC Suffix","SHDA","Scent Work Handler Discrimination Advanced",
	"AKC Suffix","SHDAE","Scent Work Handler Discrimination Advanced Elite",
	"AKC Suffix","SHDE","Scent Work Handler Discrimination Excellent",
	"AKC Suffix","SHDEE","Scent Work Handler Discrimination Excellent Elite",
	"AKC Suffix","SHDM","Scent Work Handler Discrimination Master",
	"AKC Suffix","SHDME","Scent Work Handler Discrimination Master Elite",
	"AKC Suffix","SHDN","Scent Work Handler Discrimination Novice",
	"AKC Suffix","SHDNE","Scent Work Handler Discrimination Novice Elite",
	"AKC Suffix","SHR","Senior Hunter Retriever",
	"AKC Suffix","SHU","Senior Hunter Upland",
	"AKC Suffix","SIA","Scent Work Interior Advanced",
	"AKC Suffix","SIAE","Scent Work Interior Advanced Elite",
	"AKC Suffix","SIE","Scent Work Interior Excellent",
	"AKC Suffix","SIEE","Scent Work Interior Excellent Elite",
	"AKC Suffix","SIM","Scent Work Interior Master",
	"AKC Suffix","SIME","Scent Work Interior Master Elite",
	"AKC Suffix","SIN","Scent Work Interior Novice",
	"AKC Suffix","SINE","Scent Work Interior Novice Elite",
	"AKC Suffix","SWA","Scent Work Advanced",
	"AKC Suffix","SWAE","Scent Work Advanced Elite",
	"AKC Suffix","SWD","Scent Work Detective",
	"AKC Suffix","SWE","Scent Work Excellent",
	"AKC Suffix","SWEE","Scent Work Excellent Elite",
	"AKC Suffix","SWM","Scent Work Master",
	"AKC Suffix","SWME","Scent Work Master Elite",
	"AKC Suffix","SWN","Scent Work Novice",
	"AKC Suffix","SWNE","Scent Work Novice Elite",
	"AKC Suffix","T2B","Time 2 Beat",
	"AKC Suffix","T2BP","Time 2 Beat Preferred",
	"AKC Suffix","#TD","Tracking Dog",
	"AKC Suffix","#TDU","Tracking Dog Urban",
	"AKC Suffix","#TDX","Tracking Dog Excellent",
	"AKC Suffix","THD","Therapy Dog Title",
	"AKC Suffix","THDA","Therapy Dog Advanced",
	"AKC Suffix","THDD","Distinguished Therapy Dog",
	"AKC Suffix","THDN","Therapy Dog Novice",
	"AKC Suffix","THDX","Therapy Dog Excellent",
	"AKC Suffix","TKN","Novice Trick Dog",
	"AKC Suffix","TKI","Intermediate Trick Dog",
	"AKC Suffix","TKA","Advanced Trick Dog",
	"AKC Suffix","TKP","Trick Dog Performer​",
	"AKC Suffix","TKE","Trick Dog Elite Performer",
	"AKC Suffix","TQX","Triple Q Excellent",
	"AKC Suffix","TQXP","Triple Q Excellent Preferred",
	"AKC Suffix","UD","Utility Dog",
	"AKC Suffix","#UDX","Utility Dog Excellent",
	"AKC Suffix","VCD1","Versatile Companion Dog 1",
	"AKC Suffix","VCD2","Versatile Companion Dog 2",
	"AKC Suffix","VCD3","Versatile Companion Dog 3",
	"AKC Suffix","VCD4","Versatile Companion Dog 4",
	"AKC Suffix","VER","Versatility",
	"AKC Suffix","#VST","Variable Surface Tracking",
	"AKC Suffix","XF","Excellent FAST",
	"AKC Suffix","XFP","Excellent FAST Preferred",
	"AKC Airedale Terrier Club of America","JFT","Junior Fur Tracker",
	"AKC Airedale Terrier Club of America","SFT","Senior Fur Tracker",
	"AKC Airedale Terrier Club of America","MFT","Master Fur Tracker",
	"AKC American Bloodhound Club","MT","Man Trailer",
	"AKC American Bloodhound Club","MTI","Man Trailer Intermediate",
	"AKC American Bloodhound Club","MTX","Man Trailer Excellent",
	"AKC Basset Hound Club of America","HH","Hunting Hound",
	"AKC Basset Hound Club of America","SHH","Senior Hunting Hound",
	"AKC Basset Hound Club of America","MHH","Master Hunting Hound",
	"AKC Basset Hound Club of America","MHE","Master Hunting Excellent",
	"AKC Dachshund Club of America","HH","Hunting Hound",
	"AKC Dachshund Club of America","SHH","Senior Hunting Hound",
	"AKC Dachshund Club of America","MHH","Master Hunting Hound",
	"AKC Dachshund Club of America","MHE","Master Hunting Excellent",
	"AKC Dalmatian Club of America","CC","Coaching Certificate",
	"AKC Dalmatian Club of America","RD","Road Dog",
	"AKC Dalmatian Club of America","RDX","Road Dog Excellent",
	"AKC Doberman Pinscher Club of America","WAC","Working Aptitude Certificate",
	"AKC Golden Retriever Club of America","CCA","Certificate of Conformation Assessment",
	"AKC Nova Scotia Duck Tolling Retriever Club","WC","Working Certificate",
	"AKC Nova Scotia Duck Tolling Retriever Club","WCI","Working Certificate Intermediate",
	"AKC Nova Scotia Duck Tolling Retriever Club","WCX","Working Certificate Excellent",
	"AKC Petit Basset Griffon Vendeen","PCJH","Parent Club Junior Hunter",
	"AKC Petit Basset Griffon Vendeen","PCSH","Parent Club Senior Hunter",
	"AKC Petit Basset Griffon Vendeen","PCMH","Parent Club Master Hunter",
	"AKC Petit Basset Griffon Vendeen","HH","Hunting Hound",
	"AKC Petit Basset Griffon Vendeen","SHH","Senior Hunting Hound",
	"AKC Petit Basset Griffon Vendeen","MHH","Master Hunting Hound",
	"AKC Petit Basset Griffon Vendeen","MHE","Master Hunting Excellent",
	"AKC Siberian Husky Club of America","SD","Sled Dog",
	"AKC Siberian Husky Club of America","SDX","Sled Dog Excellent",
	"AKC Siberian Husky Club of America","SDO","Sled Dog Outstanding",
	"AKC West Highland White Terrier Club of America","CCA","Certificate of Conformation Assessment",
	"AKC American Rottweiler Club","CS","Carting Started",
	"AKC American Rottweiler Club","CI","Carting Intermediate",
	"AKC American Rottweiler Club","CX","Carting Excellent",
	"AKC American Rottweiler Club","CST","Carting Started Team",
	"AKC American Rottweiler Club","CIT","Carting Intermediate Team",
	"AKC American Rottweiler Club","CXT","Carting Excellent Team",
	"AKC American Bouvier des Flandres Club","NDD","Novice Draft Dog",
	"AKC Bernese Mountain Dog Club of America","NDD","Novice Draft Dog",
	"AKC Belgian Sheepdog Club of America", "NDD", "Novice Draft Dog",
	"AKC Briard Club of America", "NDD", "Novice Draft Dog",
	"AKC Greater Swiss Mountain Dog Club of America", "NDD", "Novice Draft Dog",
	"AKC Mastiff Club of America", "NDD", "Novice Draft Dog",
	"AKC Leonberger Club of America", "NDD", "Novice Draft Dog",
	"AKC American Bouvier des Flandres Club","DD","Draft Dog",
	"AKC Bernese Mountain Dog Club of America", "DD","Draft Dog",
	"AKC Belgian Sheepdog Club of America", "DD","Draft Dog",
	"AKC Briard Club of America", "DD","Draft Dog",
	"AKC Greater Swiss Mountain Dog Club of America", "DD","Draft Dog",
	"AKC Mastiff Club of America", "DD","Draft Dog",
	"AKC Leonberger Club of America", "DD","Draft Dog",
	"AKC American Bouvier des Flandres Club", "NBDD","Novice Brace Draft Dog",
	"AKC Bernese Mountain Dog Club of America", "NBDD","Novice Brace Draft Dog",
	"AKC Belgian Sheepdog Club of America", "NBDD","Novice Brace Draft Dog",
	"AKC Briard Club of America", "NBDD","Novice Brace Draft Dog",
	"AKC Greater Swiss Mountain Dog Club of America", "NBDD","Novice Brace Draft Dog",
	"AKC Mastiff Club of America", "NBDD","Novice Brace Draft Dog",
	"AKC Leonberger Club of America", "NBDD","Novice Brace Draft Dog",
	"AKC American Bouvier des Flandres Club", "BDD", "Brace Draft Dog",
	"AKC Bernese Mountain Dog Club of America", "BDD", "Brace Draft Dog",
	"AKC Belgian Sheepdog Club of America", "BDD", "Brace Draft Dog",
	"AKC Briard Club of America", "BDD", "Brace Draft Dog",
	"AKC Greater Swiss Mountain Dog Club of America", "BDD", "Brace Draft Dog",
	"AKC Mastiff Club of America", "BDD", "Brace Draft Dog",
	"AKC Leonberger Club of America", "BDD", "Brace Draft Dog",
	"AKC St. Bernard Club of America","DD","Draft Dog",
	"AKC St. Bernard Club of America","TDD","Team Draft Dog",
	"AKC Leonberger Club of America", "TDD", "Team Draft Dog",
	"AKC Working Dog","BH","Basic Companion Dog",
	"AKC Working Dog","FH1","Advanced Tracking",
	"AKC Working Dog","FH2","Superior Tracking",
	"AKC Working Dog","IPO1","International Novice Schutzhund",
	"AKC Working Dog","IPO2","International Intermediate Schutzhund",
	"AKC Working Dog","IPO3","International Master Level Schutzhund",
	"AKC Working Dog","SCHH1","Novice Schutzhund",
	"AKC Working Dog","SCHH2","Intermediate Schutzhund",
	"AKC Working Dog","SCHH3","Master Level Schutzhund",
	"AKC Working Dog","SCHHA","Novice Schutzhund A",
	"AKC Working Dog","TC","Temperament Certification",
	"AKC Working Dog","TT","Temperament Test",
	"AKC Working Dog","WDS1","Working Dog Sport 1",
	"AKC Working Dog","WDS2","Working Dog Sport 2",
	"AKC Working Dog","WDS3","Working Dog Sport 3",
	"AKC North American Flyball Association (NAFA)","FDCh","Flyball Dog Champion",
	"AKC North American Flyball Association (NAFA)","FM","Flyball Master",
	"AKC North American Flyball Association (NAFA)","ONYX","ONYX",
	"AKC Barn Hunt Association","CZ8B","Crazy 8s Bronze",
	"AKC Barn Hunt Association","CZ8S","Crazy 8s Silver",
	"AKC Barn Hunt Association","CZ8G","Crazy 8s Gold",
	"AKC Barn Hunt Association","CZ8P","Crazy 8s Platinum",
	"AKC Barn Hunt Association","RATN","Novice Barn Hunt",
	"AKC Barn Hunt Association","RATO","Open Barn Hunt",
	"AKC Barn Hunt Association","RATS","Senior Barn Hunt",
	"AKC Barn Hunt Association","RATM","Master Barn Hunt",
	"AKC Barn Hunt Association","RATCh","Barn Hunt Champion",
	"AKC Barn Hunt Association","RATChX","Barn Hunt Master Champion",
	"AKC North America Diving Dogs (NADD)","DN","Dock Novice",
	"AKC North America Diving Dogs (NADD)","DJ","Dock Junior",
	"AKC North America Diving Dogs (NADD)","DS","Dock Senior",
	"AKC North America Diving Dogs (NADD)","DM","Dock Master",
	"AKC North America Diving Dogs (NADD)","DE","Dock Elite",
	"AKC North America Diving Dogs (NADD)","DNA","Dock Novice Advanced",
	"AKC North America Diving Dogs (NADD)","DJA","Dock Junior Advanced",
	"AKC North America Diving Dogs (NADD)","DSA","Dock Senior Advanced",
	"AKC North America Diving Dogs (NADD)","DMA","Dock Master Advanced",
	"AKC North America Diving Dogs (NADD)","DEA","Dock Elite Advanced",
	"AKC North America Diving Dogs (NADD)","DNX","Dock Novice Excellent",
	"AKC North America Diving Dogs (NADD)","DJX","Dock Junior Excellent",
	"AKC North America Diving Dogs (NADD)","DSX","Dock Senior Excellent",
	"AKC North America Diving Dogs (NADD)","DMX","Dock Master Excellent",
	"AKC North America Diving Dogs (NADD)","DEX","Dock Elite Excellent",
	"AKC North America Diving Dogs (NADD)","AN","Air Retrieve Novice",
	"AKC North America Diving Dogs (NADD)","AJ","Air Retrieve Junior",
	"AKC North America Diving Dogs (NADD)","AS","Air Retrieve Senior",
	"AKC North America Diving Dogs (NADD)","AM","Air Retrieve Master",
	"AKC North America Diving Dogs (NADD)","AE","Air Retrieve Elite",
	"AKC North America Diving Dogs (NADD)","ANA","Air Retrieve Novice Advanced",
	"AKC North America Diving Dogs (NADD)","AJA","Air Retrieve Junior Advanced",
	"AKC North America Diving Dogs (NADD)","ASA","Air Retrieve Senior Advanced",
	"AKC North America Diving Dogs (NADD)","AMA","Air Retrieve Master Advanced",
	"AKC North America Diving Dogs (NADD)","AEA","Air Retrieve Elite Advanced",
	"AKC North America Diving Dogs (NADD)","ANX","Air Retrieve Novice Excellent",
	"AKC North America Diving Dogs (NADD)","AJX","Air Retrieve Junior Excellent",
	"AKC North America Diving Dogs (NADD)","ASX","Air Retrieve Senior Excellent",
	"AKC North America Diving Dogs (NADD)","AMX","Air Retrieve Master Excellent",
	"AKC North America Diving Dogs (NADD)","AEX","Air Retrieve Elite Excellent",
	"AKC UpDog Challenge (Disc Dog)","DDB","Disc Dog Bronze",
	"AKC UpDog Challenge (Disc Dog)","DDBE","Disc Dog Bronze Elite",
	"AKC UpDog Challenge (Disc Dog)","DDG","Disc Dog Gold",
	"AKC UpDog Challenge (Disc Dog)","DDGE","Disc Dog Gold Elite",
	"AKC UpDog Challenge (Disc Dog)","DDP","Disc Dog Platinum",
	"AKC UpDog Challenge (Disc Dog)","DDPE","Disc Dog Platinum Elite",
	"AKC UpDog Challenge (Disc Dog)","DDS","Disc Dog Silver",
	"AKC UpDog Challenge (Disc Dog)","DDSE","Disc Dog Silver Elite",
	"AKC UpDog Challenge (Disc Dog)","DDU","Disc Dog Unobtanium",
	"AKC UpDog Challenge (Disc Dog)","DDUE","Disc Dog Unobtanium Elite",
]


// test data: 
//let titles =  ["CD", "thing", "REX", "RNX", "RNC", "5839", "AKC", "RN", "CGC", "TKI", "test1", "**ETD**", "**ATD-M**", "ITD-M"];

let titlesInput = document.getElementById("titlesInput");
let titleCheckBtn = document.getElementById("titleCheckBtn");
let titlesHeader = document.getElementById("titlesHeader");
let instructions = document.getElementById("instructions");
let noTitles = document.getElementById("noTitles");
let tableTitles = document.getElementById("tableTitles");

let output = "";
let outputTable = [];
let noDescription = "";

function compareValues(a, b) {
	// for table sorting
	// https://stackoverflow.com/questions/55462632/javascript-sort-table-column-on-click
	// return -1/0/1 based on what you "know" a and b are here.
	return (a < b) ? -1 : (a > b) ? 1 : 0;
}

function sortTable(table, colnum) {
	// get all the rows in this table:
	let rows = Array.from(table.querySelectorAll(`tr`));

	// but ignore the heading row:
	rows = rows.slice(1);

	// set up the queryselector for getting the indicated
	// column from a row, so we can compare using its value:
	let qs = `td:nth-child(${colnum})`;

	// and then just... sort the rows:
	rows.sort((r1, r2) => {
		// get each row's relevant column
		let t1 = r1.querySelector(qs);
		let t2 = r2.querySelector(qs);

		// and then effect sorting by comparing their content:
		return compareValues(t1.textContent, t2.textContent);
	});

	// and then the magic part that makes the sorting appear on-page:
	rows.forEach(row => table.appendChild(row));
}

function clearTable(table) {
	for (let i = table.rows.length - 1; i > 0; i--) {
		table.rows[i].remove()
	}
}

function descriptions(string) {

	let description = "";

	for (let i = 0; i < titleDescriptions.length; i++) {
		if (string == titleDescriptions[i]) {
			description += `${titleDescriptions[i - 1]} - ${titleDescriptions[i]} - ${titleDescriptions[i + 1]} \n`;
			outputTable.push({ Type: titleDescriptions[i - 1], Name: titleDescriptions[i], Description: titleDescriptions[i + 1] });
			let row = tableTitles.insertRow();
			let cell1 = row.insertCell(0);
			let cell2 = row.insertCell(1);
			let cell3 = row.insertCell(2);

			cell1.innerHTML = `${titleDescriptions[i - 1]}`;
			cell2.innerHTML = `${titleDescriptions[i]}`;
			cell3.innerHTML = `${titleDescriptions[i + 1]}`;
		}
	}

	if (description !== "") {
		output = output.concat(description);
	} else if (string) {
		console.error(`No description for ${string}`);

		let row = noTitles.insertRow();
		let cell1 = row.insertCell(0);
		cell1.innerHTML = `${string}`;
	}
}

tableTitles.querySelectorAll(`th`).forEach((th, position) => {
	th.addEventListener(`click`, evt => sortTable(tableTitles, position + 1));
});

noTitles.querySelectorAll(`th`).forEach((th, position) => {
	th.addEventListener(`click`, evt => sortTable(noTitles, position + 1));
});

titleCheckBtn.addEventListener('click', () => {
	clearTable(tableTitles);
	clearTable(noTitles);
	let titles = titlesInput.value.replace(/[^a-z0-9 -]/gi, '').toUpperCase().split(" ");
	titles.map(descriptions);

	consoleOutput = 0; // 0 = console, 1 = table

	console.log("Table Len:" + noTitles.rows.length);

	if (noTitles.rows.length > 1) {
		noTitles.removeAttribute("hidden");
	} else {
		noTitles.setAttribute("hidden", "hidden");
	}

	if (tableTitles.rows.length > 1) {
		titlesHeader.removeAttribute("hidden");
		tableTitles.removeAttribute("hidden");
		instructions.removeAttribute("hidden");
		instructions.innerText = "Click table headers to sort by that column:";
	} else {
		titlesHeader.setAttribute("hidden", "hidden");
		tableTitles.setAttribute("hidden", "hidden");
		instructions.removeAttribute("hidden");
		instructions.innerText = "No titles were found.";
	}

	if (consoleOutput == 0) {
		console.log(output);
	} else {
		console.table(outputTable, ["Type", "Name", "Description"]);
	}
});