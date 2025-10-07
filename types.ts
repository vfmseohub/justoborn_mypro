
export type Page = 'Dashboardsts' | 'Settings' | 'Media' | 'Users' | 'Analytics';

export interface NavItemType {
  id: Page;
  label: string;
  icon: string;
}
