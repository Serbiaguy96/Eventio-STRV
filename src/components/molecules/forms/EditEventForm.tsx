import React from "react";
import { EventType } from "../../../store/events/types";
import {
  CreateEventType,
  UpdateEventType,
} from "../../../requests/events/types";
import { useForm } from "react-hook-form";
import { CreateEventFormType } from "./CreateEventForm";
import {
  FormHookDateInput,
  FormHookNumberInput,
  FormHookTextInput,
  FormHookTimeInput,
} from "../../atoms/inputs";
import { useIntl } from "react-intl";
import { addTimeToDate } from "../../Pages/CreateEventPage/utils";
import { getDictOfChangedValues } from "../../Pages/EditEventPage/utils";
import { EditFormContainer } from "./styles";

export type EditEventFormProps = {
  eventData: EventType;
  submitEvent: (newEvent: UpdateEventType) => void;
};

type EditFormType = CreateEventFormType;

const EditEventForm = ({ eventData, submitEvent }: EditEventFormProps) => {
  const { formatMessage } = useIntl();
  const { startsAt, title, capacity, description } = eventData;
  const { handleSubmit, errors, control, watch } = useForm<EditFormType>({
    defaultValues: {
      description,
      capacity,
      title,
      time: startsAt,
      date: startsAt,
    },
  });
  const defaultEventData: CreateEventType = {
    startsAt,
    title,
    capacity,
    description,
  };

  const onSubmitHandle = (data: EditFormType) => {
    if (!Object.keys(errors).length) {
      const { time, date, description, capacity, title } = data;
      const newStartsAt = addTimeToDate(date, time);
      const dataToUpdate = getDictOfChangedValues(defaultEventData, {
        description,
        title,
        capacity,
        startsAt: newStartsAt,
      });
      submitEvent(dataToUpdate);
    }
  };

  const dateValue = watch("date", startsAt);
  const timeValue = watch("time", startsAt);

  return (
    <EditFormContainer id="edit-submit" onSubmit={handleSubmit(onSubmitHandle)}>
      <FormHookTextInput
        name="title"
        label={formatMessage({ id: "event.details.title" })}
        control={control}
        error={!!errors.title}
        required
        helperText={errors.title?.message}
      />
      <FormHookTextInput
        name="description"
        label={formatMessage({ id: "event.details.description" })}
        control={control}
        error={!!errors.description}
        required
        helperText={errors.description?.message}
      />
      <FormHookDateInput
        name="date"
        value={dateValue || null}
        label={formatMessage({ id: "event.details.date" })}
        control={control}
        error={!!errors?.date}
        required
        helperText={errors.date?.message}
      />
      <FormHookTimeInput
        name="time"
        value={timeValue || null}
        label={formatMessage({ id: "event.details.time" })}
        control={control}
        error={!!errors?.time}
        required
        helperText={errors.time?.message}
      />
      <FormHookNumberInput
        name="capacity"
        label={formatMessage({ id: "event.details.capacity" })}
        control={control}
        error={!!errors?.capacity}
        required
        helperText={errors.capacity?.message}
      />
    </EditFormContainer>
  );
};

export default EditEventForm;
