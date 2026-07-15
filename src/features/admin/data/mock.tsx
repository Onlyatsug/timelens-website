import { Report } from "../types/adminTypes";

export const MOCK_REPORTS: Report[] = [
   { id: 'r1', postId: 'p3', reason: 'Conteúdo inapropriado', reporter: 'u4', status: 'pending'},
   { id: 'r2', postId: 'p6', reason: 'Informação incorreta', reporter: 'u2', status: 'revised'},
]