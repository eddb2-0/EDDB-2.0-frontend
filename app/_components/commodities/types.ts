export type CommodityForm = {
  commodityId: {
    value: string;
  };
  system?: string;
  includeOrbital?: boolean;
  includePlanetary?: boolean;
  includeOdyssey?: boolean;
  includeFleetCarriers?: boolean;
  maxLandingPadSize: string;
  minSupply: number;
  maxSupply: number;
  minDemand: number;
  maxDemand: number;
};
