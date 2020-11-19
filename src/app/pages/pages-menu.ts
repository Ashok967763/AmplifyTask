import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'E-commerce',
    icon: 'shopping-cart-outline',
    link: '/pages/dashboard',
    home: true,
  },
  {
    title: 'Activity',
    icon: 'lock-outline',
    children: [
      {
        title: 'Authorizations',
        link: '/pages/dashboard',
      },
      {
        title: 'Charging Sessions',
        link: '/pages/dashboard',
      }
    ],
  },
  {
    title: 'Assets',
    icon: 'layout-outline',
    children: [
      {
        title: 'Charge Points',
        link: '/pages/dashboard',
      },
      {
        title: 'Charging Zones',
        link: '/pages/dashboard',
      },
      {
        title: 'Locations',
        link: '/pages/dashboard',
      },
      {
        title: 'Location Images',
        link: '/pages/dashboard',
      },
    ],
  },
  {
    title: 'CRM',
    icon: 'edit-2-outline',
    children: [
      {
        title: 'Users',
        link: '/pages/dashboard',
      },
      {
        title: 'RFID Tags',
        link: '/pages/dashboard',
      }
    ],
  },
  {
    title: 'Partners',
    icon: 'keypad-outline',
    link: '/pages/ui-features',
    children: [
      {
        title: 'Partners',
        link: '/pages/dashboard',
      },
      {
        title: 'Partner Contracts',
        link: '/pages/dashboard',
      }
    ],
  },
  {
    title: 'Analytics',
    icon: 'browser-outline',
    children: [
      {
        title: 'Reports',
        link: '/pages/ui-features',
      },
      {
        title: 'SigFox Data',
        link: '/pages/ui-features',
      }
    ],
  },
  {
    title: 'Configuration',
    icon: 'message-circle-outline',
    children: [
      {
        title: 'Admin Accounts',
        link: '/pages/ui-features',
      },
      {
        title: 'Company Details',
        link: '/pages/ui-features',
      },
      {
        title: 'Change Password',
        link: '/pages/ui-features',
      }
    ],
  }
  
];
