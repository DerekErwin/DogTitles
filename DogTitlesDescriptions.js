const titleDescriptions = [
	"AKC Prefix Title","AFC","Amateur Field Trial Champion: - Earning the AFC title - [ Field Trial ]",
	"AKC Prefix Title","AGCH","Agility Grand Champion: - To earn this title a dog must earn the following - Master Standard & Master Jumper with Weaves – 100 qualifying scores from each class - Master Fast – 75 qualifying scores - Time 2 Beat – 75 qualifying scores - Premier Standard and Premier JWW – 50 qualifying scores from each class - [Agility Trial ]",
	"AKC Prefix Title","CCH","Bench Show Champion: - Dogs must have a total of a 100 pts under two different judges and 1 Best In Show win with competition. - [ Coonhound Bench Show ]",
	"AKC Prefix Title","CFC","Coonhound Field Champion: - A dog must win one First Line and one First Tree in Finals at least once on the same date and in the same trial with competition, and have a total of 200 Championship points. - [ Coonhound Field Trial ]",
	"AKC Prefix Title","CGCH","Coonhound Grand Champion: - A Bench Show Champion must win 3 Champion Classes (against all Champions). - [ Coonhound Bench Show ]",
	"AKC Prefix Title","CGF","Coonhound Grand Field Champion: - Field Champion must win three (3) First Lines and/or three (3) First Trees in three (3) Lines Final or Trees Finals. At least one of the three wins must include both Line Final and Tree Final. If a hound wins both First Line and First Tree in the Final Line or Final at the same trial on the same day with competition. If a hound wins both First Line and First Tree in the Final Line or Final Tree in the same trial, this only counts as one (1) win towards a Grand Field Champion. - [ Coonhound Field Trial ]",
	"AKC Prefix Title","CGN","Grand Nite Champion: - Nite Champion dogs must win five casts with plus points. - [ Coonhound Nite Hunt ]",
	"AKC Prefix Title","CGW","Grand Water Race Champion: - A Water Race Champion must win three (3) First Lines and/or First Trees in three (3) Line Finals or Tree Finals at three different Water Races. At least one of the three wins must include both Line Final and Tree Finals. If a hound wins both First Line and First Tree in the Final Line or Final Tree in the same race, this only counts as one win towards a Grand Water Race Champion title. - [ Coonhound Water Race ]",
	"AKC Prefix Title","CH","Champion: - Dogs must acquire 15 points, including 2 majors won under different judges and at least one point under a third different judge. - [ Conformation ]",
	"AKC Prefix Title","CNC","Nite Champion: - A dog must win five casts with plus points. - [ Coonhound Nite Hunt ]",
	"AKC Prefix Title","CSG","Supreme Grand Champion: - A Grand Champion must win 3 Champion Classes. (against all Champions). - [ Coonhound Bench Show ]",
	"AKC Prefix Title","CSGF","Supreme Grand Field Champion: - A Grand Field Champion must win three (3) First Lines and/or three (3) First Trees in three (3) Finals or Tree Finals at three (3) different trials. At least one of the three wins must include both Final Line and Final Tree in the same trial on the same date with competition. If a hound wins both First Line and First Tree in the Final Line or Final Tree in the same trial, this only counts as one (1) win towards a Supreme Grand Field Champion title. - [ Coonhound Field Trial ]",
	"AKC Prefix Title","CSGN","Supreme Grand Nite Champion: - Grand Nite Champion dogs must win five casts with plus points. - [ Coonhound Nite Hunt ]",
	"AKC Prefix Title","CSGW","Supreme Grand Water Race Champion: - A Water Race Grand Champion must win three (3) First Lines and/or First Trees in three (3) Line Finals or Tree Finals at three different Water Races. At least one of the three wins must include both Final Line and Final Tree Line Final and Tree Final in the same event on the same date with competition. If a hound wins both First Line and First Tree in the Final Line or Final Tree in the same race, this only counts as one (1) win towards a Supreme Grand Water Race Champion title. - [ Coonhound Water Race ]",
	"AKC Prefix Title","CT","Champion Tracker: - Dog must hold all 3 tracking titles (TD or TDU, TDX and VST) - [ Tracking Test ]",
	"AKC Prefix Title","CWC","Water Race Champion: - A dog must win one First Line and one First Tree in Finals at least once on the same date and in the same Water Race with competition and have a total of 200 Championship points. - [ Coonhound Water Race ]",
	"AKC Prefix Title","CWSG","World Show Champion: - Dog must win first place at the annual World Championship Show. - [ Coonhound Bench Show ]",
	"AKC Prefix Title","DC","Dual Champion: - Any dog that has been awarded the title of Champion of Record (Ch.) may be designated as a “Dual Champion,” after it has also been awarded the title of Field Champion (FC) or Herding Champion (HC). - [ Conformation / Field Trial / Herding Trial ]",
	"AKC Prefix Title","FC","Field Champion: - Earning the FC title - [ Field Trial ]",
	"AKC Prefix Title","GCH","Grand Champion: - Completion of the title requires all of the following:Twenty five Grand Championship points - Three majors won under three different judges - At least one or more points won under a fourth judge - Must have defeated at least one other AKC Champion of Record at three shows",
	"AKC Prefix Title","GCHB","Grand Champion Bronze: - Any Grand Champion which shall have won 100 Grand Championship points shall become a Grand Champion Bronze (GCHB). - [ Conformation ]",
	"AKC Prefix Title","GCHG","Grand Champion Gold: - Any Grand Champion which shall have won 400 Grand Championship points shall become a Grand Champion Gold (GCHG). - [ Conformation ]",
	"AKC Prefix Title","GCHP","Grand Champion Platinum: - Any Grand Champion which shall have won 800 Grand Championship points shall become a Grand Champion Platinum (GCHP). After earning Grand Champion Platinum title, for each additional 800 Grand Championship points earned the Grand Champion Platinum title initials will be followed by a numeric designation indicating the quantity of times the dog has met the requirements of the Grand Champion Platinum title as defined above, e.g., 1,600 Grand Championship points = GCHP2. - [ Conformation ]",
	"AKC Prefix Title","GCHS","Grand Champion Silver: - Any Grand Champion which shall have won 200 Grand Championship points shall become a Grand Champion Silver (GCHS). - [ Conformation ]",
	"AKC Prefix Title","GDSC","Gun Dog Stake Champion: - Win 1st place in a stake that has been designated an Open Gun Dog Championship stake. - [ Field Trial ]",
	"AKC Prefix Title","GAFC","Grand Amateur Field Champion: (Pointing Breeds) - A dog that has previously earned its Amateur Field Champion title will be recorded a Grand Amateur Field Champion [GAFC] if it subsequently earns 6 points according to the AFC point system including one win of three points or greater in Grand stakes. - [ Field Trial ]",
	"AKC Prefix Title","GFC","Grand Field Champion: (Pointing Breeds) - A dog that has previously earned its Field Champion title will be recorded a Grand Field Champion (GFC) if it subsequently earns 6 points according to the FC point schedule in Grand Open Limited All Age or Grand Open Limited Gun Dog stakes, provided the points include at least one first place win of 3 points or more. - [ Field Trial ]",
	"AKC Prefix Title","HC","Herding Champion: - For a title, dog must receive 15 points with at least two 1sts carrying championship points, 1 of which must be for 3 pts. or better. - [ Herding Trial ]",
	"AKC Prefix Title","MACH","Master Agility Champion: - In order to acquire the title, a dog must achieve a minimum of 750 championship points and 20 double qualifying scores obtained from the Master Standard Agility class and the Master Jumpers With Weaves class. - [ Agility Trial ]",
	"AKC Prefix Title","NAC","National Agility Champion: - The winner of the annual National Agility Championship shall be entitled to be designated National Agility Champion of _____(year). - [ National Agility Championship ]",
	"AKC Prefix Title","NAFC","National Amateur Field Champion: - Win 1st place in a stake that has been designated a National Amateur Championship stake. - [ Field Trial ]",
	"AKC Prefix Title","NAGDC","National Amateur Gundog Champion: - National Amateur Gundog Champion title is for the dog that wins 1st place in a national amateur gun dog stake at a national championship field trial event for pointing breeds. - [ Field Trial ]",
	"AKC Prefix Title","NFC","National Field Champion: - Win 1st place in a stake that has been designated a National Open Championship stake. - [ Field Trial ]",
	"AKC Prefix Title","NGDC","National Gundog Champion: - Win 1st place in a stake that has been designated a National Open Gun Dog Championship stake. - [ Field Trial ]",
	"AKC Prefix Title","NOC","National Obedience Champion: - The winner of the annual National Obedience Invitational shall be entitled to be designated National Obedience Champion of _____(year) - [ National Obedience Invitational ]",
	"AKC Prefix Title","OTCH","Obedience Trial Champion: - Dog must have won:100 points; - Dog must receive at least one first place Open B, one first place Utility and a third first place ribbon in either class - First places must be awarded by 3 different judges - Must be at all-breed events One of the required first places may have been won at a Specialty Show. - Open B must have 6 in competition - Utility must have 3 in competition",
	"AKC Prefix Title","PACH","Preferred Agility Champion: - In order to acquire the title, a dog must achieve a minimum of 750 championship points and 20 double qualifying scores obtained from the Master Preferred Standard Agility class and the Master Preferred Jumpers With Weaves class. - [ Agility Trial ]",
	"AKC Prefix Title","PNAC","Preferred National Agility Champion: - The winner of the annual National Agility Championship in each Preferred class jump height shall be entitled to be designated Preferred National Agility Champion of _____(year). - [ National Agility Championship ]",
	"AKC Prefix Title","POC","Preferred Obedience Champion: - The AKC will permit the use of the letters POC preceding the name of each dog that meets the requirements. a dog must achieve a minimum of 750 points and qualifying scores in both the Preferred Open class and the Preferred Utility class at 20 separate licensed or member obedience trials. - [ Obedience Trial ]",
	"AKC Prefix Title","RACH","AKC Rally® Champion: - The letters RACH may be added preceding a dog’s name when it has achieved a minimum of 300 championship points from the Advanced B, Excellent B and Master classes, with a minimum of 150 points from the Master class; and 20 triple qualifying scores obtained from the Advanced B, Excellent B and Master classes. - [ Rally Trial ]",
	"AKC Prefix Title","RGDSC","Retrieving Gun Dog Stake Champion: - Win 1st place in a stake that has been designated a Retrieving Gun Dog Championship stake. - [ Field Trial ]",
	"AKC Prefix Title","RNC","AKC Rally® National Champion: - The winner of the AKC Rally® National Championship shall be entitled to be designated “AKC Rally National Champion of _____ (year).” - [ AKC Rally® National Championship ]",
	"AKC Prefix Title","TC","Triple Champion: - Any dog that has been awarded the title of Dual Champion (DC) and the title of Obedience Trial Champion (OTCH) or Tracking Champion (CT) or Agility Champion (MACH or PACH) may be designated as a Triple Champion.",
	"AKC Prefix Title","VCCH","Versatile Companion Champion: - Effective January 1, 2001, title will precede the name of the dog that completes a OTCH, MACH or PACH and CT. - [ Obedience Trial / Agility Trial / Tracking Test ]",
	"AKC Prefix Title","WNC","World Nite Champion - Dog must win the final cast of the annual World Championship Hunt. - [ Coonhound Nite Hunt ]",
	"AKC Suffix Titles","ACT1","Agility Course Test 1: - Requires 2 passing scores in the ACT1 class. - [ Agility Test ]",
	"AKC Suffix Titles","ACT2","Agility Course Test 2: - Requires 2 passing scores in the ACT2 class. - [ Agility Test ]",
	"AKC Suffix Titles","ACT1J","Agility Course Test 1 Jumpers: - Requires 2 passing scores in the ACT1J class. - [ Agility Test ]",
	"AKC Suffix Titles","ACT2J","Agility Course Test 2 Jumpers: - Requires 2 passing scores in the ACT2J class. - [ Agility Test ]",
	"AKC Suffix Titles","AJP","Excellent Agility Jumpers With Weaves “A” Preferred: - For a title, dog must earn 3 qualifying scores in Excellent A Jumpers With Weaves Preferred class under at least 2 different judges. - [ Agility Trial ]",
	"AKC Suffix Titles","ATT","AKC Temperament Test: - Requires dogs to have passed the AKC Temperament Test on two occasions under two different evaluators. - [ AKC Temperament Test]",
	"AKC Suffix Titles","AX","Agility Excellent: - For a title, dog must earn 3 qualifying scores in Excellent A Agility class under at least 2 different judges. - [ Agility Trial ]",
	"AKC Suffix Titles","AXJ","Excellent Agility Jumper: - For a title, dog must earn 3 qualifying scores in Excellent A Jumpers With Weaves class under at least 2 different judges. - [ Agility Trial ]",
	"AKC Suffix Titles","AXP","Agility Excellent “A” Preferred: - For a title, dog must earn 3 qualifying scores in Agility Excellent “A” Preferred Class under at least 2 different judges. - [ Agility Trial ]",
	"AKC Suffix Titles","BCAT","BCAT: - Requires 150 points earned at Fast CAT® events. - [ Fast CAT® ]",
	"AKC Suffix Titles","BN","Beginner Novice: - The letters BN may be added after a dog’s name when it has been certified by 2 different judges to have received qualifying scores in Beginner Novice classes at 3 licensed or member obedience trials. - [ Obedience Trial ]",
	"AKC Suffix Titles","BN-V","Virtual Beginner Novice: - The letters BN-V will be added after a dog’s name when it has been certified to have received three qualifying scores in the Virtual Beginner Novice class. The letters BN-V will be followed by a numeric designation indicating the number of times a dog has met the requirements of the BN-V title as defined in the Regulations. - [ Virtual Obedience Test ]",
	"AKC Suffix Titles","CA","Coursing Ability: - Three qualifying scores in the Coursing Ability Test from 2 different judges at 3 different tests. A dog must complete the course with enthusiasm and without interruption within a stated maximum amount of time. - [ Coursing Ability Test ]",
	"AKC Suffix Titles","CAA","Coursing Ability Advanced: - Ten qualifying scores in the Coursing Ability Test. - [ Coursing Ability Test ]",
	"AKC Suffix Titles","CAX","Coursing Ability Excellent: - Twenty five qualifying scores in the Coursing Ability Test. - [ Coursing Ability Test ]",
	"AKC Suffix Titles","CAX2","Coursing Ability Excellent 2: - Fifty qualifying scores in the Coursing Ability Test. - [ Coursing Ability Test ]",
	"AKC Suffix Titles","CD","Companion Dog: - The letters CD may be added after a dog’s name when it has been certified by 2 different judges to have received qualifying scores in Novice classes at 3 licensed or member obedience trials. - [ Obedience Trial ]",
	"AKC Suffix Titles","CD-V","Virtual Companion Dog: - The letters CD-V will be added after a dog’s name when it has been certified to have received three qualifying scores in the Virtual Novice class. The letters CD-V will be followed by a numeric designation indicating the number of times a dog has met the requirements of the CD-V title as defined in the Regulations. - [ Virtual Obedience Test ]",
	"AKC Suffix Titles","CDX","Companion Dog Excellent: - The letters CDX may be added after the name of each dog that has been certified by 2 different judges to have received qualifying scores in Open classes at 3 licensed or member obedience trials. - [ Obedience Trial ]",
	"AKC Suffix Titles","CGC","Canine Good Citizen: - Earning the CGC title - [ Canine Good Citizen ]",
	"AKC Suffix Titles","CGCA","AKC Community Canine: - The advanced level of Canine Good Citizen. - [ Canine Good Citizen ]",
	"AKC Suffix Titles","CGCU","CGCU – Canine Good Citizen Urban: - AKC Urban CGC requires that the dog demonstrate CGC skills and beyond in an urban setting where they must pass a 10 step test of skills. Dogs must have already passed a CGC test. - [ Canine Good Citizen ]",
	"AKC Suffix Titles","CM","Certificate of Merit: - Certificate of Merit points can be earned in the Miscellaneous classes and at FSS Open Shows. The Certificate of Merit requires 15 points total, which can be accumulated from any of these competitions. The CM title initials will be followed by a numeric designation indicating the number of times that the dog has met the requirements of the CM title (e.g. CM2, CM3, etc.). - [ Conformation ]",
	"AKC Suffix Titles","DCAT","DCAT: - Requires 500 points earned at Fast CAT events. - [ Fast CAT® ]",
	"AKC Suffix Titles","EE","Endurance Earthdog: - Endurance Earthdog will be awarded to a dog which, on five occasions, passes both the Senior and Master classes at the same earthdog event [same event number]. - [ Earthdog ]",
	"AKC Suffix Titles","FCAT","FCAT: - Requires 1000 points earned at Fast CAT events. - [ Fast CAT® ]",
	"AKC Suffix Titles","FDC","Farm Dog Certified: - Requires dogs to have passed the Farm Dog Certified test on two occasions under two different judges.",
	"AKC Suffix Titles","FTC","FAST Century: - Requires the MXF title plus one hundred Master FAST agility class qualifying scores of 60 points or greater. The FTC title initials will be followed by a numeric designation indicating the quantity of times the dog has met the requirements of the FTC title. (e.g. FTC2, FTC3, etc.) - [ Agility Trial ]",
	"AKC Suffix Titles","FTCP","FAST Century Preferred: - Requires the MFP title plus one hundred Master FAST agility class qualifying scores of 60 points or greater. The FTCP title initials will be followed by a numeric designation indicating the quantity of times the dog has met the requirements of the FTCP title. (e.g. FTCP2, FTCP3, etc.) - [ Agility Trial ]",
	"AKC Suffix Titles","GN","Graduate Novice: - The letters GN may be added after a dog’s name when it has been certified by 2 different judges to have received qualifying scores in Graduate Novice classes at 3 licensed or member obedience trials. - [ Obedience Trial ]",
	"AKC Suffix Titles","GO","Graduate Open: - The letters GO may be added after a dog’s name when it has been certified by 2 different judges to have received qualifying scores in Graduate Open classes at 3 licensed or member obedience trials. - [ Obedience Trial ]",
	"AKC Suffix Titles","HI","Herding Intermediate: - Three qualifying scores in the Intermediate classes from 2 different judges at 3 different trials. - [ Herding Trial ]",
	"AKC Suffix Titles","HIAdsc","Herding Intermediate Course A (ducks, sheep, cattle): - Three qualifying scores in the Intermediate Course A classes using Ducks (HIAd), Sheep (HIAs) or Cattle (HIAc) from 2 different judges at 3 different trials. - [ Herding Trial ]",
	"AKC Suffix Titles","HIBdsc","Herding Intermediate Course B (ducks, sheep, cattle): - Three qualifying scores in the Intermediate Course B classes using Ducks (HIBd), Sheep (HIBs) or Cattle (HIBc) from 2 different judges at 3 different trials. - [ Herding Trial ]",
	"AKC Suffix Titles","HICs","Herding Intermediate Course C (sheep): - Three qualifying scores in the Intermediate Course C classes using Sheep (HICs) from 2 different judges at 3 different trials. - [ Herding Trial ]",
	"AKC Suffix Titles","HS","Herding Started: - Three qualifying scores in the Started classes from 2 different judges at 3 different trials. - [ Herding Trial ]",
	"AKC Suffix Titles","HSAdsc","Herding Started Course A (ducks, sheep, cattle): - Three qualifying scores in the Started Course A classes using Ducks (HSAd), Sheep (HSAs) or Cattle (HSAc) from 2 different judges at 3 different trials. - [ Herding Trial ]",
	"AKC Suffix Titles","HSBdsc","Herding Started Course B (ducks, sheep, cattle): - Three qualifying scores in the Started Course B classes using Ducks (HSBd), Sheep (HSBs) or Cattle (HSBc) from 2 different judges at 3 different trials. - [ Herding Trial ]",
	"AKC Suffix Titles","HSCs","Herding Started Course C (sheep): - Three qualifying scores in the Started Course C classes using Sheep (HSCs) from 2 different judges at 3 different trials. - [ Herding Trial ]",
	"AKC Suffix Titles","HT","Herding Tested: - For a title, a dog must qualify twice under 2 different judges. Dog may qualify twice in one day at the same event provided he/she is judged by different judges. - [ Herding Trial ]",
	"AKC Suffix Titles","HX","Herding Excellent: - Three qualifying scores in the Advanced classes from 2 different judges at 3 different trials. - [ Herding Trial ]",
	"AKC Suffix Titles","HXAdsc","Herding Advanced Course A (ducks, sheep, cattle): - Three qualifying scores in the Advanced Course A classes using Ducks (HXAd), Sheep (HXAs) or Cattle (HXAc) from 2 different judges at 3 different trials. - [ Herding Trial ]",
	"AKC Suffix Titles","HXBdsc","Herding Advanced Course B (ducks, sheep, cattle): - Three qualifying scores in the Advanced Course B classes using Ducks (HXBd), Sheep (HXBs) or Cattle (HXBc) from 2 different judges at 3 different trials. - [ Herding Trial ]",
	"AKC Suffix Titles","HXCs","Herding Advanced Course C (sheep): - Three qualifying scores in the Advanced Course C classes using Sheep (HIAs) from 2 different judges at 3 different trials. - [ Herding Trial ]",
	"AKC Suffix Titles","JC","Junior Courser: - A hound running alone shall receive certification from a Judge on one date, and a second certification from a different Judge at a later date, stating that the hound completed a 600-yard course with a minimum of four (4) turns. The hound must complete the course with enthusiasm and without interruption. The two runs can be on the same date at or in conjunction with a National Breed Specialty. - [ Lure Coursing ]",
	"AKC Suffix Titles","JE","Junior Earthdog: - A dog must have a record of having qualified in the Junior Earthdog test in two (2) AKC licensed or member club tests under two different Judges. - [ Earthdog ]",
	"AKC Suffix Titles","JH","Junior Hunter: - For a title, dog must receive qualifying scores at 4 licensed or member tests. - [ Hunting Test ]",
	"AKC Suffix Titles","JHA","Junior Hunter Advanced: - An advanced title is earned when a dog passes an additional 5 times with an average qualifying score of 8.0 or higher after earning its JH. - [ Hunting Test ]",
	"AKC Suffix Titles","JHR","Junior Hunter Retriever: - This is a hunting test title available to versatile hunting breeds that are allowed to enter a Retriever hunting test. A dog must receive qualifying scores at 4 licensed or member Retriever Hunting Tests. Breeds eligible for this title are: American Water Spaniel; Boykin Spaniel; German Shorthaired Pointer; German Wirehaired Pointer; Vizsla; Weimaraner; Wirehaired Pointing Griffon, Spinone Italiano. - [ Hunting Test ]",
	"AKC Suffix Titles","JHU","Junior Hunter Upland: - THIS IS A HUNTING TEST TITLE AVAILABLE TO VERSATILE HUNTING BREEDS THAT ARE ALLOWED TO ENTER RETRIEVER HUNTING TESTS. A DOG MUST RECEIVE QUALIFYING SCORES AT 5 LICENSED OR MEMBER RETRIEVER HUNTING TESTS, OR 4 QUALIFYING SCORES IF THE DOG HAS ALREADY EARNED A JHR TITLE. BREEDS ELIGIBLE FOR THIS TITLE ARE: AMERICAN WATER Spaniel, BOYKIN Spaniel, German Shorthaired Pointer, German Wirehaired Pointer, VIZSLA, WEIMARANER, WPG, SPINONE ITALIANO. - [ Hunting Test ]",
	"AKC Suffix Titles","LCX","Lure Courser Excellent: - Any dog that has been awarded the title of Field Champion and has earned 45 additional championship points will be awarded the suffix title of Lure Courser Excellent (LCX). The title of Lure Courser Excellent is a cumulative title, each time the dog accrues an additional 45 championship points it would be eligible to receive the next title level. (LCX II, LCX III, LCX IV, etc.) - [ Lure Coursing ]",
	"AKC Suffix Titles","MC","Master Courser: - The Master Courser title will be awarded to hounds that have acquired the Senior Courser title and that have earned an additional twenty-five (25) qualifying scores (with competition) in either the Open, Open Veteran or Specials stake at AKC licensed or member club lure coursing trials. - [ Lure Coursing ]",
	"AKC Suffix Titles","ME","Master Earthdog: - A dog must have a record of having qualified in the Master Earthdog test at four (4) AKC licensed or member club hunting tests under three different Judges. - [ Earthdog ]",
	"AKC Suffix Titles","MFB","Master Bronze FAST: - Requires twenty-five Master FAST class qualifying scores of 60 points or greater. - [ Agility Trial ]",
	"AKC Suffix Titles","MFC","Master Century FAST: - Requires the MFG plus twenty-five additional Master FAST class qualifying scores of 60 points or greater. - [ Agility Trial ]",
	"AKC Suffix Titles","MFG","Master Gold FAST: - Requires the MFS plus twenty-five additional Master FAST class qualifying scores of 60 points or greater. - [ Agility Trial ]",
	"AKC Suffix Titles","MFP","Master Excellent FAST Preferred: - Master Excellent FAST Preferred: For a title, dog must earn 10 qualifying scores in Master FAST Preferred agility class under at least 2 different judges. - [ Agility Trial ]",
	"AKC Suffix Titles","MFPB","Master Bronze FAST Preferred: - Requires twenty-five Master FAST Preferred class qualifying scores of 60 points or greater. - [ Agility Trial ]",
	"AKC Suffix Titles","MFPC","Master Century FAST Preferred: - Requires the MFPG plus twenty-five additional Master FAST Preferred class qualifying scores of 60 points or greater. - [ Agility Trial ]",
	"AKC Suffix Titles","MFPG","Master Gold FAST Preferred: - Requires the MFPS plus twenty-five additional Master FAST Preferred class qualifying scores of 60 points or greater. - [ Agility Trial ]",
	"AKC Suffix Titles","MFPS","Master Silver FAST Preferred: - Requires the MFPB plus twenty-five additional Master FAST Preferred class qualifying scores of 60 points or greater. - [ Agility Trial ]",
	"AKC Suffix Titles","MFS","Master Silver FAST: - Requires the MFB plus twenty-five additional Master FAST class qualifying scores of 60 points or greater. - [ Agility Trial ]",
	"AKC Suffix Titles","MH","Master Hunter: - For a title, a dog must receive qualifying scores at 6 licensed or member tests. If the dog has already received a SH, the dog need only qualify 5 times. German Wirehaired Pointers must pass a Water Test at a licensed or member field trial or hunting test held by a Specialty Club for German Wirehaired Pointers or Weimaraners. - [ Hunting Test ]",
	"AKC Suffix Titles","MHA","Master Hunter Advanced - An advanced title is earned when a dog passes an additional 5 times with an average qualifying score of 8.0 or higher after earning its MH. - [ Hunting Test ]",
	"AKC Suffix Titles","MHR","Master Hunter Retriever: - THIS IS A HUNTING TEST TITLE AVAILABLE TO VERSATILE HUNTING BREEDS THAT ARE ALLOWED TO ENTER RETRIEVER HUNTING TESTS. A DOG MUST RECEIVE QUALIFYING SCORES AT 6 LICENSED OR MEMBER RETRIEVER HUNTING TESTS, OR 5 QUALIFYING SCORES IF THE DOG HAS ALREADY EARNED AN SHR TITLE. BREEDS ELIGIBLE FOR THIS TITLE ARE: AMERICAN WATER Spaniel, BOYKIN Spaniel, German Shorthaired Pointer, German Wirehaired Pointer, VIZSLA, WEIMARANER, WPG, SPINONE ITALIANO. - [ Hunting Test ]",
	"AKC Suffix Titles","MHU","Master Hunter Upland: - THIS IS A HUNTING TEST TITLE AVAILABLE TO VERSATILE HUNTING BREEDS THAT ARE ALLOWED TO ENTER A SPANIEL HUNTING TEST. A DOG MUST RECEIVE QUALIFYING SCORES AT 6 LICENSED OR MEMBER SPANIEL HUNTING TESTS OR 5 LICENSED OR MEMBER HUNTING TESTS IF THE DOG ALREADY HAS A SHU. BREEDS ELIGIBLE FOR THIS TITLE ARE: CURLY-COATED RETRIEVERS; FLAT-COATED RETRIEVERS; ; IRISH WATER SPANIELS; GOLDEN RETRIEVERS; LABRADOR RETRIEVERS; CHESAPEAKE BAY RETRIEVERS. - [ Hunting Test ]",
	"AKC Suffix Titles","MJB","Master Bronze Jumpers With Weaves: - Requires twenty-five Master Jumpers With Weaves class qualifying scores of 100. - [ Agility Trial ]",
	"AKC Suffix Titles","MJC","Master Century Jumpers With Weaves: - Requires the MJG plus twenty-five additional Master Jumpers With Weaves class qualifying scores of 100. - [ Agility Trial ]",
	"AKC Suffix Titles","MJG","Master Gold Jumpers With Weaves: - Requires the MJS plus twenty-five additional Master Jumpers With Weaves class qualifying scores of 100. - [ Agility Trial ]",
	"AKC Suffix Titles","MJP","Master Excellent Jumpers With Weaves Preferred: - For a title, dog must earn 10 qualifying scores in Master Jumpers With Weaves Preferred Agility class under at least 2 different judges. - [ Agility Trial ]",
	"AKC Suffix Titles","MJPB","Master Bronze Jumper With Weaves Preferred: - Requires twenty-five Master Jumpers With Weaves Preferred class qualifying scores of 100. - [ Agility Trial ]",
	"AKC Suffix Titles","MJPC","Master Century Jumper With Weaves Preferred: - Requires the MJPG plus twenty-five additional Master Jumpers With Weaves Preferred class qualifying scores of 100. - [ Agility Trial ]",
	"AKC Suffix Titles","MJPG","Master Gold Jumper With Weaves Preferred: - Requires the MJPS plus twenty-five additional Master Jumpers With Weaves Preferred class qualifying scores of 100. - [ Agility Trial ]",
	"AKC Suffix Titles","MJPS","Master Silver Jumper With Weaves Preferred: - Requires the MJPB plus twenty-five additional Master Jumpers With Weaves Preferred class qualifying scores of 100. - [ Agility Trial ]",
	"AKC Suffix Titles","MJS","Master Silver Jumpers With Weaves: - Requires the MJB plus twenty-five additional Master Jumpers With Weaves class qualifying scores of 100. - [ Agility Trial ]",
	"AKC Suffix Titles","MNH","Master National Hunter: - For a title, a dog must earn 3 passes at the Master Nationals. - [ Hunting Test ]",
	"AKC Suffix Titles","MX","Master Agility Excellent: - For a title, dog must earn 10 qualifying scores in Master Agility class under at least 2 different judges. - [ Agility Trial ]",
	"AKC Suffix Titles","MXB","Master Bronze Agility: - Requires twenty-five Master Agility class qualifying scores of 100. - [ Agility Trial ]",
	"AKC Suffix Titles","MXC","Master Century Agility: - Requires the MXG plus twenty-five additional Master Agility class qualifying scores of 100. - [ Agility Trial ]",
	"AKC Suffix Titles","MXF","Master Excellent FAST: - For a title, dog must earn 10 qualifying scores in Master FAST agility class under at least 2 different judges. - [ Agility Trial ]",
	"AKC Suffix Titles","MXG","Master Gold Agility: - Requires the MXS plus twenty-five additional Master Agility class qualifying scores of 100. - [ Agility Trial ]",
	"AKC Suffix Titles","MXJ","Master Excellent Jumpers With Weaves: - For a title, dog must earn 10 qualifying scores in Master Jumpers With Weaves Agility class under at least 2 different judges. - [ Agility Trial ]",
	"AKC Suffix Titles","MXP","Master Agility Excellent Preferred: - For a title, dog must earn 10 qualifying scores in Master Agility Preferred class under at least 2 different judges. - [ Agility Trial ]",
	"AKC Suffix Titles","MXPB","Master Bronze Agility Preferred: - Requires twenty-five Master Agility Preferred class qualifying scores of 100. - [ Agility Trial ]",
	"AKC Suffix Titles","MXPC","Master Century Agility Preferred: - Requires the MXPG plus twenty-five additional Master Agility Preferred class qualifying scores of 100. - [ Agility Trial ]",
	"AKC Suffix Titles","MXPG","Master Gold Agility Preferred: - Requires the MXPS plus twenty-five additional Master Agility Preferred class qualifying scores of 100. - [ Agility Trial ]",
	"AKC Suffix Titles","MXPS","Master Silver Agility Preferred: - Requires the MXPB plus twenty-five additional Master Agility Preferred class qualifying scores of 100. - [ Agility Trial ]",
	"AKC Suffix Titles","MXS","Master Silver Agility: - Requires the MXB plus twenty-five additional Master Agility class qualifying scores of 100. - [ Agility Trial ]",
	"AKC Suffix Titles","NA","Novice Agility: - For a title, dog must earn 3 qualifying scores in Novice A and/or B Agility class under at least 2 different judges. - [ Agility Trial ]",
	"AKC Suffix Titles","NAJ","Novice Agility Jumper: - For a title, dog must earn 3 qualifying scores in Novice A and/or B Jumpers With Weaves class under at least 2 different judges. - [ Agility Trial ]",
	"AKC Suffix Titles","NAP","Novice Agility Preferred: - For a title, dog must earn 3 qualifying scores in the Novice Agility Preferred class under at least 2 different judges. - [ Agility Trial ]",
	"AKC Suffix Titles","NF","Novice FAST: - For a title, dog must earn 3 qualifying scores in Novice A and/or B FAST agility class under at least 2 different judges. - [ Agility Trial ]",
	"AKC Suffix Titles","NFP","Novice FAST Preferred: - For a title, dog must earn 3 qualifying scores in Novice A and/or B FAST Preferred agility class under at least 2 different judges. - [ Agility Trial ]",
	"AKC Suffix Titles","NJP","Novice Jumpers With Weaves Preferred: - For a title, dog must earn 3 qualifying scores in the Novice Jumpers With Weaves Preferred class under at least 2 different judges. - [ Agility Trial ]",
	"AKC Suffix Titles","OA","Open Agility: - For a title, dog must earn 3 qualifying scores in Open Agility class under at least 2 different judges. - [ Agility Trial ]",
	"AKC Suffix Titles","OAJ","Open Agility Jumper: - For a title, dog must earn 3 qualifying scores in Open Jumpers With Weaves class under at least 2 different judges. - [ Agility Trial ]",
	"AKC Suffix Titles","OAP","Open Agility Preferred: - For a title, dog must earn 3 qualifying scores in Open Agility Preferred class under at least 2 different judges. - [ Agility Trial ]",
	"AKC Suffix Titles","OF","Open FAST: - For a title, dog must earn 3 qualifying scores in Open FAST agility class under at least 2 different judges. - [ Agility Trial ]",
	"AKC Suffix Titles","OFP","Open FAST Preferred: - For a title, dog must earn 3 qualifying scores in Open FAST Preferred agility class under at least 2 different judges. - [ Agility Trial ]",
	"AKC Suffix Titles","OGM","Obedience Grand Master: - The letters OGM may be added after a dog’s name when it has earned the 10th level of the Obedience Master title. Only one OGM title will be awarded. - [ Obedience Trial ]",
	"AKC Suffix Titles","OJP","Open Jumpers With Weaves Preferred: - For a title, dog must earn 3 qualifying scores in Open Jumpers With Weaves Preferred class under at least 2 different judges. - [ Agility Trial ]",
	"AKC Suffix Titles","OM","Obedience Master: - The letters OM may be added after a dog’s name when it has earned a total of 200 OM points awarded to dogs earning a 190 or better from the Open B and Utility B classes based on the schedule of points established by the AKC Board of Directors. The OM will be followed by a numeric designation indicating the number of times a dog has met the requirements of the OM title up to 10. - [ Obedience Trial ]",
	"AKC Suffix Titles","PAD","Premier Agility Dog: - Requires 25 qualifying scores in Premier Standard class, with 5 qualifying scores earned for placing in the top 25% of the dogs that competed in their jump height - [ Agility Trial ]",
	"AKC Suffix Titles","PADP","Premier Agility Dog Preferred: - Requires 25 qualifying scores in Premier Standard Preferred class, with 5 qualifying scores earned for placing in the top 25% of the dogs that competed in their jump height - [ Agility Trial ]",
	"AKC Suffix Titles","PAX","Preferred Agility Excellent: - For a title, a dog must achieve 20 double qualifying scores obtained from the Preferred Master Standard agility class and the Preferred Master Jumpers With Weaves class. Qualifying in both the Preferred Master Standard agility class and the Preferred Master Jumpers With Weaves class on the same day equals one (1) double qualifying score. - [ Agility Trial ]",
	"AKC Suffix Titles","PCD","Preferred Companion Dog: - The letters PCD may be added after a dog’s name when it has been certified by 2 different judges to have received qualifying scores in Preferred Novice classes at 3 licensed or member obedience trials. - [ Obedience Trial ]",
	"AKC Suffix Titles","PCDX","Preferred Companion Dog Excellent: - The letters PCDX may be added after the name of each dog that has been certified by 2 different judges to have received qualifying scores in Preferred Open classes at 3 licensed or member obedience trials. - [ Obedience Trial ]",
	"AKC Suffix Titles","PDB","Premier Agility Dog Bronze (begins with 2): - Requires PDC title plus 25 additional qualifying scores in the Premier Standard class with five qualifying scores earned for placing in the top 25% of the dogs that competed in their jump height. Note: There is no PDB; issuance begins with PDB2. - [ Agility Trial ]",
	"AKC Suffix Titles","PDBP","Premier Agility Dog Bronze Preferred (begins with 2): - Requires PDCP title plus 25 additional qualifying scores in the Premier Standard Preferred class with 5 qualifying scores earned for placing in the top 25% of the dogs that competed in their jump height. Note: There is no PDBP; issuance begins with PDB2P. - [ Agility Trial ]",
	"AKC Suffix Titles","PDC","Premier Agility Dog Century: - Requires PDG title plus 25 additional qualifying scores in the Premier Standard class, with 5 qualifying scores earned for being in the top 25% of the dogs that compete in their jump height. - [ Agility Trial ]",
	"AKC Suffix Titles","PDCP","Premier Agility Dog Century Preferred: - Requires PDGP title plus 25 additional qualifying scores in the Premier Standard Preferred class, with 5 qualifying scores earned for being in the top 25% of the dogs that compete in their jump height. - [ Agility Trial ]",
	"AKC Suffix Titles","PDG","Premier Agility Dog Gold: - Requires PDS title plus 25 additional qualifying scores in the Premier Standard class, with 5 qualifying scores earned for being in the 25% of the dogs that compete in their jump height. - [ Agility Trial ]",
	"AKC Suffix Titles","PDGP","Premier Agility Dog Gold Preferred: - Requires PDSP title plus 25 additional qualifying scores in the Premier Standard Preferred class, with 5 qualifying scores earned for being in the 25% of the dogs that compete in their jump height. - [ Agility Trial ]",
	"AKC Suffix Titles","PDS","Premier Agility Dog Silver: - Requires PAD title plus 25 additional qualifying scores in the Premier Standard class, with 5 qualifying scores earned for being in the top 25% of the dogs that compete in their jump height. - [ Agility Trial ]",
	"AKC Suffix Titles","PDSP","Premier Agility Dog Silver Preferred: - Requires PADP title plus 25 additional qualifying scores in the Premier Standard Preferred class, with 5 qualifying scores earned for being in the top 25% of the dogs that compete in their jump height. - [ Agility Trial ]",
	"AKC Suffix Titles","PJB","Premier Jumpers Dog Bronze (begins with 2): - Requires PJC title plus 25 additional qualifying scores in the Premier Jumpers class, with 5 qualifying scores earned for being in the top 25% of the dogs that compete in their jump height. Note: There is no PJB; title issuance begins with PJB2. - [ Agility Trial ]",
	"AKC Suffix Titles","PJBP","Premier Jumpers Dog Bronze Preferred (begins with 2): - Requires PJCP title plus 25 additional qualifying scores in the Premier Jumpers Preferred class, with 5 qualifying scores earned for being in the top 25% of the dogs that compete in their jump height. Note: There is no PJBP; title issuance begins with PJBP2. - [ Agility Trial ]",
	"AKC Suffix Titles","PJC","Premier Jumpers Dog Century: - Requires PJG title plus 25 additional qualifying scores in the Premier Jumpers class, with 5 qualifying scores earned for being in the top 25% of the dogs that compete in their jump height. - [ Agility Trial ]",
	"AKC Suffix Titles","PJCP","Premier Jumpers Dog Century Preferred: - Requires PJGP title plus 25 additional qualifying scores in the Premier Jumpers Preferred class, with 5 qualifying scores earned for being in the top 25% of the dogs that compete in their jump height. - [ Agility Trial ]",
	"AKC Suffix Titles","PJD","Premier Jumpers Dog: - Requires 25 qualifying scores in Premier Jumpers class, with 5 qualifying scores earned for placing in the top 25% of the dogs that competed in their jump height. - [ Agility Trial ]",
	"AKC Suffix Titles","PJDP","Premier Jumpers Dog Preferred: - Requires 25 qualifying scores in Premier Jumpers Preferred class, with 5 qualifying scores earned for placing in the top 25% of the dogs that competed in their jump height. - [ Agility Trial ]",
	"AKC Suffix Titles","PJG","Premier Jumpers Dog Gold: - Requires PJS title plus 25 additional qualifying scores in the Premier Jumpers class, with 5 qualifying scores earned for placing in the top 25% of the dogs that competed in their jump height. - [ Agility Trial ]",
	"AKC Suffix Titles","PJGP","Premier Jumpers Dog Gold Preferred: - Requires PJSP title plus 25 additional qualifying scores in the Premier Jumpers Preferred class, with 5 qualifying scores earned for placing in the top 25% of the dogs that competed in their jump height. - [ Agility Trial ]",
	"AKC Suffix Titles","PJS","Premier Jumpers Dog Silver: - Requires PJD title plus 25 additional qualifying scores in the Premier Jumpers class, with 5 qualifying scores earned for placing in the top 25% of the dogs that competed in their jump height. - [ Agility Trial ]",
	"AKC Suffix Titles","PJSP","Premier Jumpers Dog Silver Preferred: - Requires PJDP title plus 25 additional qualifying scores in the Premier Jumpers Preferred class, with 5 qualifying scores earned for placing in the top 25% of the dogs that competed in their jump height. - [ Agility Trial ]",
	"AKC Suffix Titles","PT","Pre-Trial Tested: - The American Kennel Club will issue a Pre-Trial Tested certificate to an eligible dog, and will permit the use of the letters PT after the name of a dog that has been certified by two different Judges to have qualified by passing two licensed or member club Pre-Trial tests. Dog may qualify twice in one day at the same event provided he/she is judged by different judges. - [ Herding Trial ]",
	"AKC Suffix Titles","PUDX","Preferred Utility Dog Excellent: - To Earn A Preferred Utility Dog Excellent Title, The Dog Must Have Received Qualifying Scores In Both Preferred Open And Preferred Utility At 10 Separate Licensed Or Member Obedience Trials. The Letters PUDX Will Be Followed By A Numeric Designation Indicating The Number Of Times A Dog Has Met The Requirements Of The PUDX Title As Defined In The Regulations. (PUDX2 For 20 Qualifying Scores, PUDX3 For 30 Qualifying Scores, PUDX4 For 40 Qualifying Scores, Etc.) - [ Obedience Trial ]",
	"AKC Suffix Titles","PUTD","Preferred Utility Dog: - The letters PUTD may be added after the name of each dog that has been certified by 2 different judges to have received qualifying scores in Preferred Utility classes at 3 licensed or member obedience trials. - [ Obedience Trial ]",
	"AKC Suffix Titles","RN","AKC Rally® Novice: - The letters RN may be added after a dog’s name when it has been certified by 2 different judges to have received qualifying scores in Novice classes at 3 licensed or member rally trials. - [ Rally Trial ]",
	"AKC Suffix Titles","RA","AKC Rally® Advanced: - The letters RA may be added after a dog’s name when it has been certified by 2 different judges to have received qualifying scores in Advanced classes at 3 licensed or member rally trials. - [ Rally Trial ]",
	"AKC Suffix Titles","RE","AKC Rally® Excellent: - The letters RE may be added after a dog’s name when it has been certified by 2 different judges to have received qualifying scores in Excellent classes at 3 licensed or member rally trials. - [ Rally Trial ]",
	"AKC Suffix Titles","#RAE","AKC Rally® Advanced Excellent: - To earn an RAE title, the dog must have earned qualifying scores in both Advanced B and Excellent B classes at 10 separate licensed or member rally trials. A numeric designation will indicate the number of times the dog has met the RAE requirements, i.e. RAE2, RAE3, etc. - [ Rally Trial ]",
	"AKC Suffix Titles","RI","AKC Rally® Intermediate: - The letters RI may be added after a dog’s name when it has - been certified by 2 different judges to have received qualifying - scores in the Intermediate class at 3 licensed or member rally trials. - [ Rally Trial ]",
	"AKC Suffix Titles","#RM","AKC Rally® Master: - The letters RM may be added after a dog’s name when it has - been certified by 2 different judges to have received qualifying - scores in the Master class at 10 licensed or member rally trials. - [ Rally Trial ]",
	"AKC Suffix Titles","SBA","Scent Work Buried Advanced: - Requires 3 qualifying runs in the Buried Advanced class. - [ Scent Work Trial ]",
	"AKC Suffix Titles","SBAE","Scent Work Buried Advanced Elite: - Requires 10 total qualifying runs in the Buried Advanced class. - [ Scent Work Trial ]",
	"AKC Suffix Titles","SBE","Scent Work Buried Excellent: - Requires 3 qualifying runs in the Buried Excellent class. - [ Scent Work Trial ]",
	"AKC Suffix Titles","SBEE","Scent Work Buried Excellent Elite: - Requires 10 total qualifying runs in the Buried Excellent class. - [ Scent Work Trial ]",
	"AKC Suffix Titles","SBM","Scent Work Buried Master: - Requires 3 qualifying runs in the Buried Master class. - [ Scent Work Trial ]",
	"AKC Suffix Titles","SBME","Scent Work Buried Master Elite: - Requires 10 total qualifying runs in the Buried Master class. - [ Scent Work Trial ]",
	"AKC Suffix Titles","SBN","Scent Work Buried Novice: - Requires 3 qualifying runs in the Buried Novice class. - [ Scent Work Trial ]",
	"AKC Suffix Titles","SBNE","Scent Work Buried Novice Elite: - Requires 10 total qualifying runs in the Buried Novice class. - [ Scent Work Trial ]",
	"AKC Suffix Titles","SC","Senior Courser: - 1) Must be eligible to enter the open stake. That requires the dog to have obtained at least one of the following: AKC Junior Courser title or American Kennel Club Field Champion title. 2) The hound must run with at least one other hound. 3) Must receive qualifying scores at four (4) AKC-licensed or member trials, under two different Judges or judging panels. - [ Lure Coursing ]",
	"AKC Suffix Titles","SCA","Scent Work Container Advanced: - Requires 3 qualifying runs in the Container Advanced class. - [ Scent Work Trial ]",
	"AKC Suffix Titles","SCAE","Scent Work Container Advanced Elite: - Requires 10 total qualifying runs in the Container Advanced class. - [ Scent Work Trial ]",
	"AKC Suffix Titles","SCE","Scent Work Container Excellent: - Requires 3 qualifying runs in the Container Excellent class. - [ Scent Work Trial ]",
	"AKC Suffix Titles","SCEE","Scent Work Container Excellent Elite: - Requires 10 total qualifying runs in the Container Excellent class. - [ Scent Work Trial ]",
	"AKC Suffix Titles","SCM","Scent Work Container Master: - Requires 3 qualifying runs in the Container Master class. - [ Scent Work Trial ]",
	"AKC Suffix Titles","SCME","Scent Work Cotnainer Master Elite: - Requires 10 total qualifying runs in the Container Master class. - [ Scent Work Trial ]",
	"AKC Suffix Titles","SCN","Scent Work Container Novice: - Requires 3 qualifying runs in the Container Novice class. - [ Scent Work Trial ]",
	"AKC Suffix Titles","SCNE","Scent Work Container Novice Elite: - Requires 10 total qualifying runs in the Container Novice class. - [ Scent Work Trial ]",
	"AKC Suffix Titles","SE","Senior Earthdog: - A dog must have a record of having qualified in the Senior Earthdog test at three (3) AKC licensed or member club tests under two different Judges. - [ Earthdog ]",
	"AKC Suffix Titles","SEA","Scent Work Exterior Advanced: - Requires 3 qualifying runs in the Exterior Advanced class. - [ Scent Work Trial ]",
	"AKC Suffix Titles","SEAE","Scent Work Exterior Advanced Elite: - Requires 10 total qualifying runs in the Exterior Advanced class. - [ Scent Work Trial ]",
	"AKC Suffix Titles","SEE","Scent Work Exterior Excellent: - Requires 3 qualifying runs in the Exterior Excellent class. - [ Scent Work Trial ]",
	"AKC Suffix Titles","SEEE","Scent Work Exterior Excellent Elite: - Requires 10 total qualifying runs in the Exterior Excellent class. - [ Scent Work Trial ]",
	"AKC Suffix Titles","SEM","Scent Work Exterior Master: - Requires 3 qualifying runs in the Exterior Master class. - [ Scent Work Trial ]",
	"AKC Suffix Titles","SEME","Scent Work Exterior Master Elite: - Requires 10 total qualifying runs in the Exterior Master class. - [ Scent Work Trial ]",
	"AKC Suffix Titles","SEN","Scent Work Exterior Novice: - Requires 3 qualifying runs in the Exterior Novice class. - [ Scent Work Trial ]",
	"AKC Suffix Titles","SENE","Scent Work Exterior Novice Elite: - Requires 10 total qualifying runs in the Exterior Novice class. - [ Scent Work Trial ]",
	"AKC Suffix Titles","SH","Senior Hunter: - For a title, a dog must receive qualifying scores at 5 licensed or member tests. If the dog has already received a JH, the dog need only qualify 4 times. German Wirehaired Pointers must pass a Water Test at a licensed or member field trial or hunting test held by a Specialty Club for German Wirehaired Pointers or Weimaraners. - [ Hunting Test ]",
	"AKC Suffix Titles","SHA","Senior Hunter Advanced: - An advanced title is earned when a dog passes an additional 5 times with an average qualifying score of 8.0 or higher after earning its SH. - [ Hunting Test ]",
	"AKC Suffix Titles","SHDA","Scent Work Handler Discrimination Advanced: - Requires 3 qualifying runs in the Handler Discrimination Advanced class. - [ Scent Work Trial ]",
	"AKC Suffix Titles","SHDAE","Scent Work Handler Discrimination Advanced Elite: - Requires 10 total qualifying runs in the Handler Discrimination Advanced class. - [ Scent Work Trial ]",
	"AKC Suffix Titles","SHDE","Scent Work Handler Discrimination Excellent: - Requires 3 qualifying runs in the Handler Discrimination Excellent class. - [ Scent Work Trial ]",
	"AKC Suffix Titles","SHDEE","Scent Work Handler Discrimination Excellent Elite: - Requires 10 total qualifying runs in the Handler Discrimination Excellent class. - [ Scent Work Trial ]",
	"AKC Suffix Titles","SHDM","Scent Work Handler Discrimination Master: - Requires 3 qualifying runs in the Handler Discrimination Master class. - [ Scent Work Trial ]",
	"AKC Suffix Titles","SHDME","Scent Work Handler Discrimination Master Elite: - Requires 10 total qualifying runs in the Handler Discrimination Master class. - [ Scent Work Trial ]",
	"AKC Suffix Titles","SHDN","Scent Work Handler Discrimination Novice: - Requires 3 qualifying runs in the Handler Discrimination Novice class. - [ Scent Work Trial ]",
	"AKC Suffix Titles","SHDNE","Scent Work Handler Discrimination Novice Elite: - Requires 10 total qualifying runs in the Handler Discrimination Novice class. - [ Scent Work Trial ]",
	"AKC Suffix Titles","SHR","Senior Hunter Retriever: - THIS IS A HUNTING TEST TITLE AVAILABLE TO VERSATILE HUNTING BREEDS THAT ARE ALLOWED TO ENTER RETRIEVER HUNTING TESTS. A DOG MUST RECEIVE QUALIFYING SCORES AT 5 LICENSED OR MEMBER RETRIEVER HUNTING TESTS, OR 4 QUALIFYING SCORES IF THE DOG HAS ALREADY EARNED A JHR TITLE. BREEDS ELIGIBLE FOR THIS TITLE ARE: AMERICAN WATER Spaniel, BOYKIN Spaniel, German Shorthaired Pointer, German Wirehaired Pointer, VIZSLA, WEIMARANER, WPG, SPINONE ITALIANO. - [ Hunting Test ]",
	"AKC Suffix Titles","SHU","Senior Hunter Upland: - THIS IS A HUNTING TEST TITLE AVAILABLE TO VERSATILE HUNTING BREEDS THAT ARE ALLOWED TO ENTER A SPANIEL HUNTING TEST. A DOG MUST RECEIVE QUALIFYING SCORES AT 5 LICENSED OR MEMBER SPANIEL HUNTING TESTS, OR 4 LICENSED OR MEMBER SPANIEL OF THE DOG ALREADY HAS A JHU . BREEDS ELIGIBLE FOR THIS TITLE ARE: CURLY-COATED RETRIEVERS; FLAT-COATED RETRIEVERS; IRISH WATER SPANIELS; GOLDEN RETRIEVERS; LABRADOR RETRIEVERS; CHESAPEAKE BAY RETRIEVERS. - [ Hunting Test ]",
	"AKC Suffix Titles","SIA","Scent Work Interior Advanced: - Requires 3 qualifying runs in the Interior Advanced class. - [ Scent Work Trial ]",
	"AKC Suffix Titles","SIAE","Scent Work Interior Advanced Elite: - Requires 10 total qualifying runs in the Interior Advanced class. - [ Scent Work Trial ]",
	"AKC Suffix Titles","SIE","Scent Work Interior Excellent: - Requires 3 qualifying runs in the Interior Excellent class. - [ Scent Work Trial ]",
	"AKC Suffix Titles","SIEE","Scent Work Interior Excellent Elite: - Requires 10 total qualifying runs in the Interior Excellent class. - [ Scent Work Trial ]",
	"AKC Suffix Titles","SIM","Scent Work Interior Master: - Requires 3 qualifying runs in the Interior Master class. - [ Scent Work Trial ]",
	"AKC Suffix Titles","SIME","Scent Work Interior Master Elite: - Requires 10 total qualifying runs in the Interior Master class. - [ Scent Work Trial ]",
	"AKC Suffix Titles","SIN","Scent Work Interior Novice: - Requires 3 qualifying runs in the Interior Novice class. - [ Scent Work Trial ]",
	"AKC Suffix Titles","SINE","Scent Work Interior Novice Elite: - Requires 10 total qualifying runs in the Interior Novice class. - [ Scent Work Trial ]",
	"AKC Suffix Titles","SWA","Scent Work Advanced: - Requires SCA, SIA, SEA, SBA titles. - [ Scent Work Trial ]",
	"AKC Suffix Titles","SWAE","Scent Work Advanced Elite: - Requires SCAE, SIAE, SEAE, SBAE titles. - [ Scent Work Trial ]",
	"AKC Suffix Titles","SWD","Scent Work Detective: - Requires 10 qualifying runs in the Detective class. - [ Scent Work Trial ]",
	"AKC Suffix Titles","SWE","Scent Work Excellent: - Requires SCE, SIE, SEE, SBE titles. - [ Scent Work Trial ]",
	"AKC Suffix Titles","SWEE","Scent Work Excellent Elite: - Requires SCEE, SIEE, SEEE, SBEE titles. - [ Scent Work Trial ]",
	"AKC Suffix Titles","SWM","Scent Work Master: - Requires SCM, SIM, SEM, SBM titles. - [ Scent Work Trial ]",
	"AKC Suffix Titles","SWME","Scent Work Master Elite: - Requires SCME, SIME, SEME, SBME titles. - [ Scent Work Trial ]",
	"AKC Suffix Titles","SWN","Scent Work Novice: - Requires SCN, SIN, SEN, SBN titles. - [ Scent Work Trial ]",
	"AKC Suffix Titles","SWNE","Scent Work Novice Elite: - Requires SCNE, SINE, SENE, SBNE titles. - [ Scent Work Trial ]",
	"AKC Suffix Titles","T2B","Time 2 Beat:M - To earn the T2B title, the dog must receive 15 qualifying scores from the regular Time 2 Beat class and 100 points based on the Time 2 Beat point schedule listed in the Regulations for Agility Trials. - [ Agility Trial ]",
	"AKC Suffix Titles","T2BP","Time 2 Beat Preferred: - To earn the T2BP title, the dog must receive 15 qualifying scores from the preferred Time 2 Beat class and 100 points based on the Time 2 Beat point schedule listed in the Regulations for Agility Trials. - [ Agility Trial ]",
	"AKC Suffix Titles","#TD","Tracking Dog: - Dog has been certified by two judges to have passed a licensed or member club TD test or any combined TD/TDU/TDX/VST. - [ Tracking Test ]",
	"AKC Suffix Titles","#TDU","Tracking Dog Urban: - Dog certified by two judges to have passed a licensed or member club TDU test or any combined test that offers the TDU test. - [ Tracking Test ]",
	"AKC Suffix Titles","#TDX","Tracking Dog Excellent: - Dog that has been certified by two judges to have passed a licensed or member club TDX, or any combined TD/TDU/TDX/VST tracking tests. - [ Tracking Test ]",
	"AKC Suffix Titles","THD","Therapy Dog Title: - Requires dogs to be certified/registered by an AKC-recognized therapy dog organization, and to have completed a minimum of 50 visits.",
	"AKC Suffix Titles","THDA","Therapy Dog Advanced: - Requires dogs to be certified/registered by an AKC-recognized therapy dog organization, and to have completed a minimum of 100 visits.",
	"AKC Suffix Titles","THDD","Distinguished Therapy Dog: - Requires dogs to be certified/registered by an AKC-recognized therapy dog organization, and to have completed a minimum of 400 visits.",
	"AKC Suffix Titles","THDN","Therapy Dog Novice: - Requires dogs to be certified/registered by an AKC-recognized therapy dog organization, and to have completed a minimum of 10 visits.",
	"AKC Suffix Titles","THDX","Therapy Dog Excellent: - Requires dogs to be certified/registered by an AKC-recognized therapy dog organization, and to have completed a minimum of 200 visits.",
	"AKC Suffix Titles","TKN","Novice Trick Dog: - The dog performs 10 skills from the Novice list. If a dog has a Canine Good Citizen (CGC) certificate or title on record at AKC, it can do 5 Novice tricks (CGC + 5) to earn the Novice title.",
	"AKC Suffix Titles","TKI","Intermediate Trick Dog: - The dog must have the Novice title, plus perform 10 Intermediate tricks.",
	"AKC Suffix Titles","TKA","Advanced Trick Dog: - The dog must have the Intermediate title, plus perform 10 tricks from the Advanced list.",
	"AKC Suffix Titles","TKP","Trick Dog Performer: - I​n this title, handlers perform a short routine with at least 10 tricks previously learned.",
	"AKC Suffix Titles","TKE","Trick Dog Elite Performer: - Testing of this truly elite trick dog level requires the dog to perform 10 tricks with at least 5 props and there must be a story.",
	"AKC Suffix Titles","TQX","Triple Q Excellent: - Requires the XF title. In order to acquire the Triple Q Excellent title, a dog must receive qualifying scores from the Master Standard Class, the Master Jumpers with Weaves Class and the Master FAST Class on the same day at 10 separate licensed agility trials. - [ Agility Trial ]",
	"AKC Suffix Titles","TQXP","Triple Q Excellent Preferred: - Requires the XFP title. In order to acquire the Triple Q Excellent Preferred title, a dog must receive qualifying scores from the Master Standard Preferred Class, the Master Jumpers with Weaves Preferred Class, and the Master FAST Preferred Class on the same day at 10 separate licensed agility trials. - [ Agility Trial ]",
	"AKC Suffix Titles","UD","Utility Dog: - The American Kennel Club will issue a Utility Dog certificate for each registered dog, that has been certified by 2 obedience trial judges as having received qualifying Utility scores at three licensed or member obedience trials. - [ Obedience Trial ]",
	"AKC Suffix Titles","#UDX","Utility Dog Excellent: - To earn a Utility Dog Excellent title, the dog must have received qualifying scores in both Open B and Utility B at 10 separate licensed or member obedience trials. The letters UDX will be followed by a numeric designation indicating the number of times a dog has met the requirements of the UDX title as defined in the Regulations. (UDX2 for 20 qualifying scores, UDX3 for 30 qualifying scores, UDX4 for 40 qualifying scores, etc.) - [ Obedience Trial ]",
	"AKC Suffix Titles","VCD1","Versatile Companion Dog 1: - Must complete CD, NA, NAJ, [TD or TDU] or CD, NAP, NJP, [TD or TDU]. - [ Obedience Trial / Agility Trial / Tracking Test ]",
	"AKC Suffix Titles","VCD2","Versatile Companion Dog 2: - Must complete CDX, OA, OAJ, [TD or TDU] or CDX, OAP, OJP, [TD or TDU]. - [ Obedience Trial / Agility Trial / Tracking Test ]",
	"AKC Suffix Titles","VCD3","Versatile Companion Dog 3: - Must Complete UD, AX, AXJ, TDX or UD, AXP, AJP, TDX. - [ Obedience Trial / Agility Trial / Tracking Test ]",
	"AKC Suffix Titles","VCD4","Versatile Companion Dog 4: - Must complete UDX, MX, MXJ, VST or UDX, MXP, MJP, VST. - [ Obedience Trial / Agility Trial / Tracking Test ]",
	"AKC Suffix Titles","VER","Versatility: - The letters VER may be added after a dog’s name when it has been certified by 2 different judges to have received qualifying scores in Versatility classes at 3 licensed or member obedience trials. - [ Obedience Trial ]",
	"AKC Suffix Titles","#VST","Variable Surface Tracking: - Dog that has been certified by two judges to have passed a licensed or member club Variable Surface Tracking test, or any combined TD/TDU/TDX/VST tracking tests. - [ Tracking Test ]",
	"AKC Suffix Titles","XF","Excellent FAST: - For a title, dog must earn 3 qualifying scores in Excellent A FAST agility class under at least 2 different judges. - [ Agility Trial ]",
	"AKC Suffix Titles","XFP","Excellent FAST Preferred: - For a title, dog must earn 3 qualifying scores in Excellent A FAST Preferred agility class under at least 2 different judges. - [ Agility Trial ]",
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
	"AKC Carting/Drafting Titles","CS","Carting Started - American Rottweiler Club",
	"AKC Carting/Drafting Titles","CI","Carting Intermediate - American Rottweiler Club",
	"AKC Carting/Drafting Titles","CX","Carting Excellent - American Rottweiler Club",
	"AKC Carting/Drafting Titles","CST","Carting Started Team - American Rottweiler Club",
	"AKC Carting/Drafting Titles","CIT","Carting Intermediate Team - American Rottweiler Club",
	"AKC Carting/Drafting Titles","CXT","Carting Excellent Team - American Rottweiler Club",
	"AKC Carting/Drafting Titles","NDD","Novice Draft Dog - American Bouvier des Flandres Club - Bernese Mountain Dog Club of America - Belgian Sheepdog Club of America (in BMDC events) - Briard Club of America - Greater Swiss Mountain Dog Club of America - Mastiff Club of America - Leonberger Club of America",
	"AKC Carting/Drafting Titles","DD","Draft Dog - American Bouvier des Flandres Club - Bernese Mountain Dog Club of America - Belgian Sheepdog Club of America (in BMDC events) - Briard Club of America - Greater Swiss Mountain Dog Club of America - Mastiff Club of America - Leonberger Club of America",
	"AKC Carting/Drafting Titles","NBDD","Novice Brace Draft Dog - American Bouvier des Flandres Club - Bernese Mountain Dog Club of America - Belgian Sheepdog Club of America (in BMDC events) - Briard Club of America - Greater Swiss Mountain Dog Club of America - Mastiff Club of America - Leonberger Club of America",
	"AKC Carting/Drafting Titles","BDD","Brace Draft Dog - American Bouvier des Flandres Club - Bernese Mountain Dog Club of America - Belgian Sheepdog Club of America (in BMDC events) - Briard Club of America - Greater Swiss Mountain Dog Club of America - Mastiff Club of America - Leonberger Club of America",
	"AKC Carting/Drafting Titles","DD","Draft Dog - St. Bernard Club of America",
	"AKC Carting/Drafting Titles","TDD","Team Draft Dog - St. Bernard Club of America - Leonberger Club of America",
	"AKC Working Dog Titles","BH","Basic Companion Dog - Belgian Malinois - Belgian Sheepdogs - Bouvier des Flandres - Doberman Pinschers - German Shepherds - Rottweilers",
	"AKC Working Dog Titles","FH1","Advanced Tracking - Bouvier des Flandres - German Shepherds - Doberman Pinschers - Rottweilers",
	"AKC Working Dog Titles","FH2","Superior Tracking - Bouvier des Flandres - German Shepherds - Doberman Pinschers - Rottweilers",
	"AKC Working Dog Titles","IPO1","International Novice Schutzhund",
	"AKC Working Dog Titles","IPO2","International Intermediate Schutzhund",
	"AKC Working Dog Titles","IPO3","International Master Level Schutzhund - Belgian Malinois - Bouvier des Flandres - German Shepherds - Doberman Pinschers - Rottweilers",
	"AKC Working Dog Titles","SCHH1","Novice Schutzhund",
	"AKC Working Dog Titles","SCHH2","Intermediate Schutzhund",
	"AKC Working Dog Titles","SCHH3","Master Level Schutzhund - Belgian Malinois - Bouvier des Flandres - German Shepherds - Doberman Pinschers - Rottweilers",
	"AKC Working Dog Titles","SCHHA","Novice Schutzhund A - Bouvier des Flandres - German Shepherds - Doberman Pinschers - Rottweilers",
	"AKC Working Dog Titles","TC","Temperament Certification - German Shepherd Dogs",
	"AKC Working Dog Titles","TT","Temperament Test - Akitas - Alaskan Malamutes - American Eskimos - American Hairless Terriers - American Staffordshire Terriers - Australian Cattle Dogs - Bedlington Terriers - Belgian Laekenois - Belgian Malinois - Belgian Sheepdogs - Belgian Tervuren - Berger Picards - Black Russian Terriers - Border Colies - Bouvier des Flandres - Bulldogs - Bull Terriers - Cane Corsi - Chinese Shar-Pei - Dutch Shepherds - German Pinschers - Giant Schnauzers - Great Danes - Great Pyrenees - Irish Red & White Setters - Kai Kens - Kuvaszok - Leonbergers - Mastiffs - Parson Russell Terriers - Rhodesian Ridgebacks - Rottweilers - Salukis - Schipperkes - Staffordshipre Bull Terriers - Standard Schnauzers - Welsh Terriers - West Highland White Terriers",
	"AKC Working Dog Titles","WDS1","Working Dog Sport 1",
	"AKC Working Dog Titles","WDS2","Working Dog Sport 2",
	"AKC Working Dog Titles","WDS3","Working Dog Sport 3 - Doberman Pinschers",
	"AKC North American Flyball Association (NAFA) Titles","FDCh","Flyball Dog Champion",
	"AKC North American Flyball Association (NAFA) Titles","FM","Flyball Master",
	"AKC North American Flyball Association (NAFA) Titles","ONYX","ONYX",
	"AKC Barn Hunt Association Titles","CZ8B","Crazy 8s Bronze",
	"AKC Barn Hunt Association Titles","CZ8S","Crazy 8s Silver",
	"AKC Barn Hunt Association Titles","CZ8G","Crazy 8s Gold",
	"AKC Barn Hunt Association Titles","CZ8P","Crazy 8s Platinum",
	"AKC Barn Hunt Association Titles","RATN","Novice Barn Hunt",
	"AKC Barn Hunt Association Titles","RATO","Open Barn Hunt",
	"AKC Barn Hunt Association Titles","RATS","Senior Barn Hunt",
	"AKC Barn Hunt Association Titles","RATM","Master Barn Hunt",
	"AKC Barn Hunt Association Titles","RATCh","Barn Hunt Champion",
	"AKC Barn Hunt Association Titles","RATChX","Barn Hunt Master Champion",
	"AKC North America Diving Dogs (NADD) Titles","DN","Dock Novice",
	"AKC North America Diving Dogs (NADD) Titles","DJ","Dock Junior",
	"AKC North America Diving Dogs (NADD) Titles","DS","Dock Senior",
	"AKC North America Diving Dogs (NADD) Titles","DM","Dock Master",
	"AKC North America Diving Dogs (NADD) Titles","DE","Dock Elite",
	"AKC North America Diving Dogs (NADD) Titles","DNA","Dock Novice Advanced",
	"AKC North America Diving Dogs (NADD) Titles","DJA","Dock Junior Advanced",
	"AKC North America Diving Dogs (NADD) Titles","DSA","Dock Senior Advanced",
	"AKC North America Diving Dogs (NADD) Titles","DMA","Dock Master Advanced",
	"AKC North America Diving Dogs (NADD) Titles","DEA","Dock Elite Advanced",
	"AKC North America Diving Dogs (NADD) Titles","DNX","Dock Novice Excellent",
	"AKC North America Diving Dogs (NADD) Titles","DJX","Dock Junior Excellent",
	"AKC North America Diving Dogs (NADD) Titles","DSX","Dock Senior Excellent",
	"AKC North America Diving Dogs (NADD) Titles","DMX","Dock Master Excellent",
	"AKC North America Diving Dogs (NADD) Titles","DEX","Dock Elite Excellent",
	"AKC North America Diving Dogs (NADD) Titles","AN","Air Retrieve Novice",
	"AKC North America Diving Dogs (NADD) Titles","AJ","Air Retrieve Junior",
	"AKC North America Diving Dogs (NADD) Titles","AS","Air Retrieve Senior",
	"AKC North America Diving Dogs (NADD) Titles","AM","Air Retrieve Master",
	"AKC North America Diving Dogs (NADD) Titles","AE","Air Retrieve Elite",
	"AKC North America Diving Dogs (NADD) Titles","ANA","Air Retrieve Novice Advanced",
	"AKC North America Diving Dogs (NADD) Titles","AJA","Air Retrieve Junior Advanced",
	"AKC North America Diving Dogs (NADD) Titles","ASA","Air Retrieve Senior Advanced",
	"AKC North America Diving Dogs (NADD) Titles","AMA","Air Retrieve Master Advanced",
	"AKC North America Diving Dogs (NADD) Titles","AEA","Air Retrieve Elite Advanced",
	"AKC North America Diving Dogs (NADD) Titles","ANX","Air Retrieve Novice Excellent",
	"AKC North America Diving Dogs (NADD) Titles","AJX","Air Retrieve Junior Excellent",
	"AKC North America Diving Dogs (NADD) Titles","ASX","Air Retrieve Senior Excellent",
	"AKC North America Diving Dogs (NADD) Titles","AMX","Air Retrieve Master Excellent",
	"AKC North America Diving Dogs (NADD) Titles","AEX","Air Retrieve Elite Excellent",
	"AKC UpDog Challenge (Disc Dog) Titles","DDB","Disc Dog Bronze",
	"AKC UpDog Challenge (Disc Dog) Titles","DDBE","Disc Dog Bronze Elite",
	"AKC UpDog Challenge (Disc Dog) Titles","DDG","Disc Dog Gold",
	"AKC UpDog Challenge (Disc Dog) Titles","DDGE","Disc Dog Gold Elite",
	"AKC UpDog Challenge (Disc Dog) Titles","DDP","Disc Dog Platinum",
	"AKC UpDog Challenge (Disc Dog) Titles","DDPE","Disc Dog Platinum Elite",
	"AKC UpDog Challenge (Disc Dog) Titles","DDS","Disc Dog Silver",
	"AKC UpDog Challenge (Disc Dog) Titles","DDSE","Disc Dog Silver Elite",
	"AKC UpDog Challenge (Disc Dog) Titles","DDU","Disc Dog Unobtanium",
	"AKC UpDog Challenge (Disc Dog) Titles","DDUE","Disc Dog Unobtanium Elite",
]


// test data: 
//let titles =  ["CD", "thing", "REX", "RNX", "RNC", "5839", "AKC", "RN", "CGC", "TKI", "test1", "**ETD**", "**ATD-M**", "ITD-M"];

let input = prompt("Put in titles with spaces. (Example: ​CD REX RNX RNC AKC RN CGC TKI)").replace(/[^a-z0-9 -]/gi, '').toUpperCase();
let titles = input.split(" ");
let output = "";
let outputTable = [];
let noDescription = "";
console.log(`Getting descriptions for ${titles}`);

let titlesHeader = document.getElementById("titlesHeader");
let instructions = document.getElementById("instructions");
let noTitles = document.getElementById("noTitles");
let tableTitles = document.getElementById("tableTitles");

function compareValues(a, b) {
	// for table sorting
	// https://stackoverflow.com/questions/55462632/javascript-sort-table-column-on-click
	// return -1/0/1 based on what you "know" a and b are here.
	return (a<b) ? -1 : (a>b) ? 1 : 0;
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
	rows.sort( (r1,r2) => {
	  // get each row's relevant column
	  let t1 = r1.querySelector(qs);
	  let t2 = r2.querySelector(qs);
  
	  // and then effect sorting by comparing their content:
	  return compareValues(t1.textContent,t2.textContent);
	});
  
	// and then the magic part that makes the sorting appear on-page:
	rows.forEach(row => table.appendChild(row));
}

tableTitles.querySelectorAll(`th`).forEach((th, position) => {
	th.addEventListener(`click`, evt => sortTable(tableTitles, position + 1));
});

noTitles.querySelectorAll(`th`).forEach((th, position) => {
	th.addEventListener(`click`, evt => sortTable(noTitles, position + 1));
});

function descriptions(string) {
  let description = "";

  for (let i = 0; i < titleDescriptions.length; i++) {
    if(string == titleDescriptions[i]){
      description += `${titleDescriptions[i - 1]} - ${titleDescriptions[i]} - ${titleDescriptions[i + 1]} \n`;
	  outputTable.push({Type:titleDescriptions[i - 1], Name:titleDescriptions[i], Description:titleDescriptions[i + 1]});
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
  } else {
    console.error(`No description for ${string}`);

	let row = noTitles.insertRow();
	let cell1 = row.insertCell(0);
	cell1.innerHTML = `${string}`;
  }
}

titles.map(descriptions);

consoleOutput = 0; // 0 = console, 1 = table

console.log("Table Len:" + noTitles.rows.length);

// sortTable(noTitles, 1);

// sortTable(tableTitles, 2);
// sortTable(tableTitles, 1);

if(noTitles.rows.length > 1){
	noTitles.removeAttribute("hidden");
}else{
	noTitles.setAttribute("hidden", "hidden");
}

if(tableTitles.rows.length > 1){
	titlesHeader.removeAttribute("hidden");
	tableTitles.removeAttribute("hidden");
	instructions.innerText = "Click table headers to sort by that column:";
}else{
	titlesHeader.setAttribute("hidden", "hidden");
	tableTitles.setAttribute("hidden", "hidden");
	instructions.innerText = "No titles were found.";
}

if (consoleOutput == 0){
	console.log(output);
}else{
	console.table(outputTable, ["Type","Name", "Description"]);
}