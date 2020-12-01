import React from "react";
import {
  FormHookDateInput,
  FormHookNumberInput,
  FormHookTextInput,
  FormHookTimeInput,
} from "../../atoms/inputs";
import { SubmitButton } from "../../atoms/buttons";
import { useIntl } from "react-intl";
import { useForm } from "react-hook-form";
import { CreateEventType } from "../../../requests/events/types";
import { CreateEventPageProps } from "./CreateEventPage";
import { EventForm } from "./styles";
import { addTimeToDate } from "./utils";

export type CreateEventFormType = Omit<CreateEventType, "startsAt"> & {
  date: string;
  time: string;
};

export type CreateEventFormProps = CreateEventPageProps;

const CreateEventForm = ({
  isLoading,
  createNewEvent,
}: CreateEventFormProps) => {
  const { formatMessage } = useIntl();
  const {
    handleSubmit,
    control,
    errors,
    watch,
  } = useForm<CreateEventFormType>();

  const onSubmitAction = ({
    time,
    capacity,
    date,
    description,
    title,
  }: CreateEventFormType) => {
    if (!Object.keys(errors).length) {
      const startsAt = addTimeToDate(date, time);
      createNewEvent({ startsAt, capacity, description, title });
    }
  };

  // this is little hack bcs i wanted empty date and time pickers by default
  const dateValue = watch("date");
  const timeValue = watch("time");

  return (
    <EventForm onSubmit={handleSubmit(onSubmitAction)}>
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
      <SubmitButton
        label={formatMessage({ id: "event.create" })}
        loading={isLoading}
      />
    </EventForm>
  );
};

export default CreateEventForm;
