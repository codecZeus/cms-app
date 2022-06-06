import { Registration } from '../../vis/shared/model/model';
import { routes } from './routes.enum';
export const MASTER_USER_ROUTES: MasterUserRoute[] = [
  {
    route: routes.SPECIES,
    name: 'Species',
  },
  {
    route: routes.SKINCONDITION,
    name: 'Animal skin conditions',
  },
  {
    route: routes.CATCHINGMETHOD,
    name: 'Catching Method',
  },
  {
    route: routes.DISEASESAMPLETYPE,
    name: 'Disease Sample Type',
  },
  {
    route: routes.AGEGROUP,
    name: 'Age Group for Mass Dog',
  },
  {
    route: routes.TYPEOFTEST,
    name: 'Animal Disease Test Type',
  },
  {
    route: routes.ADMINROUTE,
    name: 'Route of Admin',
  },
  {
    route: routes.REACTION,
    name: 'Immunization Reactions',
  },
  {
    route: routes.TYPEOFTEST,
    name: 'Animal Disease Test Type',
  },
  {
    route: routes.CLINICALTREAT,
    name: 'Clinical Treatment Procedures',
  },
  {
    route: routes.FARMING,
    name: 'Farming System',
  },
  {
    route: routes.VACCINETYPE,
    name: 'Vaccine Type',
  },

  {
    route: routes.FREQUEENCY,
    name: 'Frequency',
  },
  {
    route: routes.BREEDMAPPING,
    name: 'Pet Breed',
  },
  {
    route: routes.BREED,
    name: 'Breed',
  },
  {
    route: routes.DISEASES,
    name: 'Disease',
  },
];

export interface MasterUserRoute {
  route: routes;
  name: string;
}

export const PET_MANAGEMENTS: PetManagement[] = [
  {
    route: routes.PETREGISTRATION,
    name: 'Registration',
  },
  {
    route: routes.PETRENEWAL,
    name: 'Renewal',
  },
  {
    route: routes.OWNERTRANSFER,
    name: 'Ownership Transfer',
  },
  {
    route: routes.PETINFORMATION,
    name: 'Information',
  },
];
export interface PetManagement {
  route: routes;
  name: string;
}

export const DOG_MANAGEMENTS: DogManagement[] = [
  // {
  //   route: routes.DOGREGISTRATION,
  //   name: ' Dog individual',
  // },
  {
    route: routes.DOGVACCINATION,
    name: ' Dog Vaccination Management (DVM)',
  },
  {
    route: routes.DOGSTERILIZATION,
    name: ' Dog Population Management (DPM)',
  },
];

export interface DogManagement {
  route: routes;
  name: string;
}

export const USER_MANAGEMENTS: UserManagement[] = [
  {
    route: routes.CREATECUSTOMER,
    name: ' Create User',
  },
  // {
  //   route:routes.DOGVACCINATION,
  //  name : ' Dog Vaccination',
  // },
];

export interface UserManagement {
  route: routes;
  name: string;
}
export const DISEASE_OUTBREAK: DiseaseOutbreak[] = [
  {
    route: routes.FLASHREPORT,
    name: ' Flash Report',
  },
  {
    route: routes.FOLLOWUP,
    name: ' Follow-up Report',
  },
];
export interface DiseaseOutbreak {
  route: routes;
  name: string;
}
