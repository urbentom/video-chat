// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const RtcSdpType = {
  "ANSWER": "ANSWER",
  "OFFER": "OFFER",
  "PRANSWER": "PRANSWER",
  "ROLLBACK": "ROLLBACK"
};

const { ActiveCalls, RTCSessionDescription } = initSchema(schema);

export {
  ActiveCalls,
  RtcSdpType,
  RTCSessionDescription
};