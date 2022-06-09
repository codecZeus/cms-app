export class CustomerDetails {
  id: number | undefined;
  customerName: string | undefined;
  customerNumber: number | undefined;
  customerCID: number | undefined;
  simPurchasedDateTime: string | undefined;
}
export const CUSTOMER_DETAIL: CustomerDetails[] = [
  {
    id: 1,
    customerName: 'Test Customer 1',
    customerNumber: 77000011,
    customerCID: 10101010101,
    simPurchasedDateTime: '01:01:2022:09:00',
  },
  {
    id: 2,
    customerName: 'Test Customer 2',
    customerNumber: 77070000,
    customerCID: 10101010101,
    simPurchasedDateTime: '19:11:2020:16:47',
  },
  {
    id: 3,
    customerName: 'Test Customer 3',
    customerNumber: 77700000,
    customerCID: 11101010101,
    simPurchasedDateTime: '01:03:2019:18:00',
  },
  {
    id: 4,
    customerName: 'Test Customer 4',
    customerNumber: 77044000,
    customerCID: 10111010101,
    simPurchasedDateTime: '11:04:2020:12:56',
  },
  {
    id: 5,
    customerName: 'Test Customer 5',
    customerNumber: 77000700,
    customerCID: 10111010101,
    simPurchasedDateTime: '10:05:2017:15:15',
  },
  {
    id: 6,
    customerName: 'Test Customer 6',
    customerNumber: 77000711,
    customerCID: 10111010101,
    simPurchasedDateTime: '14:03:2021:13:11',
  },
  {
    id: 7,
    customerName: 'Test Customer 7',
    customerNumber: 770006300,
    customerCID: 10111010101,
    simPurchasedDateTime: '10:04:2022:15:10',
  },
];

export class ServiceDetails {
  id: number | undefined;
  gsmVoice: string | undefined;
  sms: string | undefined;
  thereG: string | undefined;
  fourG: string | undefined;
  fiveG: string | undefined;
  eTeeru: string | undefined;
}
export const SERVICE_DETAIL: ServiceDetails[] = [
  {
    id: 1,
    gsmVoice: 'Activated',
    sms: 'Activated',
    thereG: 'Activated',
    fourG: 'Deactivated',
    fiveG: 'Deactivated',
    eTeeru: 'Deactivated',
  },
  {
    id: 2,
    gsmVoice: 'Activated',
    sms: 'Activated',
    thereG: 'Activated',
    fourG: 'Deactivated',
    fiveG: 'Deactivated',
    eTeeru: 'Deactivated',
  },
  {
    id: 3,
    gsmVoice: 'Activated',
    sms: 'Activated',
    thereG: 'Activated',
    fourG: 'Deactivated',
    fiveG: 'Deactivated',
    eTeeru: 'Deactivated',
  },
  {
    id: 4,
    gsmVoice: 'Activated',
    sms: 'Activated',
    thereG: 'Activated',
    fourG: 'Deactivated',
    fiveG: 'Deactivated',
    eTeeru: 'Deactivated',
  },
  {
    id: 5,
    gsmVoice: 'Activated',
    sms: 'Activated',
    thereG: 'Activated',
    fourG: 'Deactivated',
    fiveG: 'Deactivated',
    eTeeru: 'Deactivated',
  },
  {
    id: 6,
    gsmVoice: 'Activated',
    sms: 'Activated',
    thereG: 'Activated',
    fourG: 'Deactivated',
    fiveG: 'Deactivated',
    eTeeru: 'Deactivated',
  },
  {
    id: 7,
    gsmVoice: 'Activated',
    sms: 'Activated',
    thereG: 'Activated',
    fourG: 'Deactivated',
    fiveG: 'Deactivated',
    eTeeru: 'Deactivated',
  },
];
/**
 * @description This is for rest service which is used to setup API
 */
export enum RestMethods {
  POST = 'POST',
  GET = 'GET',
  PUT = 'PUT',
}
