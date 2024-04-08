import { config } from '@/utils/config';

export async function piper(
    message: string,
  ) {
    try {

      const url = new URL(config("piper_url"));
      url.searchParams.append('text', message);

      const res = await fetch(url.toString());
  
      const data = (await res.arrayBuffer()) as any;
      return { audio: data };
    } catch (error) {
  
      console.error('Error in piper:', error);
      throw error;
    }
  }

  async function convertWithRVC(inputFilePath, modelPath, f0UpKey = 0, f0Method = "rmvpe") {
    // Call an API endpoint or service that triggers the RVC conversion
    const response = await fetch('/api/rvc-convert', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            inputFilePath,
            modelPath,
            f0UpKey,
            f0Method,
        }),
    });

    if (!response.ok) {
        throw new Error('RVC conversion failed');
    }

    const data = await response.json();
    return data.outputFilePath;
}
