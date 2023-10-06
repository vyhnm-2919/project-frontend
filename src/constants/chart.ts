export interface IData {
  rss: string;
  heapTotal: string;
  heapUsed: string;
  external: string;
  arrayBuffers: string;
  time: string;
}

export enum FILTER_ENUM {
  DEFAULT = 'DEFAULT',
  MINUTE = 'MINUTE',
  SECOND = 'SECOND'
}

export default {
  FILTER_ENUM
};
