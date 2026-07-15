import { useApp } from "@/app/AppContext";

export function useAdminGuard() {
   const { currentUser }: any = useApp();
   const isAuth = !!currentUser && currentUser.role === 'admin';
   return { currentUser, isAuth };
}