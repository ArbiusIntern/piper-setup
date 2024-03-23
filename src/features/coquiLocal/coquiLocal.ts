import { config } from '@/utils/config';

export async function coquiLocal(
  message: string,
) {
  try {
    const res = await fetch(config("coquiLocal_url"), {
      method: 'POST',
      headers: {
        'text': message,
        'speaker-id': config("coquiLocal_voiceid"),
      }
    });

    const data = await res.arrayBuffer()
    return { audio: data };

  } catch (error) {

    console.error('Error in coquiLocal:', error);
    throw error;
  }
}
