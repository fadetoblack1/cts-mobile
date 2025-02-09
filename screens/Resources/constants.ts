// Components
import { CCG, Travel, Mental, Cancer, Child, Support, Info, Nutrition, Treatment } from './components/icons';

// Module constants
export const RESOURCES_REDUCER = 'RESOURCES';
export const RESOURCES_PREFIX = 'RESOURCES';
export const RESOURCES_SAGA = 'RESOURCES_SAGA';
export const RESOURCE_CATEGORIES = [
  {
    key: 0,
    name: 'CCG',
    categories: [
      'CCG'
    ],
    icon: CCG,
  },
  {
    key: 1,
    name: 'Benefits & travel',
    categories: [
      'BENEFITS'
    ],
    icon: Travel,
  },
  {
    key: 2,
    name: 'Mental health & wellbeing',
    categories: [
      'MENTAL_HEALTH',
      'WELLBEING'
    ],
    icon: Mental,
  },
  {
    key: 3,
    name: 'Cancer specific',
    categories: [
      'DISEASE_SPECIFIC'
    ],
    icon: Cancer,
  },
  {
    key: 4,
    name: 'Child & Adolescents',
    categories: [
      'CHILD',
      'TEENAGER'
    ],
    icon: Child,
  },
  {
    key: 5,
    name: 'Support & Care',
    categories: [
      'CARE',
      'SUPPORT'
    ],
    icon: Support,
  },
  {
    key: 6,
    name: 'Patient information',
    categories: [
      'PATIENT_INFORMATION_LEAFLET'
    ],
    icon: Info,
  },
  {
    key: 7,
    name: 'Nutrition',
    categories: [
      'NUTRITION'
    ],
    icon: Nutrition,
  },
  {
    key: 8,
    name: 'Treatment & side effects',
    categories: [
      'TREATMENT',
      'SIDE_EFFECT'
    ],
    icon: Treatment,
  }
];

// Action types
export const GET_RESOURCES = `${RESOURCES_PREFIX}/GET_RESOURCES`;
export const SET_RESOURCES = `${RESOURCES_PREFIX}/SET_RESOURCES`;

// State
export const RESOURCES = 'RESOURCES';
