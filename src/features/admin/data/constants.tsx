import { ReactNode } from "react";
import { AdminTab, SettingToggle, Report } from "../types/adminTypes";
import { Flag, Settings, Shield, Users } from "lucide-react";

export const SIDEBAR_ITEMS: {id: AdminTab; label: string; icon: ReactNode}[] = [
   { id: 'users', label: 'Gestão de Usuários', icon: <Users size={16} /> },
   { id: 'content', label: 'Moderação de Conteúdo', icon: <Shield size={16} />},
   { id: 'complaints', label: 'Denúncias', icon: <Flag size={16} />},
   { id: 'configurations', label: 'Configurações', icon: <Settings size={16} />}
]

export const SETTINGS_TOGGLES: SettingToggle[] = [
   { label: 'Moderação automática de comentários', desc: 'Filtra automaticamente conteúdo com linguagem de ódio', enabled: true },
   { label: 'Notificação de novas denúncias', desc: 'Recebe alertas por e-mail quando houver novas denúncias.', enabled: true },
   { label: 'Modo manuntenção', desc: 'Bloqueia novos cadastros e postagens temporariamente', enabled: false },
]