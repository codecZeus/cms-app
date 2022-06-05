import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SideNavService } from '../side-nav/side-nav.service';
import { RegistrationComponent } from './individual/components/registration/registration.component';
import { marker } from '@biesbjerg/ngx-translate-extract-marker';
import { VisComponent } from './shared/components/vis.component';
import { PetRegistrationComponent } from './pet-management/component/pet-registration/pet-registration.component';
import { PetRenewalComponent } from './pet-management/component/pet-renewal/pet-renewal.component';
import { PetInformationComponent } from './pet-management/component/pet-information/pet-information.component';
import { OwnershipTransferComponent } from './pet-management/component/ownership-transfer/ownership-transfer.component';
import { MassDogVaccicationComponent } from './dog-management/components/mass-dog-vaccication/mass-dog-vaccication.component';
import { DogSterilizationComponent } from './dog-management/components/dog-sterilization/dog-sterilization.component';
import { TreatmentComponent } from './individual/components/treatment/treatment.component';
import { SearchComponent } from './search/search/search.component';
import { FlashReportComponent } from './disease-outbreak/components/flash-report/flash-report.component';
import { FollowUpReportComponent } from './disease-outbreak/components/follow-up-report/follow-up-report.component';
import { MassRegistrationComponent } from './mass/components/mas-registration/mass-registration.component';

const routes: Routes = [
  SideNavService.childRoutes([
    { path: '', redirectTo: '/vis', pathMatch: 'full' },
    { path: 'vis', component: VisComponent, data: { title: marker('vis') } },
    { path: 'registration', component: RegistrationComponent, data: { title: marker('Registration') } },
    { path: 'treatment+category', component: TreatmentComponent, data: { title: marker('Treatment') } },
    { path: 'search', component: SearchComponent, data: { title: marker('Search') } },
    { path: 'petRegistration', component: PetRegistrationComponent, data: { title: marker('petRegistration') } },
    { path: 'petRenewal', component: PetRenewalComponent, data: { title: marker('petRenewal') } },
    { path: 'petInformation', component: PetInformationComponent, data: { title: marker('petInformation') } },
    { path: 'ownerTransfer', component: OwnershipTransferComponent, data: { title: marker('ownerTransfer') } },
    { path: 'mass', component: MassRegistrationComponent, data: { title: marker('mass registration') } },
    { path: 'dogVaccination', component: MassDogVaccicationComponent, data: { title: marker('DogVaccination') } },
    { path: 'dogSterilization', component: DogSterilizationComponent, data: { title: marker('DogSterilization') } },
    { path: 'flashReport', component: FlashReportComponent, data: { title: marker('flash') } },
    { path: 'followUp', component: FollowUpReportComponent, data: { title: marker('follow') } },
  ]),
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VisRoutingModule {}
