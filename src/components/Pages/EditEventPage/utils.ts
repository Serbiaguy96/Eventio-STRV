import {
  CreateEventType,
  UpdateEventType,
} from "../../../requests/events/types";

export const getDictOfChangedValues = (
  defaultData: CreateEventType,
  newData: CreateEventType
): UpdateEventType => {
  let newDict: UpdateEventType = {};
  Object.keys(newData).forEach((key) => {
    // @ts-ignore
    if (newData[key] !== defaultData[key]) {
      newDict = {
        ...newDict,
        // @ts-ignore
        [key]: newData[key],
      };
    }
  });
  return newDict;
};
