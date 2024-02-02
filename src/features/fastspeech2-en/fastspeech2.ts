import { TalkStyle } from "@/features/chat/messages";
import { config } from '@/utils/config';

export async function fastspeech2(
  message: string,
  style: TalkStyle,
) {
  const apiKey = config("fastspeech2_apikey");
  if (! apiKey) {
    throw new Error("Invalid FastSpeech2 API Key");
  }

  const fastspeech2Res = await fetch(`${config("fastspeech2_url")}`, {
    method: "POST",
    body: JSON.stringify({
        inputs: message,
    }),
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${apiKey}`,
    },
  });
  if (! fastspeech2Res.ok) {
    throw new Error(`FastSpeech2 API Error (${fastspeech2Res.status})`);
  }
  const data = (await fastspeech2Res.arrayBuffer()) as any;

  return { audio: data };
}
