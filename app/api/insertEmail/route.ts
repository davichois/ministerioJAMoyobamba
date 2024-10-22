// app/api/insertEmail/route.ts
import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { createClient } from '@/utils/supabase/server'; // Asegúrate de que este path sea correcto

export async function POST(request: Request) {
  const { email } = await request.json();
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);

  const { error } = await supabase
    .from('enroll')
    .insert([{ email }]);

  if (error) {
    console.error("Error insertando email:", error.message);
    return NextResponse.json({ message: error.message }, { status: 500 });
  }

  return NextResponse.json({ message: 'Email insertado correctamente' });
}
