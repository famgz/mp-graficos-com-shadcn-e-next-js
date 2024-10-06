export interface UfData {
  uf: string;
  total_expenses: number;
}

export interface UfWrapper {
  data: UfData[];
  year: string;
}
