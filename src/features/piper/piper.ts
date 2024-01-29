import { config } from '@/utils/config';

export async function piper(
  file: File,
  prompt?: string,
) {
  // Request body
  const formData = new FormData();
  formData.append('file', file);
  if (prompt) {
    formData.append('prompt', prompt);
  }

  console.debug('piper req', formData);

  const res = await fetch(`${config("piper_url")}/inference`, {
    method: "POST",
    body: formData,
    headers: {
      'Accept': 'text/html',
    },
  });
  if (! res.ok) {
    throw new Error(`Piper API Error (${res.status})`);
  }
  const data = await res.json();
  console.debug('piper res', data);

  return { text: data.text.trim() };
}
