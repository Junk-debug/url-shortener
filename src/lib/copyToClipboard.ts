import { toast } from "sonner";

export async function copyToClipboard(text: string) {
  try {
    await navigator.clipboard.writeText(text);
    toast.success("Copied! The text has been copied to your clipboard.");
  } catch (error) {
    console.error("Failed to copy: ", error);
    toast.error("Failed to copy text.");
    return false;
  }
}
