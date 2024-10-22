/* eslint-disable no-unused-vars */
import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://wxeoqwfivkmkaftyfazt.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind4ZW9xd2Zpdmtta2FmdHlmYXp0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjkzMjMxODAsImV4cCI6MjA0NDg5OTE4MH0.ZJimNrzbCR4xS3sl2TRpc_2B1qDvyxT8c4MIVsWXdGk";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
