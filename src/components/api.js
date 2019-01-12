module.exports = () => {
  return process.env.NODE_ENV === "development" ?
    {
      "TS_110kV" : "../../data/TS_110kV.json",
      "TS_10kV" : "../../data/TS_10kV.json",
      "site1" : "../../data/site1.json",
      "energyUseUnit": "../../data/energyUseUnit.json",
      "energyUseEqu": "../../data/energyUseEqu.json",
      "energySupply": "../data/energySupply.json",
      "T1": "T1_data",
      "T2out": "T2out_data",
      "l1A": "l1A_data",
      "l1C": "l1C_data",
      "l1B":"l1B_data",
      "l2A":"l2A_data",
      "l3A":"l3A_data",
      "l4A":"l4A_data",
      "l4B":"l4B_data"
    }
    :
    {
      // "TS_110kV" : "feign/getPowerDatas?big_type=powerone",
      "TS_110kV" : "../../data/TS_110kV.json",
      "TS_10kV" : "feign/getPowerDatas?big_type=powertwo",
      "site1" : "feign/getPowerDatas?big_type=powerthree",
      "energyUseUnit": "feign/getOrgData",
      "energyUseEqu": "feign/getEnergyList",
      "energySupply": "../data/energySupply.json",
      "T1": "T1_data",
      "T2out": "T2out_data",
      "l1A": "l1A_data",
      "l1C": "l1C_data",
      "l1B":"l1B_data",
      "l2A":"l2A_data",
      "l3A":"l3A_data",
      "l4A":"l4A_data",
      "l4B":"l4B_data"
    }
};
