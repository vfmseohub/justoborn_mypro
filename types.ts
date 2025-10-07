
export type Page = 'Dashboard' | 'Settings' | 'Media' | 'Users' | 'Analytics';

export interface NavItemType {
  id: Page;
  label: string;
  icon: string;
}
