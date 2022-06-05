import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VisRoutingModule } from './vis-routing.module';
import { RegistrationComponent } from './individual/components/registration/registration.component';
import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from '../@shared';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VisComponent } from './shared/components/vis.component';
import { PetRegistrationComponent } from './pet-management/component/pet-registration/pet-registration.component';
import { PetRenewalComponent } from './pet-management/component/pet-renewal/pet-renewal.component';
import { OwnershipTransferComponent } from './pet-management/component/ownership-transfer/ownership-transfer.component';
import { PetInformationComponent } from './pet-management/component/pet-information/pet-information.component';
import { MassDogVaccicationComponent } from './dog-management/components/mass-dog-vaccication/mass-dog-vaccication.component';
import { DogSterilizationComponent } from './dog-management/components/dog-sterilization/dog-sterilization.component';
import { TreatmentComponent } from './individual/components/treatment/treatment.component';
import { TreatmentDetailComponent } from './mass/components/treatment-detail/treatment-detail.component';
import { MassVaccinationComponent } from './mass/components/mass-vaccination/mass-vaccination.component';
import { MassRegistrationComponent } from './mass/components/mas-registration/mass-registration.component';
import { FlashReportComponent } from './disease-outbreak/components/flash-report/flash-report.component';
import { FollowUpReportComponent } from './disease-outbreak/components/follow-up-report/follow-up-report.component';
import { EpidemiologyComponent } from './disease-outbreak/components/epidemiology/epidemiology.component';
import { SterilizationComponent } from './individual/components/sterilization/sterilization.component';
import { ClinicalComponent } from './individual/components/clinical/clinical.component';
import { DewormingComponent } from './individual/components/deworming/deworming.component';
import { VaccinationComponent } from './individual/components/vaccination/vaccination.component';
import { MassDewormingComponent } from './mass/components/mass-deworming/mass-deworming.component';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { OtherCaseComponent } from './disease-outbreak/components/other-case/other-case.component';
import { PoultryCaseComponent } from './disease-outbreak/components/poultry-case/poultry-case.component';

@NgModule({
  declarations: [
    RegistrationComponent,
    VisComponent,
    TreatmentComponent,
    PetRegistrationComponent,
    PetRenewalComponent,
    OwnershipTransferComponent,
    PetInformationComponent,
    MassRegistrationComponent,
    MassDogVaccicationComponent,
    DogSterilizationComponent,
    TreatmentDetailComponent,
    FlashReportComponent,
    FollowUpReportComponent,
    EpidemiologyComponent,
    VaccinationComponent,
    DewormingComponent,
    SterilizationComponent,
    ClinicalComponent,
    MassVaccinationComponent,
    MassDewormingComponent,
    VaccinationComponent,
    OtherCaseComponent,
    PoultryCaseComponent,
  ],
  imports: [
    CommonModule,
    TranslateModule,
    SharedModule,
    FlexLayoutModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    VisRoutingModule,
    ScrollingModule,
  ],
  exports: [TreatmentComponent],
})
export class VisModule {}
