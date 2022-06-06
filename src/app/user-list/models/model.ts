export interface Staff {
  staffName: string;
  email: string;
  status: string;
}

export interface Task {
  agencyName: string;
  letterNo: string;
  letterDate: string;
  subject: string;
  senderName: string;
  fileCategoryName: string;
  receiptNo: string;
  caseStatus: string;
  letterStatus: string;
}

export interface StatData {
  total: number;
}

export interface SearchParams {
  animalId: number;
  animalName: string;
  earTag: string;
  microchipNo: string;
  ownerCID: number;
  petRegistration: number;
}

// eslint-disable-next-line @typescript-eslint/no-namespace
declare namespace namespace {
  export interface System {
    id: number;
    systemName: string;
    createdOn: string;
    createdBy: string;
    updatedOn: string;
    updatedBy: string;
  }

  export interface Condition {
    id: number;
    conditions: string;
    system: System;
    createdOn: string;
    createdBy: number;
    updatedOn: string;
    updatedBy: number;
  }

  export interface Species {
    id: number;
    speciesName: string;
    conditions: Condition[];
    createdOn: string;
    createdBy: number;
    updatedOn: string;
    updatedBy: number;
  }
  export interface Route {
    id: number;
    routeName: string;
    createdOn: string;
    createdBy: string;
    updatedOn: string;
    updatedBy: number;
  }
}

export class SearchResult {}
