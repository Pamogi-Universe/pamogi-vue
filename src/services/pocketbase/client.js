import PocketBase from "pocketbase";

const pocketbaseUrl = import.meta.env.VITE_APP_POCKETBASE_URI;

export const pocketbaseClient = new PocketBase(pocketbaseUrl);