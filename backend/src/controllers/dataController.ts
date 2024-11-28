import supabase from '../config/supabaseClient';

export async function getAllUsers() {
  const { data, error } = await supabase
    .from('User')
    .select('*');

  if (error) {
    console.error('Erreur lors de la récupération des utilisateurs :', error);
    throw error;
  }

  return data;
}
