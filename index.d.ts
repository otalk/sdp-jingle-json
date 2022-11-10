declare module "sdp-jingle-json" {
  export interface Session {
    sid?: string;
    contents: Media[];
    groups?: SessionGroup[];
  }

  export interface Media {
    creator: Role;
    senders: Senders;
    name: string; // SDP mid, or kind (audio/video) if no mid present
    application: Description;
    transport: Transport;
  }

  export interface Description {
    applicationType: string; // usually "rtp"
    media: string; // usually "video" | "audio"
    payloads: Payload[];
    encryption?: Encryption[];
    feedback?: Feedback[];
    headerExtensions?: HeaderExtension[];
    bandwidth?: Bandwidth;
    sources?: MediaSource[];
    sourceGroups?: MediaSourceGroup[];
    ssrc?: string;
    mux?: boolean;
    rsize?: boolean;
    googConferenceFlag?: boolean;
  }
  
  export interface Transport {
    transportType: string;
    ufrag: string;
    pwd: string;
    candidates: Candidate[];
    fingerprints: Fingerprint[];
    sctp?: {number: string, protocol: string, streams: string}[];
  }

  export interface SessionGroup {
    semantics: string;
    contents: string[];
  }

  export interface Payload {
    id: string;
    name: string;
    clockrate: string;
    channels: number;
    parameters: PayloadParameters[];
    feedback: Feedback[];
  }

  export interface PayloadParameters {
    key: string;
    value: string;
  }

  export interface Encryption {
    tag: string;
    cipherSuite: string;
    keyParams: string;
    sessionParams: string;
  }

  export interface Feedback {
    id: string;
    type: string;
    value: string;
    parameters: string[];
  }

  export interface HeaderExtension {
    id: string;
    uri: string;
    senders: Senders;
  }

  export interface MediaSource {
    ssrc: string;
    parameters: MediaSourceParameters[];
  }

  export interface MediaSourceParameters {
    key: string;
    value: string;
  }

  export interface MediaSourceGroup {
    semantics: string;
    sources: string[];
  }

  export interface Bandwidth {
    type: string;
    bandwidth: string;
  }

  export interface Fingerprint {
    hash: string;
    value: string;
    setup?: string;
  }

  export interface Candidate {
    id?: string;
    foundation: string;
    component: string;
    protocol: string;
    priority: string;
    ip: string;
    port: string;
    type: string;
    generation: string;
    relAddr?: string;
    relPort?: string;
    tcpType?: string;
    network: string;
  }

  export type Role = "initiator" | "responder";
  export type Direction = "incoming" | "outgoing";
  export type Senders = "initiator" | "responder" | "both" | "none";

  // Conversion from JSON to SDP
  export interface ToSessionSDPOptions {
    role?: Role;
    direction?: Direction;
    sid?: string | number;
    time?: number;
  }

  export interface ToMediaSDPOptions {
    role?: Role;
    direction?: Direction;
  }

  export function toIncomingSDPOffer(session: Session): string;
  export function toOutgoingSDPOffer(session: Session): string;
  export function toIncomingSDPAnswer(session: Session): string;
  export function toOutgoingSDPAnswer(session: Session): string;
  export function toIncomingMediaSDPOffer(media: Media): string;
  export function toOutgoingMediaSDPOffer(media: Media): string;
  export function toIncomingMediaSDPAnswer(media: Media): string;
  export function toOutgoingMediaSDPAnswer(media: Media): string;
  export function toSessionSDP(session: Session, opts: ToSessionSDPOptions): string;
  export function toMediaSDP(media: Media, opts: ToMediaSDPOptions): string;
  export function toCandidateSDP(candidate: Candidate): string;

  // Conversion from SDP to JSON
  export interface ToSessionJSONOptions {
    role?: Role;
    direction?: Direction;
    creators?: Role[];
  }

  export interface ToMediaJSONOptions {
    role?: Role;
    direction?: Direction;
    creator?: Role;
  }

  export function toIncomingJSONOffer(sdp: string, creators?: Role[]): Session;
  export function toOutgoingJSONOffer(sdp: string, creators?: Role[]): Session;
  export function toIncomingJSONAnswer(sdp: string, creators?: Role[]): Session;
  export function toOutgoingJSONAnswer(sdp: string, creators?: Role[]): Session;
  export function toIncomingMediaJSONOffer(sdp: string, creators?: Role[]): Media;
  export function toOutgoingMediaJSONOffer(sdp: string, creators?: Role[]): Media;
  export function toIncomingMediaJSONAnswer(sdp: string, creators?: Role[]): Media;
  export function toOutgoingMediaJSONAnswer(sdp: string, creators?: Role[]): Media;
  export function toSessionJSON(sdp: string, opts: ToSessionJSONOptions): Session;
  export function toMediaJSON(sdp: string, session: string, opts: ToMediaJSONOptions): Media;
  export function toCandidateJSON(sdp: string): Candidate;
}
