export interface UFData {
  uf: string;
  total_expenses: number;
}

export interface UFDataWrapper {
  data: UFData[];
  year: string;
}

export interface PartyData {
  party: string;
  senator_ids: string[];
  total_expenses: number;
  total_per_senator: number;
}

export interface PartyDataWrapper {
  data: PartyData[];
  year: string;
}
