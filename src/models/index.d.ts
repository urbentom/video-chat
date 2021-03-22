import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";

export enum RtcSdpType {
  ANSWER = "ANSWER",
  OFFER = "OFFER",
  PRANSWER = "PRANSWER",
  ROLLBACK = "ROLLBACK"
}

export declare class RTCSessionDescription {
  readonly sdp: string;
  readonly type: RtcSdpType | keyof typeof RtcSdpType;
  constructor(init: ModelInit<RTCSessionDescription>);
}

export declare class ActiveCalls {
  readonly id: string;
  readonly name: string;
  readonly offerCandidates?: RTCSessionDescription;
  readonly answerCandidates?: RTCSessionDescription;
  readonly offerUser?: string;
  readonly answerUser?: string;
  constructor(init: ModelInit<ActiveCalls>);
  static copyOf(source: ActiveCalls, mutator: (draft: MutableModel<ActiveCalls>) => MutableModel<ActiveCalls> | void): ActiveCalls;
}