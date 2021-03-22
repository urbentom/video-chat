/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateActiveCallsInput = {
  id?: string | null,
  name: string,
  offerCandidates?: RTCSessionDescriptionInput | null,
  answerCandidates?: RTCSessionDescriptionInput | null,
  offerUser?: string | null,
  answerUser?: string | null,
  _version?: number | null,
};

export type RTCSessionDescriptionInput = {
  sdp: string,
  type: RTCSdpType,
};

export enum RTCSdpType {
  ANSWER = "ANSWER",
  OFFER = "OFFER",
  PRANSWER = "PRANSWER",
  ROLLBACK = "ROLLBACK",
}


export type ModelActiveCallsConditionInput = {
  name?: ModelStringInput | null,
  offerUser?: ModelStringInput | null,
  answerUser?: ModelStringInput | null,
  and?: Array< ModelActiveCallsConditionInput | null > | null,
  or?: Array< ModelActiveCallsConditionInput | null > | null,
  not?: ModelActiveCallsConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ActiveCalls = {
  __typename: "ActiveCalls",
  id?: string,
  name?: string,
  offerCandidates?: RTCSessionDescription,
  answerCandidates?: RTCSessionDescription,
  offerUser?: string | null,
  answerUser?: string | null,
  _version?: number,
  _deleted?: boolean | null,
  _lastChangedAt?: number,
  createdAt?: string,
  updatedAt?: string,
};

export type RTCSessionDescription = {
  __typename: "RTCSessionDescription",
  sdp?: string,
  type?: RTCSdpType,
};

export type UpdateActiveCallsInput = {
  id: string,
  name?: string | null,
  offerCandidates?: RTCSessionDescriptionInput | null,
  answerCandidates?: RTCSessionDescriptionInput | null,
  offerUser?: string | null,
  answerUser?: string | null,
  _version?: number | null,
};

export type DeleteActiveCallsInput = {
  id?: string | null,
  _version?: number | null,
};

export type ModelActiveCallsFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  offerUser?: ModelStringInput | null,
  answerUser?: ModelStringInput | null,
  and?: Array< ModelActiveCallsFilterInput | null > | null,
  or?: Array< ModelActiveCallsFilterInput | null > | null,
  not?: ModelActiveCallsFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelActiveCallsConnection = {
  __typename: "ModelActiveCallsConnection",
  items?:  Array<ActiveCalls | null > | null,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type CreateActiveCallsMutationVariables = {
  input?: CreateActiveCallsInput,
  condition?: ModelActiveCallsConditionInput | null,
};

export type CreateActiveCallsMutation = {
  createActiveCalls?:  {
    __typename: "ActiveCalls",
    id: string,
    name: string,
    offerCandidates?:  {
      __typename: "RTCSessionDescription",
      sdp: string,
      type: RTCSdpType,
    } | null,
    answerCandidates?:  {
      __typename: "RTCSessionDescription",
      sdp: string,
      type: RTCSdpType,
    } | null,
    offerUser?: string | null,
    answerUser?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateActiveCallsMutationVariables = {
  input?: UpdateActiveCallsInput,
  condition?: ModelActiveCallsConditionInput | null,
};

export type UpdateActiveCallsMutation = {
  updateActiveCalls?:  {
    __typename: "ActiveCalls",
    id: string,
    name: string,
    offerCandidates?:  {
      __typename: "RTCSessionDescription",
      sdp: string,
      type: RTCSdpType,
    } | null,
    answerCandidates?:  {
      __typename: "RTCSessionDescription",
      sdp: string,
      type: RTCSdpType,
    } | null,
    offerUser?: string | null,
    answerUser?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteActiveCallsMutationVariables = {
  input?: DeleteActiveCallsInput,
  condition?: ModelActiveCallsConditionInput | null,
};

export type DeleteActiveCallsMutation = {
  deleteActiveCalls?:  {
    __typename: "ActiveCalls",
    id: string,
    name: string,
    offerCandidates?:  {
      __typename: "RTCSessionDescription",
      sdp: string,
      type: RTCSdpType,
    } | null,
    answerCandidates?:  {
      __typename: "RTCSessionDescription",
      sdp: string,
      type: RTCSdpType,
    } | null,
    offerUser?: string | null,
    answerUser?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type SyncActiveCallsQueryVariables = {
  filter?: ModelActiveCallsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncActiveCallsQuery = {
  syncActiveCalls?:  {
    __typename: "ModelActiveCallsConnection",
    items?:  Array< {
      __typename: "ActiveCalls",
      id: string,
      name: string,
      offerCandidates?:  {
        __typename: "RTCSessionDescription",
        sdp: string,
        type: RTCSdpType,
      } | null,
      answerCandidates?:  {
        __typename: "RTCSessionDescription",
        sdp: string,
        type: RTCSdpType,
      } | null,
      offerUser?: string | null,
      answerUser?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetActiveCallsQueryVariables = {
  id?: string,
};

export type GetActiveCallsQuery = {
  getActiveCalls?:  {
    __typename: "ActiveCalls",
    id: string,
    name: string,
    offerCandidates?:  {
      __typename: "RTCSessionDescription",
      sdp: string,
      type: RTCSdpType,
    } | null,
    answerCandidates?:  {
      __typename: "RTCSessionDescription",
      sdp: string,
      type: RTCSdpType,
    } | null,
    offerUser?: string | null,
    answerUser?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListActiveCallssQueryVariables = {
  filter?: ModelActiveCallsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListActiveCallssQuery = {
  listActiveCallss?:  {
    __typename: "ModelActiveCallsConnection",
    items?:  Array< {
      __typename: "ActiveCalls",
      id: string,
      name: string,
      offerCandidates?:  {
        __typename: "RTCSessionDescription",
        sdp: string,
        type: RTCSdpType,
      } | null,
      answerCandidates?:  {
        __typename: "RTCSessionDescription",
        sdp: string,
        type: RTCSdpType,
      } | null,
      offerUser?: string | null,
      answerUser?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type OnCreateActiveCallsSubscription = {
  onCreateActiveCalls?:  {
    __typename: "ActiveCalls",
    id: string,
    name: string,
    offerCandidates?:  {
      __typename: "RTCSessionDescription",
      sdp: string,
      type: RTCSdpType,
    } | null,
    answerCandidates?:  {
      __typename: "RTCSessionDescription",
      sdp: string,
      type: RTCSdpType,
    } | null,
    offerUser?: string | null,
    answerUser?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateActiveCallsSubscription = {
  onUpdateActiveCalls?:  {
    __typename: "ActiveCalls",
    id: string,
    name: string,
    offerCandidates?:  {
      __typename: "RTCSessionDescription",
      sdp: string,
      type: RTCSdpType,
    } | null,
    answerCandidates?:  {
      __typename: "RTCSessionDescription",
      sdp: string,
      type: RTCSdpType,
    } | null,
    offerUser?: string | null,
    answerUser?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteActiveCallsSubscription = {
  onDeleteActiveCalls?:  {
    __typename: "ActiveCalls",
    id: string,
    name: string,
    offerCandidates?:  {
      __typename: "RTCSessionDescription",
      sdp: string,
      type: RTCSdpType,
    } | null,
    answerCandidates?:  {
      __typename: "RTCSessionDescription",
      sdp: string,
      type: RTCSdpType,
    } | null,
    offerUser?: string | null,
    answerUser?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};
