import React from "react";
import { EventsPerRowType } from "../../Pages/Dashboard/types";
import { useLocalizationString } from "../../../store/localization/useSelectors";
import { DateContainer } from "./styles";
import { MORE_EVENTS } from "../../Pages/Dashboard/constants";
import { getUtcDate } from "../../Pages/CreateEventPage/utils";

export type DateFormatProps = {
  eventDate: string;
  listType: EventsPerRowType;
};

const languageDic = {
  cs: "cs-CZ",
  en: "en-us",
};

const DateFormat = ({ eventDate, listType }: DateFormatProps) => {
  const locale = useLocalizationString();
  const date = getUtcDate(eventDate);

  const formatter = new Intl.DateTimeFormat(languageDic[locale], {
    month: "long",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
    timeZone: "UTC",
  });

  // array of date parts but without literals
  const dateParts = formatter
    .formatToParts(date)
    .filter((item, index) => index % 2 === 0);

  return (
    <DateContainer
      inRow={listType === MORE_EVENTS}
    >{`${dateParts[0].value} ${dateParts[1].value}, ${dateParts[2].value} - ${dateParts[3].value}:${dateParts[4].value} ${dateParts[5].value}`}</DateContainer>
  );
};

export default DateFormat;
