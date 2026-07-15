export type AdminTab = 'users' | 'content' | 'complaints' | 'configurations';

export interface Report {
   id: string;
   postId: string;
   reason: string;
   reporter: string;
   status: 'pending' | 'revised';
}

export interface SettingToggle {
   label: string;
   desc: string;
   enabled: boolean;
}