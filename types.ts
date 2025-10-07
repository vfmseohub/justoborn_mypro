
export type Page = 'Dashboard ( Anees )' | 'Settings' | 'Media' | 'Users' | 'Analytics';

export interface NavItemType {
  id: Page;
  label: string;
  icon: string;
}
