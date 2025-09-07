import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  "https://kwvznodcihzcbjwrjhuc.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt3dnpub2RjaWh6Y2Jqd3JqaHVjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTY4MzExMTIsImV4cCI6MjA3MjQwNzExMn0.Itmzsf1e4D-Ck9L6cOtgp8vNDAfF_Mfai53YdbUiSNI"
);
