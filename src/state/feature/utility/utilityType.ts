import { IUtilitySchoolClasses, IUtilitySchoolClassesFetchResponse } from "../../../services/utility/utilityType";
import { FetchStatusEnum } from "../../../services/fetchType";
import { IBaseActionType } from "../../actionType";

export interface IUtilitySliceStateType {
  schoolClassesFetchStatus: FetchStatusEnum;
  schoolClassesError?: string;
  schoolClassesResponse?: IUtilitySchoolClassesFetchResponse;
  schoolClasses: IUtilitySchoolClasses[];
}

export interface IUtilitySchoolClassesFetchSuccessActionType extends IBaseActionType {
  payload: IUtilitySchoolClassesFetchResponse;
}

export interface IUtilitySchoolClassesFetchFailureActionType extends IBaseActionType {
  payload: string;
}