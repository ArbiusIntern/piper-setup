import { TalkStyle } from "@/features/chat/messages";
import { config } from '@/utils/config';

export async function piper(
  message: string,
  style: TalkStyle,
) {

  const res = await fetch(`${config("piper_url")}`, {
    method: "POST",
    body: message,
    headers: {
      "Content-Type": "text/plain",
    },
  });

  if (! res.ok) {
    throw new Error(`Piper API Error (${res.status})`);
  }

  const data = (await res.arrayBuffer()) as any;

  console.debug('piper res', data);

  return { audio: data };
}
