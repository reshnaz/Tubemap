export default {
  "title": "Intelligent Investment Ops Health Dashboard",
  "stations": [
    {"label":"Rimes Start Trigger","lines":["Rimes File Acc Trail"]},    
    {"label":"Rimes File collector","lines":["Rimes File Acc Trail"]},
    {"label":"Rimes File watcher","lines":["Rimes File Acc Trail"]},
    {"label":"BBG Start Trigger","lines":["BBG File Acc Trail"]},
    {"label":"BBG File collector","lines":["BBG File Acc Trail"]},
    {"label":"BBG File watcher","lines":["BBG File Acc Trail"]},
    {"label":"FTP File Loading Area","lines":["Rimes File Acc Trail","BBG File Acc Trail", "Market Index Trail"]},   
    {"label":"ODS Stg Loading station","lines":["Market Index Trail"]},
    {"label":"ODS TStg Loading station","lines":["Market Index Trail"]},
    {"label":"Equity Consumer 1 trigger","lines":["Equity Consumer 1"]},
    {"label":"Equity Consumer 2 trigger","lines":["Equity Consumer 2"]},
    {"label":"ODS Loading station","lines":["Equity Consumer 1","Equity Consumer 2","Market Index Trail","Custom Index Trail"]},
    {"label":"WH to ODS Loading station","lines":["Custom Index Trail"]},
    {"label":"WH Stg Loading station","lines":["Market Index Trail"]},
    {"label":"WH TStg Loading station","lines":["Market Index Trail"]},      
    {"label":"Custom Index PreCheck","lines":["Custom Index Trail"]}, 
    {"label":"Custom Engine","lines":["Custom Index Trail"]},
    {"label":"WH Loading station","lines":["Market Index Trail","Custom Index Trail","PDS Consumer"]},
    {"label":"PDS File Generator","lines":["PDS Consumer"]},
    {"label":"PDS Outbound","lines":["PDS Consumer"]}
  ]
}

