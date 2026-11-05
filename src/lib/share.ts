type ShareCapabilities = {
  share?: (data: ShareData) => Promise<void>;
  clipboard?: Pick<Clipboard, "writeText">;
};

export async function shareProfileLink(
  data: ShareData & { url: string },
  capabilities: ShareCapabilities,
): Promise<"shared" | "copied" | "cancelled" | "manual"> {
  if (capabilities.share) {
    try {
      await capabilities.share(data);
      return "shared";
    } catch (error) {
      if (error instanceof Error && error.name === "AbortError") return "cancelled";
    }
  }
  try {
    if (!capabilities.clipboard) return "manual";
    await capabilities.clipboard.writeText(data.url);
    return "copied";
  } catch {
    return "manual";
  }
}
