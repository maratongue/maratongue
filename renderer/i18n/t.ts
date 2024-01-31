import { format, formatToString } from "./format";
import { ExtractVariables } from "./types";
import useI18n from "./useI18n";
import { getMessage, getNumberDeclensionRule, getConfig } from "./utils";

type ValueOf<T> = T[keyof T];

type EveryTranslationOf<D extends string & keyof I18n.MessageSchema> = Extract<
  ValueOf<I18n.MessageSchema[D]>,
  string
>;

function t<T extends string & keyof I18n.MessageSchema>(
  text: T,
  values?: Partial<ExtractVariables<T | EveryTranslationOf<T>>>
) {
  const options = getConfig();
  const i18n = useI18n();

  const locale = i18n.value.locale;
  const message = getMessage(text, locale, options);
  const numberDeclensionRule = getNumberDeclensionRule(locale, options);

  return formatToString(message, values, { numberDeclensionRule });
}

export default t;
