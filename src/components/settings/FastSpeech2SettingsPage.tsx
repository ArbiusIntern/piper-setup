import { useTranslation } from 'react-i18next';

import { BasicPage, FormRow, NotUsingAlert } from './common';
import { TextInput } from "@/components/textInput";
import { SecretTextInput } from "@/components/secretTextInput";
import { config, updateConfig } from "@/utils/config";

export function FastSpeech2SettingsPage({
  fastspeech2ApiKey,
  setFastspeech2ApiKey,
  fastspeech2Url,
  setFastspeech2Url,
  setSettingsUpdated,
}: {
  fastspeech2ApiKey: string;
  setFastspeech2ApiKey: (key: string) => void;
  fastspeech2Url: string;
  setFastspeech2Url: (url: string) => void;
  setSettingsUpdated: (updated: boolean) => void;
}) {
  const { t } = useTranslation();

  return (
    <BasicPage
      title={t("FastSpeech2") + " "+ t("Settings")}
      description={t("fastspeech2_desc", "Configure FastSpeech2")}
    >
      { config("tts_backend") !== "fastspeech2" && (
        <NotUsingAlert>
          {t("not_using_alert", "You are not currently using {{name}} as your {{what}} backend. These settings will not be used.", {name: t("FastSpeech2"), what: t("TTS")})}
        </NotUsingAlert>
      ) }
      <ul role="list" className="divide-y divide-gray-100 max-w-xs">
        <li className="py-4">
          <FormRow label={t("API Key")}>
            <SecretTextInput
              value={fastspeech2ApiKey}
              onChange={(event: React.ChangeEvent<any>) => {
                setFastspeech2ApiKey(event.target.value);
                updateConfig("fastspeech2_apikey", event.target.value);
                setSettingsUpdated(true);
              }}
            />
          </FormRow>
        </li>
      </ul>
    </BasicPage>
  );
}
