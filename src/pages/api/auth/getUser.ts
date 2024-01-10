import type { APIRoute } from "astro";
import { supabase } from "../../../lib/supabase";

export const GET: APIRoute = async ({ cookies, redirect }) => {

    const { data: { user } } = await supabase.auth.getUser();

    console.log(user);
    return new Response(
        JSON.stringify({
            isLogin: user
        })
    );
};
