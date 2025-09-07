import { useEffect, useState } from "react";
import { supabase } from "../supabase";

type Props = {
  setSessionUserId: (sessionId: string | null) => void;
  sessionUserId: string | null;
};

const UserStatus = ({ setSessionUserId, sessionUserId }: Props) => {
  useEffect(() => {
    /* Active User */
    supabase.auth.getSession().then(({ data }) => {
      setSessionUserId(data.session?.user.id ?? null);
    });

    /* login-logout */
    const { data: sub } = supabase.auth.onAuthStateChange((_e, s) => {
      setSessionUserId(s?.user.id ?? null);
    });

    /* stop follow when logout */
    return () => sub.subscription.unsubscribe();
  }, []);

  return <div>UserId:{sessionUserId}</div>;
};

export default UserStatus;
